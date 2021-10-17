import React from 'react'

const Button = ({onClick,color,text}) => {

	return <button onClick={onClick}className="btn" style={{backgroundColor: color}} >{text}</button>
}



export default Button