import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';

export default function KeepMountedModal() {
  const userDetails = [{
    id:0,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
  }]

  const [user,setUser]= useState(userDetails)
  const handleData=(event)=>{  
      
    const newInput = (user)=>({...user, [event.target.name]:event.target.value}) 
    setUser(newInput)
    console.log(user)
     }
     

      const handleSubmit=(event)=>{
        
      event.preventDefault();
      }
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal keepMounted open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Typography
            id="keep-mounted-modal-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
             <form id="myForm" onSubmit ={handleSubmit}>
            <div className='ModalBox'>
            <input type="text" className ="inputStyle" name="firstName"  onChange = {handleData} placeholder=' Enter First-Name' />
            <input type="text" className ="inputStyle" name="lastName" onChange = {handleData} placeholder=' Enter Last-Name'/>
            <input type="text" className ="inputStyle" name="email" onChange = {handleData} placeholder=' Enter Email'/>
            <input type="text" className ="inputStyle" name="mobile" onChange = {handleData} placeholder=' Enter Mob-No.'/>
            <input type="text" className ="inputStyle" name="gender" onChange = {handleData} placeholder=' Enter Gender'/>
            </div>
            <div className="button-box">
            <button type="button" >Add Information</button>
            <input type="submit" value="submit"/>
            </div>
            </form>
          </Typography>
          <Typography id="keep-mounted-modal-description" textColor="text.tertiary">
            Data is being add
          </Typography>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
