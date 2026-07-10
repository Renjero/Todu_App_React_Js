import ListItems from '/Users/renjiro_robin/web_devlepment/React Js/Tudu-App/src/component/ListItems.jsx'



// const ListGroup = ({ numbers}) =>{
//     return(
//         <>
//             <ul className='my-4 relative'>
//             {
//                 numbers.map((number ,index) =>{
//                     return(
//                        <ListItems 
//                      key = {index}
//                         numberx={number}/>
//                     )
//                 })
//             }

//         </ul>   
         
//     </>
//     )
// }

const ListGroup = ({todos, deleteAll, removeTodo}) =>{

    return(
        <>

           
                   <ul className='my-4  mx-10 relative'> 
                    <button onClick={()=>deleteAll()} className="bg-red-500 hover:bg-red-800  p-2 text-sm font-bold w-{40%} my-4 rounded-xl">clear all</button>
                {
                    todos.map((todo , index )=>{
                        return(
                            <ListItems key={index} todo={todo} removeTodo={removeTodo}/>
                        )
                        
})
                }



                    
                    

        </ul>   

    </>
    )

}

export default ListGroup