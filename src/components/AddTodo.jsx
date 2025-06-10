import { useEffect, useState } from "react"
import { getAllTodos } from "../Api/api"

const AddTodo=()=>{
    return(
        <>
        <input type="text" name="task" placeholder="Enter your task"/>
        </>
    )
}
export default AddTodo