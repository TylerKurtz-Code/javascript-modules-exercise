import { addItem, removeItem, listItems } from "./inventory.mjs";

addItem("sword");
addItem("shield");
addItem("potion");

removeItem("shield");
listItems();