import { ItemFactory } from "../../../../../server/systems/item";
import { tools } from "./tools";

export default {
    ...tools,
}
const items = [
    ...tools,
];

for(const item in items) {
    const current = items[item];
    await ItemFactory.add(current);
}