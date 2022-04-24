import alt from 'alt-server';
import { PluginSystem } from '../../../server/systems/plugins';
import { config } from './config';
import { PlantController } from './src/controller';
import { PlayerEvents } from '../../../server/events/playerEvents';
import { ATHENA_EVENTS_PLAYER } from '../../../shared/enums/athenaEvents';
import iPlantDocument from './interfaces/iPlant';

import './src/controller';
import './src/itemEvents';
import Database from '@stuyk/ezmongodb';

const PLUGIN_NAME = 'PlantController';
PluginSystem.registerPlugin(PLUGIN_NAME, () => {
    Database.createCollection(config.dbCollection);
    PlantController.init();

    alt.log(`~lg~[PLUGIN] ==> ${PLUGIN_NAME} Loaded!`);
});

PlayerEvents.on(ATHENA_EVENTS_PLAYER.SELECTED_CHARACTER, async (player: alt.Player) => {
    const documentExists = await Database.fetchData<iPlantDocument>('owner', player.data._id, config.dbCollection);
    if(documentExists === null) {
        const newDocument: iPlantDocument = {
            owner: player.data._id,
            data: []
        };
        await Database.insertData(newDocument, config.dbCollection);
    } else {
        alt.logWarning(`~lg~[PLUGIN] ==> ${PLUGIN_NAME} - Player ${player.name} already has a plant document!`);
    }
});
