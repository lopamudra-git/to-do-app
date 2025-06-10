import { useEffect, useRef, useState } from "react"
import { addTodo} from "../Api/api"
import { userId } from "../Constant/userDetails"
const AddTodo=()=>{
    /* const [userInput,setUserInput]=useState('') */
    const inputRef=useRef()
    const handleAdd=async()=>{
        const userInput=inputRef.current.value
        const dataToAdd = JSON.stringify(
        {userId:userId,todo:userInput,completed:false})
         const response= await addTodo(dataToAdd)
         console.log('response',response)
         window.alert(`Task added with id:${response.id}`)
         /* setUserInput('') */
    }
    
    return(
        <>
        <div style={{display:'flex',gap:'3px',margin:'auto',width:'70%'}}>
        <input type="text" name="task" ref={inputRef} placeholder="Enter your task" />
        <button type='submit'onClick={handleAdd} style={{borderRadius:'4px'}}>Add</button>
        </div>
        </>
    )
}
export default AddTodo