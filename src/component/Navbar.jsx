const Navbar = ({logo}) =>{
console.log(logo)
    return(

         <nav className="bg-black text-white flex justify-around text-2xl text-red py-2 ">
            <h1 className="font-bold uppercase"> {logo}</h1>
            <h2 className="font-semibold">TODU : 5 </h2>
        </nav>
    
    )
   
}

export default Navbar