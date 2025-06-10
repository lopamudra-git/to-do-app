import { useEffect, useState } from "react"
import { getAllTodos } from "../Api/api"
import TodoItem from "./todoItem"

const options=['all','completed','pending']
const TodoList=()=>{
 const [allTodos,setAllTodos]=useState(()=>{
        const saved=localStorage.getItem('allTodos')
        console.log('saved',saved)
        return saved ? JSON.parse(saved):[]
    })
    const [filteredTodos,setFilteredTodos]=useState(allTodos)
    const [selectedOption,setSelectedOption]=useState()
    const getAllTodosData=async()=>{
        const response=await getAllTodos()
        localStorage.setItem('allTodos',JSON.stringify(response.todos))
        
        }
    useEffect(()=>{        
        getAllTodosData()
    }, [])
    const handleOptionChange = (option) => {
        setSelectedOption(option)
        console.log('option',option)
        if (option == 'completed') {
            const completedTodos = allTodos.filter(a => a.completed == true)
            console.log('completed list',completedTodos)
            setFilteredTodos(completedTodos);
            /* localStorage.setItem('allTodos', JSON.stringify(completedTodos)) */
            console.log('todos',allTodos)
        } else if (option == 'pending') {
            const pendingTodos = allTodos.filter(a => a.completed != true)
            setFilteredTodos(pendingTodos);
        } else {
            setFilteredTodos(allTodos)
        }
    }
    /* useEffect(()=>{
        console.log('selected option',selectedOption)
        if(selectedOption == 'completed'){
            const completedTodos = allTodos.filter(a=>a.completed == true)
            localStorage.setItem('allTodos',JSON.stringify(completedTodos))
        }else if(selectedOption == 'pending'){
            const pendingTodos = allTodos.filter(a=>a.completed != true)
            localStorage.setItem('allTodos',JSON.stringify(pendingTodos))
        }else{
        getAllTodosData()
        }
    },[selectedOption]) */
    return(
        <div > 
            <div className="filter">
            <label> Filter 
            <select value={selectedOption} onChange={(e)=>handleOptionChange(e.target.value)}>
                {options.map((op,index)=>(<option value={op} key={index} >{op}</option>))}
            </select>
            </label>
            </div>
            {filteredTodos.map(item=>(
                <TodoItem item={item}/>
            ))}
        </div>
    )
}
export default TodoList