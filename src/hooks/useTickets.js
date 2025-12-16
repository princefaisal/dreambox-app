import { useState } from 'react';
import { generateTicketId } from '../utils/ids';


export const useTickets = () => {
const [items, setItems] = useState([]);


const generateFromCart = (cartItems) => {
const generated = [];
cartItems.forEach(({ campaign, quantity }) => {
for (let i = 0; i < quantity; i++) {
generated.push({
id: generateTicketId(campaign.id),
campaignTitle: campaign.title,
status: 'Active',
drawDate: campaign.drawDate
});
}
});
setItems(prev => [...prev, ...generated]);
};


return { items, generateFromCart };
};