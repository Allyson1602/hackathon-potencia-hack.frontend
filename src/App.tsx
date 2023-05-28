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


function App() {
  	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />} >
						<Route path='' element={<Home />} />
						<Route path='/card-payment' element={<CardPayment />} />
						<Route path='/donation' element={<Donation />} />
						<Route path='/pix-payment' element={<PixPayment />} />
						<Route path='/plan' element={<Plan />} />
						<Route path='/school' element={<School />} />
						<Route path='/successful-payment' element={<SuccessfullPayment />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
