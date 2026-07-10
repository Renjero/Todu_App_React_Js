const Form = () =>{
    return(

         <form className="p-4 border-2 boder-gray-200 shadow-xl rounded-md my-4  mb-10 
         outline-blue-500 outline-2 outline-offset-2 outline-double">
            <input type="text" className="border border-gray-500 w-full p-2 rounded-md" placeholder='Enter Your text'/>
            <button className="bg-green-400 hover:bg-green-800  p-2 text-2xl font-bold w-full my-4 rounded-md">click</button>
        </form>
    
    )
   
}

export default Form