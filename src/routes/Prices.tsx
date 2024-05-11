import { useLoaderData } from "react-router-dom";
import { CoinPrice } from "./CoinPriceInterface";
import { Overview, OverviewItem } from "./Overview";

function Prices() {
    let coinPriceData = useLoaderData() as CoinPrice[]
    console.log(coinPriceData)
    return (
        <>
            {coinPriceData.map((coinPrice) => (
                <Overview>
                    <OverviewItem>
                        <span>Exchange</span>
                        <span>{coinPrice?.exchange_name}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>Price</span>
                        <span>{coinPrice?.quotes.KRW.price.toFixed(0)} KRW</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>24H Volume</span>
                        <span>{coinPrice?.adjusted_volume_24h_share.toFixed(3)}</span>
                    </OverviewItem>
                </Overview>
            ))
            }
        </>
    )
}

/*
useQuery vs useLoaderData
- useQuery: 다양한 상황에 사용. 클라이언트 사이드에서 캐싱, 백그라운드 업데이트, 쿼리 무효화 등 API 관련 기능 제공
- useLoaderData: 특정 URL의 컴포넌트를 렌더링하기 위한 데이터가 필요할 때. 서버 사이드 렌더링, 정적 사이트 생성(SSG)가 필요한 경우
*/

export default Prices;