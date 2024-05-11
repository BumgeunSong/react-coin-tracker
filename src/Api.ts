export async function fetchCoins() {
    return await (await fetch("https://api.coinpaprika.com/v1/coins")).json();
}

export async function fetchCoinInfo(coinId: string | undefined) {
    const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
    const json = await response.json();
    return json
}

export async function fetchCoinPrices(coinId: string | undefined, upTo: number) {
    const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}/markets?quotes=KRW`);
    const json = await response.json();
    return json.slice(0, upTo)
}

export async function fetchCoinHistory(coinId: string | undefined) {
    const response = await fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`);
    const json = await response.json();
    return json
}