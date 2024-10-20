import { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
	const [cartIsShown, setCartIsShown] = useState(false)

	const showCardHandler = () => {
		setCartIsShown(true)
	}

	const hideCartHandler = () => {
		setCartIsShown(false)
	}

	return (
		<CartProvider>
			{cartIsShown && <Cart onHideCart={hideCartHandler} />}
			<Header title='React Meals' onShowCart={showCardHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	)
}

export default App
