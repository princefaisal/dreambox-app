import { useState, useMemo } from 'react';


export const useCart = () => {
const [items, setItems] = useState([]);


const add = (campaign) => {
setItems((prev) => {
const found = prev.find(i => i.campaign.id === campaign.id);
if (found) {
return prev.map(i =>
i.campaign.id === campaign.id
? { ...i, quantity: i.quantity + 1 }
: i
);
}
return [...prev, { id: Date.now(), campaign, quantity: 1 }];
});
};


const update = (id, delta) => {
setItems(prev => prev.map(i =>
i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
));
};


const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));
const clear = () => setItems([]);


const totalPrice = useMemo(
() => items.reduce((a, i) => a + i.campaign.price * i.quantity, 0),
[items]
);


return { items, add, update, remove, clear, totalPrice };
};