export default interface iPlantDocument {
    _id?: string;
    owner: string;
    data: Array<iPlant>;
}

export interface iPlant {
    _id?: string;
    health: number;
}