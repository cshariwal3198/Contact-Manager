import React from 'react'

function ContactList({contact , deletefunct}) 
{

//   deletefunct(()=>contact.phone)
  
  return (
    <div className='item'>
        <h2>Contact List</h2>
        {
            contact?.map((contact)=>
            {
               return <div className='content' key={contact.phone}>
               <div>
              <div className='header'>{contact?.name}</div>
              <div>{contact?.phone}</div>
              <div>{contact?.email}</div>
              </div>
              <i className='trash alternate outline icon' style={{color:"red" , fontSize:"xx-large"}}></i>
           </div>
            })
        }
        
        
    </div>
  )
}

export default ContactList