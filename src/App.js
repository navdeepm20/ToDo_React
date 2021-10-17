// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Add from './components/Add'
import {useState, useEffect} from 'react'
function App() {
  
  const [tasks,setTask] = useState([
		
	])
  useEffect(()=>{
   const getTask = async ()=>{
     const tasks = await fetchTask();
     setTask(tasks)
     console.log('jasljfasdjfasdjfaslkjdfaskdfjasjf')
   }    
   getTask()
  },[])
  const fetchTask = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    let res_json = await res.json();

    return res_json

  }
  const deltask = async (id) =>
  {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })
   
    setTask(tasks.filter((task)=>(task.id!==id)))
  }
 
  
  const toggleTask = (id) =>
  {
	
	setTask(tasks.map((task)=> task.id===id ? {...task, reminder: !task.reminder} : task))
  }
  const addTask = async (ntask) =>
  {	  
	  let id;
	  id = tasks.length > 0 ? tasks[tasks.length - 1]['id']+1 : 0

	  ntask = {...ntask, id}
    const res = await fetch('http://localhost:5000/tasks',{
      method: "POST",
      headers: {
        'Content-Type':"application/json"
      },
      body: JSON.stringify(ntask)
    })
    const data = await res.json()

	  setTask([...tasks,data])
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
