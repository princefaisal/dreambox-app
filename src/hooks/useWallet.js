import { useState } from 'react';


export const useWallet = () => {
const [balance, setBalance] = useState(1000);
const [transactions, setTransactions] = useState([]);


const deposit = (amount) => {
setBalance(b => b + amount);
setTransactions(t => [...t, { id: Date.now(), type: 'Deposit', amount }]);
};


const pay = (amount) => {
setBalance(b => b - amount);
setTransactions(t => [...t, { id: Date.now(), type: 'Spend', amount }]);
};


const canPay = (amount) => balance >= amount;


return { balance, transactions, deposit, pay, canPay };
};