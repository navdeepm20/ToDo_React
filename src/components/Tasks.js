import React from 'react'
import Task from './Task'
const Tasks = (props) => {

	
	return (
		<>
			{
				props.tasks.map((task) => 
					<Task key={task.id} task={task} id={task.id} ondel={props.ondel} ontog = {props.ontog}/>
				)
				
			}
			
		</>
	)
}

export default Tasks