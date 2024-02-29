import { Instance } from '@produck/idiom';

const items = ['item1', 'item2', 'item3'];
const copyItems = [];

Instance.Array.forEach(items, item => {
	Instance.Array.push(copyItems, item);
	Instance.Array.push(copyItems, 0);
});

export default copyItems;
