import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchCoins } from "../Api";
import { useQuery } from "react-query";
import ToggleSwitchHeader from "./ToggleSwitch";
import { isDarkModeState } from "../atoms";

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.primary}
`

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`

const Header = styled.header``
const CoinList = styled.ul``
const CoinItem = styled.li`
    margin-top: 16px;
    margin-bottom: 16px;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.background};
    border: 1px solid white;
    border-radius: 16px;
    a {
        padding: 16px;
        transition: color 0.2s ease-in;
        display: flex;
        align-items: center;
    }
    &:hover {
	a {
		color: ${(props) => props.theme.secondary};
	}
  }
`

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

export interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}

function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins, {
        select: (data) => data.slice(0, 20)
    })
 
    return <Container>
        <Header>
            <ToggleSwitchHeader toggleState={isDarkModeState} />
            <Title>코인 목록</Title>
        </Header>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <CoinList>
                {data?.map((coin) => (
                    <CoinItem key={coin.id}>
                        <Link to={`/${coin.id}/prices`} state={{ name: coin.name }}>
                            <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}>
                            </Img>
                            {coin.name} &rarr;
                        </Link>
                    </CoinItem>
                ))}
            </CoinList>
        )
        }
    </Container>
}

export default Coins;