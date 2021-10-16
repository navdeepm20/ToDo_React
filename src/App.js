// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
function App() {
  const [tasks,setTask] = useState([
		{
			id: 1,
			text: 'Test task 1',
			day: '15 oct 2021',
			reminder: true
		},
		{
			id: 2,
			text: 'Test task 2',
			day: '15 oct 2021',
			reminder: true
		},
		{
			id: 3,
			text: 'Test task 3',
			day: '15 oct 2021',
			reminder: true
		},
		{
			id: 4,
			text: 'Test task 4',
			day: '15 oct 2021',
			reminder: true
		}
	])
  const deltask = (id) =>
  {
   
    setTask(tasks.filter((task)=>(task.id!==id)))
  }
  
  const toggleTask = (id) =>
  {
	
	setTask(tasks.map((task)=> task.id===id ? {...task, reminder: !task.reminder} : task))
  }
 
  return (
      <div className="container">
        <Header />
        {tasks.length > 0 ? <Tasks tasks={tasks} ondel={deltask} ontog={toggleTask}/> : "No Tasks to Show"}
      </div>
  );
}

export default App;
