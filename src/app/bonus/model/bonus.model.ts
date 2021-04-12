export interface Bonus  {
    id: number;
    userId:number;
    bonusType: "BunusType";
    bonusQuantity:number;
    currency: "currency"
    
}

export enum BonusType {
    Frespin = "Freespin",
    Freebet = "Freebet",
    Money = "Money"
}

export enum currency {
    GEl = "GEl",
    USD = "USD"
}

