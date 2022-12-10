import axios from "axios";
import {createContext, useContext, useEffect, useReducer, useState } from "react";

const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

const baseURL = "http://localhost:3000/todos";

export default function TodoListProvider({children} ) {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [todoText, setTodoText] = useState('')
    const [filteredData, setFilteredData] = useState(todos)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5);

    const getAllTodos = async () => {
      const response = await axios.get(baseURL)
      setTodos(response.data)
      setFilteredData(response.data)
    }

    const postTodo = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        await axios.post(baseURL, {
          title: todoText,  
          complete: false
        })
        setTodoText('')
        getAllTodos();
        setIsLoading(false)
      }

    const toggleComplete = async (id, val) => {
        await axios.patch(`${baseURL}/${id}`,{
           complete: val
         })
         getAllTodos();
       }

       const deleteTodo = async (id) => {
        setIsLoading(true)
        await axios.delete(`${baseURL}/${id}`);
        getAllTodos()
        setIsLoading(false)
      }

      const searchTodo = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = todos.filter((data) => {
        return data.title.search(value) != -1
        })
        setFilteredData(result);
      }


    useEffect(() => {
        getAllTodos();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = todos?.slice(indexOfFirstPost, indexOfLastPost)
    console.log(currentPosts)
  
    // Get Page Number
    const paginate = (number) => setCurrentPage(number)
    return (
        <TaskContext.Provider value={{todos, getAllTodos, toggleComplete, deleteTodo, postTodo, setTodoText, setTodos, isLoading, currentPosts, postsPerPage, paginate, searchTodo, filteredData}}>
            {children} 
        </TaskContext.Provider>
    )
}