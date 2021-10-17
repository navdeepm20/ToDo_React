// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Add from './components/Add'
import {useState} from 'react'
function App() {
  const [tasks,setTask] = useState([
		
	])
  const deltask = (id) =>
  {
   
    setTask(tasks.filter((task)=>(task.id!==id)))
  }
  
  const toggleTask = (id) =>
  {
	
	setTask(tasks.map((task)=> task.id===id ? {...task, reminder: !task.reminder} : task))
  }
  const addTask = (ntask) =>
  {	  
	  let id;
	  id = tasks.length > 0 ? tasks[tasks.length - 1]['id']+1 : 0

	  ntask = {...ntask, id}
	  setTask([...tasks,ntask])
  }
  const [showStatus,showAdd] = useState(false)
	
	const btnclick = (status) =>
	{
		
		showAdd(!status)
		
	}
  return (
      <div className="container">
        <Header toggleAdd={()=>{btnclick(showStatus)}} showStatus={showStatus}/>
		{showStatus && < Add onadd={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} ondel={deltask} ontog={toggleTask}/> : "No Tasks to Show"}
      </div>
  );
}

export default App;
