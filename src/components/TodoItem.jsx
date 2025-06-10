import { MdOutlineDone } from "react-icons/md";
import { deleteATodo, updateTodo } from "../Api/api";
const TodoItem=({item})=>{
    const updateStatus = async(id,status)=>{
        let updatedstatus = status == false && true 
        const res= await updateTodo(id,updatedstatus)
        const resJson= await res.json()
        console.log('todo id,status',id,updatedstatus,resJson)
       res.ok && window.alert(`updated item as completed with id:${resJson.id}`)
    }
    const handleDeleteTodo=async(itemId)=>{
        const res=await deleteATodo(itemId)
        const resJson= await res.json()
        res.ok && window.alert(`Deleted item with id:${resJson.id}`)
    }
    console.log('item',item)
    return(
        <div>
        <div key={item.id} className="todo-item" onClick={()=>updateStatus(item.id,item.completed)}>
            {item.completed ? <div className="todo-item_content todo-item_content_complete">Completed</div>:<div className="todo-item_content">{item.todo}</div>}
            {item.completed && <div className="todo-item_status"><MdOutlineDone/></div>}
        </div>
        <div style={{color:'red',cursor:'pointer'}} onClick={()=>{handleDeleteTodo(item.id)}}>Delete</div>
        </div>
    )
}
export default TodoItem;