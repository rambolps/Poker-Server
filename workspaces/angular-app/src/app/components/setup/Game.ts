export interface Game {
    id: number;
    BigBlind: number;
    SmallBlind: number;
    Winner: number;
    Pot: number;
    Players: Player[];
    Turn: number;
    Playing: boolean;
}

export interface Player {
    Name: string;
    Bet: number;
    Cards: number;
    Money: number;
}