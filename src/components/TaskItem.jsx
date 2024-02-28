import React, { useState } from 'react'

function TaskItem({ newTask, setNewTask }) {
    const [editId, setEditId] = useState(null)
    const [changeInput, setChangeInput] = useState('');



    function handleRemove(id) {
        const newTaskItems =
            newTask.filter(task => {
                return task.id !== id
            })

        setNewTask(newTaskItems)
    }

    function handleEdit(id) {
        setEditId(id)
    }

    function handleUpdatedTask(e) {
        setChangeInput(e.target.value)

    }

    function handleSave(id) {
        const newUpdatedTask = newTask.map((el) => {
            return el.id === id ? (
                {
                    ...el,
                    title: changeInput,

                }) : (el)
        })

        setNewTask(newUpdatedTask)
        setEditId(null)
        setChangeInput('')
    }

    function handleCancel(id) {
        setEditId(null)
    }


    return (
        newTask.length > 0 ? (
            newTask.map((el, index) => {
                return (

                    <div className='flex justify-between items-center mt-[40px] bg-[#ffd] p-[20px]' key={index} >

                        {editId === el.id ? (
                            <>
                                <input type='text' value={changeInput} onChange={handleUpdatedTask} />
                                <button className='bg-mainBlue px-[12px] py-[6px] rounded-sm text-white' onClick={() => handleSave(el.id)}>Save</button>
                                <button className='bg-mainBlue px-[12px] py-[6px] rounded-sm text-white' onClick={() => handleCancel(el.id)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <h3>{el.title}</h3>
                                <div className='flex justify-center items-center gap-5 '>
                                    <button className='bg-mainBlue px-[12px] py-[6px] rounded-sm text-white' onClick={() => handleRemove(el.id)} >Remove</button>
                                    <button className='bg-mainBlue px-[12px] py-[6px] rounded-sm text-white' onClick={() => handleEdit(el.id)}>Edit</button>
                                </div>
                            </>
                        )}
                    </div>




                )
            })

        ) : (<h1 className='text-center mt-10 text-2xl font-bold text-mainBlue '>Nemas Task</h1>)

    )
}
export default TaskItem






