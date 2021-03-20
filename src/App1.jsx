import React, { useState } from 'react';

import Head from './Head';
import Create from './Create'
import Note from './Note';
import Footer from './Footer';

const App1=()=>{

    const[item,setItem]=useState([])

const adNote=(note)=>{
    alert('clicked')
   setItem((old)=>{
       return [...old,note]
   }) 
}

const onDelete=(id)=>{
setItem((oldD)=>
    oldD.filter((currdata,index)=>{
        return index !== id;
    })
)
}
return ( 

<>

<Head/>
<Create passNote={adNote}/>

{item.map((val,index)=>{
    return <Note key={index} id={index} title={val.title} deleteI={onDelete}
        content={val.content}
    />
})}
<Footer/>

</>
 
) 
}


 export default App1

