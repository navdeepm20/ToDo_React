import React from 'react'
import PropTypes from 'prop-types'
import Button from "./subcomponents/button"


const Header = (props) => {
	const b = 5
	const btnclick = (e,b) =>
	{
	
		console.log('hello')
	}
	return (
		<header className="header">
			<h1 >{props.title}</h1>
			<Button onClick={()=>{btnclick(b)}}/>
		</header>
	)
}

Header.defaultProps = {
	title: 'TaskLook',
  }

Header.propTypes = {
	title: PropTypes.string.isRequired,
}
// const styles = {
// 	color: '#f1f1f1', 
// 	background: 'blue'
// }

export default Header