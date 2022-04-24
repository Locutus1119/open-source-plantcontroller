import { ITEM_TYPE } from "../../../../../shared/enums/itemTypes";
import { Item } from "../../../../../shared/interfaces/item";
import { PlantControllerItemEvents } from "../../enums/events/item-events";

export const tools: Array<Item> = [
    {
        name: 'Pot',
        description: 'Used to hold plant seeds.',
        icon: 'crate',
        slot: 0,
        rarity: 0,
        quantity: 1,
        behavior: ITEM_TYPE.CAN_DROP | ITEM_TYPE.IS_TOOLBAR | ITEM_TYPE.CONSUMABLE,
        model: '',
        data: {
            event: PlantControllerItemEvents.createPot,
        },
        dbName: 'plant_pot',
    }
];