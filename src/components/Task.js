import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = (props) => {

	const status = (props) =>
	{
		if(props.task.reminder==true)
		{
			return "Yes"
		}
		else{
			return "No"
		}
	}
	return (
		<div className={`task ${props.task.reminder ? 'reminder' : ""}`} onClick={()=>{props.ontog(props.task.id)}} >
			<h3 id={props.id}>{props.task.text} <FaTimes style={{color: 'red'}} onClick={()=>props.ondel(props.id)}/></h3>
			<h6>{props.task.day}</h6>
			<h6>{status(props)}</h6>
		
		</div>
		
	)
}

export default Task