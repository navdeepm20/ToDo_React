import React from 'react'
import {useState} from 'react'

const Add = (props) =>
{

	const [text,setText] = useState('')
	const [day,setDay] = useState('')
	const [reminder,setReminder] = useState(false)
	function onSubmit(e)
	{
		e.preventDefault();
		if(text!="" && day!="")
		{

			props.onadd({
				id: 555,
				text, 
				day,
				reminder
			})
			setText('')
			setDay('')
			setReminder(false)
		}
		else
		{
			alert("Text and Day can't be empty")
			return
		}
	}
	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label>Task</label>
				<input
				type='text'
				placeholder='Add Task'
				value={text}
				onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className='form-control'>
				<label>Day and Time</label>
				<input
				type='text'
				placeholder='Add Day and Time'
				value={day}
				onChange={(e) => setDay(e.target.value)}
				/>
			</div>
			<div className='form-control form-control-check'>
				<label>Set Reminder</label>
				<input
				type='checkbox'
				checked={reminder}
				value={reminder}
				onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>

			<input type='submit' value='Save Task' className='btn btn-block' />
    	</form>
	)
}

export default Add