import './App.css'

import Navbar from './component/Navbar'
import ListGroup from './component/ListGroup.jsx'
import Footer from './component/footer.jsx'
import Form from './component/Form.jsx'
import { useState } from 'react'

 

function App() {

    let logo = "Robin live on server"

    

const [todos, setTodos] = useState( [
        {
            id: 1,
            text: "wakeup"
        },
        {
            id: 2,
            text: "eat"
        },
        {
            id: 3,
            text: "code"
        },
        {
            id: 4,
            text: "workout "
        },
        {
            id: 5,
            text: "sleep"
        },
    ]
)

    // using state
    const [count, setCount] = useState(1)
    console.log(count)

    const increasecCount = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const deleteAll =() =>{
    setTodos([])
        // console.log("dlt")
    }

    const removeTodo =(id) =>{

        setTodos(todos.filter((todo)=>{
            if(todo.id !==id ){
                return true
            }
        }))

        console.log("remove-todo works",id)
    }

    

    return (
        <>
            <Navbar logo={logo} />
            <div className="p-4"></div>
            <Form />

            <ListGroup todos={todos} deleteAll={deleteAll} removeTodo={removeTodo}/>
            {/* <ListGroup numbers={numbers} /> */}


{/* conter bar */}
            {/* <div className='p-2 mx-[30%] text-center border-2 border-dashed outline-2 outline-offset-2 outline-blue-300 '>
                <h1 className='p-2 text-4xl font-bold uppercase'>{count}</h1>
                <button onClick={() =>
                    increasecCount()
                } className=' hover:bg-green-400 hover:cursor-pointer p-2 border-2 w-full bg-green-200'>Increase</button>

                
                <button onClick={() =>
                    decreaseCount()
                } className=' hover:bg-red-400 hover:cursor-pointer p-2 my-4  border-2 w-full bg-red-200'>Decrease</button>


            </div> */}


            <Footer />



        </>
    )
}


export default App