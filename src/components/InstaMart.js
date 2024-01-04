import React, { useState } from 'react'

const Section =({title,desc,isvisible,setIsvisible})=>{
           return (
            <>
              <h2 className='font-bold'>{title}</h2>
          
              {isvisible ?<button className='font-bold' onClick={()=>setIsvisible(false)}>Hide</button>:
              <button className='font-bold' onClick={()=>setIsvisible(true)}>Show</button>}
              {isvisible && <h3>{desc}</h3>}
              </>
           )
}

const InstaMart = ()=> {
        
      const [visbleSection, setVisbleSection] = useState("");
  return (
    <>
      
      <Section  title="about" desc ={"If you want to set the background color of the search button to light yellow, you can use the appropriate Tailwind CSS class for the yellow color. The class for a light yellow background is usually bg-yellow-100 or a similar variant. Here's the updated code:" } isvisible={visbleSection==="about"} setIsvisible={(e)=>e===true?setVisbleSection("about"):setVisbleSection("")}/>
     
      <Section title="carrer" desc ={"If you want to set the background color of the search button to light yellow, you can use the appropriate Tailwind CSS class for the yellow color. The class for a light yellow background is usually bg-yellow-100 or a similar variant. Here's the updated code:"} isvisible={visbleSection==="carrer"} setIsvisible={(e)=>e===true?setVisbleSection("carrer"):setVisbleSection("")}/>
     
      <Section title="product" desc ={"If you want to set the background color of the search button to light yellow, you can use the appropriate Tailwind CSS class for the yellow color. The class for a light yellow background is usually bg-yellow-100 or a similar variant. Here's the updated code:" } isvisible={visbleSection==="product"} setIsvisible={(e)=>e===true?setVisbleSection("product"):setVisbleSection("")}/>
      </>
  )
}

export default InstaMart
