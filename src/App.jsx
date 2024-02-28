import { useState } from "react"
import "./App.css"
import TaskInput from "./components/TaskInput"
import TaskItem from "./components/TaskItem"

function App() {
  const [newTask, setNewTask] = useState([])


  return (
    <div className="bg-mainOrange mx-auto w-[600px] h-[700px] p-[50px] mt-[50px] " >
      <h1 className="text-center mb-[30px] text-3xl font-bold text-mainBlue">To Do </h1>
      <TaskInput newTask={newTask} setNewTask={setNewTask} />
      <TaskItem newTask={newTask} setNewTask={setNewTask} />

    </div>
  )
}

export default App
