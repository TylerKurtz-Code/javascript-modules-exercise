const inventory = [];

export const addItem = (name) => {
  inventory.push(name);
};

export const removeItem = (name) => {
  const index = inventory.indexOf(name);
  inventory.splice(index, 1);
};

export const listItems = () => {
  inventory.forEach((item) => {
    console.log(item);
  });
};