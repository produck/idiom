import { Instance as I } from '@produck/idiom';

const items = ['item1', 'item2', 'item3'];
const copyItems = [];

I.Array.forEach(items, item => {
	I.Array.push(copyItems, item);
	I.Array.push(copyItems, 0);
});

export default copyItems;
