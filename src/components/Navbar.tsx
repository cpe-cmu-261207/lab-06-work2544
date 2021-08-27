import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CurrentP from '../Screens/CurrentP'
import AboutM from '../Screens/AboutM'
import HistoricS from '../Screens/HistoricS'
import HistoricR from '../Screens/HistoricR'
const Navbar = () => {
	return (
		<Router>
			<div className='my-5'>
				<p className='text-center text-3xl italic my-5'>Minimal Bitcoin App</p>
				<div className='flex justify-center text-md space-x-5'>
					<p><Link to='/current'>Current price</Link></p>
					<p>|</p>
					<p><Link to='/history/select'>Historical price</Link></p>
					<p>|</p>
					<p><Link to='/about'>About me</Link></p>
				</div>
			</div>
			<Switch>
				<Route path='/history/select'><HistoricS /></Route>
				<Route path='/history/result'><HistoricR /></Route>
				<Route path='/about' ><AboutM /></Route>
				<Route path='/current'><CurrentP /></Route>
				<Route path='/' exact><CurrentP /></Route>
			</Switch>
		</Router>
	)
}

export default Navbar