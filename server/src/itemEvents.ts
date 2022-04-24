import alt from 'alt-server';
import { ItemEffects } from '../../../../server/systems/itemEffects';
import { INVENTORY_TYPE } from '../../../../shared/enums/inventoryTypes';
import { Item } from '../../../../shared/interfaces/item';
import { PlantControllerItemEvents } from '../enums/events/item-events';
import { PlantController } from './controller';

ItemEffects.add(PlantControllerItemEvents.createPot, handlePotCreation);
function handlePotCreation(player: alt.Player, item: Item, slot: number, type: INVENTORY_TYPE) {
    alt.log(`${player.name} created a pot.`);
    PlantController.createPot(player);
}