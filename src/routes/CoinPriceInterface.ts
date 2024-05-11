export interface CoinPrice {
    exchange_id: string;
    exchange_name: string;
    pair: string;
    base_currency_id: string;
    base_currency_name: string;
    quote_currency_id: string;
    quote_currency_name: string;
    market_url: string;
    category: string;
    fee_type: string;
    outlier: boolean;
    adjusted_volume_24h_share: number;
    quotes: Quotes;
    last_updated: string;
}
export interface Quotes {
    KRW: KRW;
}
export interface KRW {
    price: number;
    volume_24h: number;
}
