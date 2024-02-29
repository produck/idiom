const items = ['item1', 'item2', 'item3'];
const copyItems = [];

items.forEach(items, item => {
	copyItems.push(copyItems, item);
	copyItems.push(copyItems, 0);
});

export default copyItems;
