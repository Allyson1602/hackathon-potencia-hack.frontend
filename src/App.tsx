import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Home from './pages/home';
import CardPayment from './pages/cardPayment';
import Donation from './pages/donation';
import PixPayment from './pages/pixPayment';
import Plan from './pages/plan';
import School from './pages/school';
import SuccessfullPayment from './pages/successfulPayment';
import Login from './pages/login';
import ScreenTrance from './pages/screenTrance';
import Points from './pages/points';
import ChatBot from './pages/chatBot';

function App() {
  	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path='/app' element={<Main />} >
						<Route path='/app' element={<Home />} />
						<Route path='/app/card-payment' element={<CardPayment />} />
						<Route path='/app/donation' element={<Donation />} />
						<Route path='/app/pix-payment' element={<PixPayment />} />
						<Route path='/app/plan' element={<Plan />} />
						<Route path='/app/school' element={<School />} />
						<Route path='/app/successful-payment' element={<SuccessfullPayment />} />
						<Route path='/app/points' element={<Points />} />
						<Route path='/app/chat-bot' element={<ChatBot />} />
					</Route>

					<Route path='/login' element={<Login />} />
					<Route path='/' element={<ScreenTrance />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;