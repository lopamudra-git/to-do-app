import { MdOutlineDone } from "react-icons/md";
import { updateTodo } from "../Api/api";
const TodoItem=({item})=>{
    const updateStatus = async(id,status)=>{
        let updatedstatus = status == false && true 
        const res= await updateTodo(id,updatedstatus)
        console.log('todo id,status',id,updatedstatus)
    }
    console.log('item',item)
    return(
        <div key={item.id} className="todo-item" onClick={()=>updateStatus(item.id,item.completed)}>
            {item.completed ? <div className="todo-item_content todo-item_content_complete">Completed</div>:<div className="todo-item_content">{item.todo}</div>}
            {item.completed && <div className="todo-item_status"><MdOutlineDone/></div>}
        </div>
    )
}
export default TodoItem;