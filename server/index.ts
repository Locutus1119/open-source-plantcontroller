import alt from 'alt-server';
import { PluginSystem } from '../../../server/systems/plugins';

const PLUGIN_NAME = 'PlantController'
PluginSystem.registerPlugin('open-source-plantcontroller', () => {
   alt.log(`~lg~[PLUGIN] ==> ${PLUGIN_NAME} Loaded!`); 
});