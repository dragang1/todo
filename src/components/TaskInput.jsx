import React, { useState } from 'react'

function TaskInput({ newTask, setNewTask }) {
    const [input, setInput] = useState('');

    function handleInput(e) {
        setInput(e.target.value);
    }

    function handleAddInput() {
        if (input) {
            setNewTask([...newTask,
            {
                title: input,
                id: new Date().getTime()
            }])

        } else {
            alert("Ukucaj Task!")
        }
        setInput('')
    }

    return (
        <div className='flex justify-center items-center gap-3'>
            {console.log(input)}
            <input onChange={handleInput} value={input} type='text' placeholder='Type new task..' className='p-[10px] rounded-md outline-none' />
            <button className='bg-mainBlue px-[12px] py-[6px] rounded-sm text-white' onClick={handleAddInput}>Add</button>
        </div>
    )
}

export default TaskInput