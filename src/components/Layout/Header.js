import React from 'react'
import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import HeaderCardButton from './HeaderCardButton'

const Header = ({ title, onShowCart }) => {
	return (
		<>
			<header className={classes.header}>
				<h1>{title}</h1>
				<HeaderCardButton onClick={onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={meals} alt='A table full of delicious food' />
			</div>
		</>
	)
}

export default Header
