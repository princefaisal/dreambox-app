import React, { useState } from 'react';
import HomeScreen from '../screens/Home';
import CartScreen from '../screens/Cart';
import WalletScreen from '../screens/Wallet';
import TicketsScreen from '../screens/Tickets';
import DrawsScreen from '../screens/Draws';
import AccountScreen from '../screens/Account';
import LoginScreen from '../screens/Auth/Login';
import OTPScreen from '../screens/Auth/OTP';
import { useCart } from '../hooks/useCart';
import { useWallet } from '../hooks/useWallet';
import { useTickets } from '../hooks/useTickets';
import { useAuth } from '../hooks/useAuth';
import Navigation from '../components/Navigation';


export default function App() {
const [activeTab, setActiveTab] = useState('home');
const [authStep, setAuthStep] = useState('login');


const auth = useAuth();
const cart = useCart();
const wallet = useWallet();
const tickets = useTickets();


if (!auth.user) {
return authStep === 'login' ? (
<LoginScreen onSubmit={(m) => { auth.login(m); setAuthStep('otp'); }} />
) : (
<OTPScreen onVerify={() => auth.verifyOTP()} />
);
}


const handleCheckout = () => {
const total = cart.totalPrice;
if (!wallet.canPay(total)) {
alert('Insufficient balance');
return;
}
wallet.pay(total);
tickets.generateFromCart(cart.items);
cart.clear();
};


return (
<>
{activeTab === 'home' && <HomeScreen onAdd={cart.add} />}
{activeTab === 'cart' && (
<CartScreen
cart={cart.items}
onCheckout={handleCheckout}
updateQuantity={cart.update}
remove={cart.remove}
balance={wallet.balance}
/>
)}
{activeTab === 'wallet' && (
<WalletScreen
balance={wallet.balance}
transactions={wallet.transactions}
onAddFunds={wallet.deposit}
/>
)}
{activeTab === 'tickets' && <TicketsScreen tickets={tickets.items} />}
{activeTab === 'draws' && <DrawsScreen />}
{activeTab === 'account' && (
<AccountScreen user={auth.user} onLogout={auth.logout} />
)}
<Navigation active={activeTab} onChange={setActiveTab} />
</>
);
}