import ListGroup from "./ListGroup.jsx"
// import App from './App.jsx'


// propers drilling 
const ListItems = ({todo, removeTodo}) =>{
     console.log(todo)

    return (
        <>

          <li className='relative border border-gray-300 shadow-xl p-4 rounded-2xl my-2'>
                <p className='text-sm text-gray-500 '>#{todo.id}</p>
                <h1 className='text-xl my-2'>{todo.text}</h1>
                <div className='absolute right-5 bottom-5'>
                    <button    onClick={()=>removeTodo(todo.id)} className='bg-red-500 font-bold p-2 hover:bg-red-900 text-white rounded-2xl mx-1'>  Delete   </button>
                    <button className='bg-yellow-500 font-bold p-2 hover:bg-yellow-900 text-white rounded-2xl mx-1'>
                        edit 
                    </button>
                </div>
            </li>
           
            </>
    )
}

export default ListItems 