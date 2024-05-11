import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistory } from "../Api";
import { useParams } from "react-router-dom";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkModeState } from "../atoms";

// Define the ICoinPriceHistory interface
interface ICoinPriceHistory {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

// Styled components for the chart
const ChartContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
`;

const ChartTitle = styled.h2`
    text-align: center;
`;

const ChartWrapper = styled.div`
    padding: 20px;
    margin-top: 16px;
`;

function dateStringFromUTCTimestamp(timestamp: number) {
    const date = new Date(Number(timestamp) * 1000)
    return `${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-${(date.getUTCDate()).toString().padStart(2, '0')}`
}

function PriceChart() {
    const { coinId } = useParams()
    const { isLoading, data } = useQuery<ICoinPriceHistory[]>(["history", coinId], () => fetchCoinHistory(coinId))
    const isDarkMode = useRecoilValue(isDarkModeState)

    let closeDate = data?.map((coinPriceHistory) => {
        return dateStringFromUTCTimestamp(coinPriceHistory.time_close)
    }) ?? []

    // Convert the data to candlestick format
    const candlestickData = data ? convertToCandlestickData(data) : [];

    var options: ApexOptions = {
        chart: {
            id: "candlestick"
        },
        theme: {
            mode: isDarkMode ? "dark" : "light"
        },
        xaxis: {
            categories: closeDate,
            labels: {
                style: {
                    colors: "#EEEEEE"
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#EEEEEE"
                }
            }
        },
        title: {
            text: 'Recent price',
            style: {
                color: "#EEEEEE"
            }
        },
        colors: ["#00ADB5", "#222831"]
    }

    const series = [
        {
            name: "close Price",
            data: candlestickData
        }
    ]

    return (
        <ChartContainer>
            <ChartTitle>Price Chart</ChartTitle>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ChartWrapper>
                    <Chart
                        options={options}
                        series={series}
                        type="candlestick"
                    />
                </ChartWrapper>
            )}
        </ChartContainer>
    );
}

const convertToCandlestickData = (data: ICoinPriceHistory[]): [number, [number, number, number, number]][] => {
    return data.map((item) => [
        item.time_open, // Timestamp
        [
            parseFloat(item.open), // Open
            parseFloat(item.high), // High
            parseFloat(item.low), // Low
            parseFloat(item.close), // Close
        ],
    ]);
};

export default PriceChart;
