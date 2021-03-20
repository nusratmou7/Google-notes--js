import React, { useState } from 'react';
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
const Create=(props)=>{

const[note,setNote]=useState({

    title:"",
    content:"",
})
const inputE=(e)=>{
const {name,value}=e.target;

    setNote((prev)=>{
        return{
            ...prev,
            [name]:value,

        }
    })

}
const adevent=()=>{
    props.passNote(note)
   setNote({
    title:"",
    content:"",
   })
}

   return(
       <>
       <div className="main_note">
           <form>
               <input type="text" value={note.title} onChange={inputE} placeholder="Title" name="title"/>
               <textarea rows="" column=""value={note.content} onChange={inputE} name="content" placeholder="write a note"/>
               <Button onClick={adevent} style={{background:'#dac2c1'}}>
                 <AddIcon/>
               </Button>
           </form>
       </div>
       </>
   )
}

export default Create