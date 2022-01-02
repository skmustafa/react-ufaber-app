import Home from './pages/Home';
import Registration from './pages/Registration';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path={'/'} element={<Registration />}  />
					<Route path={'/home'} element={<Home />}  />
				</Routes>
			</Router>
		</>
	);
}

export default App;
