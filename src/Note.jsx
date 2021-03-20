import React from 'react';
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
const Note=(props)=>{

    const deleteN =()=>{
        props.deleteI(props.id)
    }
   return(
       <>
       <div className="note">
           <h1>{props.title}</h1>
           <br/>
           <p>{props.content}</p>
           <Button style={{background:'#dac2c1'}} onClick= {deleteN}>
           <DeleteOutlineIcon className="deleteIcon"/>
           </Button>
       </div>
       </>
   )
}

export default Note