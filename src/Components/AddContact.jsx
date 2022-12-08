import React, { useState } from 'react'
import App from '../App'

function AddContact({myfunct , deletefunct}) 
{
    let [contact, setContact]=useState({name:"",email:"",phone:""})

    let updateContact=({target:{name,value}})=>
    {
        setContact({...contact,[name]:value})
    }
    let submithandler=(e)=>
    {
       e.preventDefault();
    if(contact.name && contact.phone && contact.email)
    {
       myfunct(contact)
    }
       setContact({name:"",email:"",phone:""})
    }  

  return (
    <div>
        <div className='ui main'>
            <h2>Add Contacts</h2>
            <form className='ui form' onSubmit={submithandler}>
                <div className='field'>
                    <label>Name : </label>
                    <input type="text" name="name"  value={contact.name} placeholder='Enter name' onChange={updateContact}/>
                </div>
                <div className='field'>
                    <label>Number : </label>
                    <input type="number" name="phone" value={contact.phone} placeholder='Enter number' onChange={updateContact}/>
                </div>
                <div className='field'>
                    <label>Email : </label>
                    <input type="email" name="email" value={contact.email} placeholder='Enter email' onChange={updateContact}/>
                </div>
                <button className='ui button blue center'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default AddContact