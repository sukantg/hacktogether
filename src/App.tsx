// import './App.scss'
import '@index.css'
//import '@styles/examplePage.scss'
import Image from './assets/images/integrity.svg';
import { useStateTogether } from 'react-together'

import { version } from '@package'
import { HeroLogo } from '@components'
import Card from '@components/Card'
import { useState } from 'react'
import Navbar from '../src/components/Navbar.jsx'


// custom hooks
import useLocalStorage from './hooks/useLocalStorage'

// custom components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useStateTogether('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [count, set_count] = useStateTogether('counter_0', 0)

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <>
    {/* <div>
       <div className='flex'>
            <div>
              <Card/>
            </div>
            <div>
              <Card/>
            </div>
      </div>
    </div> */}
    <div className=" mt-5 bg-slate-500">
      
      <header>
        <h1 className='text-3xl'> </h1>
      </header>
</div>
<img src={Image} alt="Large Image"  width={250} height={250} className="mx-auto  items-center h-auto object-cover" />
{/* <Navbar/> */}
      <div className='flex'>
        <div className='mt-5 px-4'>
        {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
        {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      <CustomForm addTask={addTask}/>
      
        </div>

        <div className='mt-5 px-4'>
        {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
        {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      
      <CustomForm addTask={addTask}/>
      

        </div>
       
      
    </div>
    </>
  )
}

export default App


// export default function App() {
  

//   return (
//     <div>
//       <div >
//         <HeroLogo {...{ type: 'reacttogether' }} />
//         {/* <HeroLogo {...{ type: 'react' }} />
//         <HeroLogo {...{ type: 'vite' }} /> */}
//       </div>
//       <h1 className='text-5xl font-bold underline'>Hack Together - Integrity Ink</h1>
     
     
//       <div className='version-num'>{version}</div>
//     </div>
//   )
// }
