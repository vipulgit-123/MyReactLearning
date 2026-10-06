import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./App.css";
import TodoItems from "./components/TodoItems.jsx";

function App() {
        const todoItems = [
            {
                name:"Buy Milk",
                dueDate:"04/10/2023",
        },
                {
                name:"Go To College",
                dueDate:"04/10/2023",
                },
                 {
                name:"Like this music",
                dueDate:"04/10/2023",
                }, 
        ];

return (
    <center className='todo-container'>
        <AppName/>
        <AddTodo/>
       <TodoItems todoItems={todoItems}/>
    </center>
);
}

export default App;
