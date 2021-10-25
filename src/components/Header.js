import React from 'react'
import PropTypes from 'prop-types'
import Button from "./subcomponents/button"
import { useState } from 'react'

const Header = (props) => {
	
	return (
		<header className="header">
			<h1 >{props.title}</h1>
			<Button onClick={props.toggleAdd} color={props.showStatus ? 'red':'green'} text={props.showStatus ? 'Close':'Add'}/>
		</header>
	)
}

Header.defaultProps = {
	title: 'Tidify',
  }

Header.propTypes = {
	title: PropTypes.string.isRequired,
}
// const styles = {
// 	color: '#f1f1f1', 
// 	background: 'blue'
// }

export default Header