export const getAllTodos=async()=>{
const response= await (await fetch('https://dummyjson.com/todos')).json()
console.log('response all todos',response)
return response
}
export const updateTodo=async(id,status)=>{
    /* updating completed status of todo with id 1 */
const response = await fetch(`https://dummyjson.com/todos/${id}`, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    completed: status,
  })
})
if(response.ok){
    getAllTodos()
}
console.log('update response',response)
}