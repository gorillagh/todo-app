import { apiClient } from "./config"


export const getTodos = async()=>{
    return await apiClient.get("/todos")
}

export const addTodo = async(payload)=>{
    return await apiClient.post("/todos", payload)
}

export const deleteTodo = async()=>{
    return await apiClient.delete("/todos")
}