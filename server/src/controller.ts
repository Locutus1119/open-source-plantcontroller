import alt from 'alt-server';
import { config } from '../config';
import iPlantDocument from '../interfaces/iPlant';
import { ItemFactory } from '../../../../server/systems/item';
import items from '../config/items';
import Database from '@stuyk/ezmongodb';
import { ObjectId } from 'mongodb';

export class PlantController {
    static async init() {
        for (const item in items) {
            const data = items[item];
            const itemExists = await ItemFactory.get(data.dbName);

            if (itemExists) continue;

            await ItemFactory.add(data);
        }
    }

    static async createPot(player: alt.Player) {
        const playerDocument = await Database.fetchData<iPlantDocument>('owner', player.data._id, config.dbCollection);
        if (playerDocument) {
            playerDocument.data.push({
                health: 100,
            });

            await Database.updatePartialData(
                playerDocument._id,
                { data: playerDocument.data },
                config.dbCollection,
            );

            alt.log(`~lg~[PLANT] ==> ${player.data.name} created a new Plant!`);
        }
    }

    private static async getDocumentById(ownerId: string) {
        const plant = Database.fetchData<iPlantDocument>('owner', ownerId, config.dbCollection);
        return plant;
    }

    private static async getAllPlants() {
        return Database.fetchAllData<iPlantDocument>(config.dbCollection);
    }

    private static async updatePlant(plant: iPlantDocument, newData: Object) {
        return Database.updatePartialData(plant, newData, config.dbCollection);
    }
}
