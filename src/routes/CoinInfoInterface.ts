
interface Tag {
    id: string;
    name: string;
    coin_counter: number;
    ico_counter: number;
}

interface TeamMember {
    id: string;
    name: string;
    position: string;
}

interface Link {
    explorer?: string[];
    facebook?: string[];
    reddit?: string[];
    source_code?: string[];
    website?: string[];
    youtube?: string[];
    medium?: null | string[];
}

interface Whitepaper {
    link: string;
    thumbnail: string;
}

interface CoinInfoInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    tags: Tag[];
    team: TeamMember[];
    description: string;
    message: string;
    open_source: boolean;
    hardware_wallet: boolean;
    started_at: string;
    development_status: string;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    contract: string;
    platform: string;
    contracts: {
        contract: string;
        platform: string;
        type: string;
    }[];
    links: Link;
    whitepaper: Whitepaper;
    first_data_at: string;
    last_data_at: string;
}

export default CoinInfoInterface