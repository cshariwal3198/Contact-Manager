import React, { useEffect, useState } from 'react';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import Header from './Components/Header';

function App() 
{
  let LSkey="contactKey"
  let [contacts,setContacts]=useState([])

  let sendData=(contact)=>
  {
    setContacts([...contacts,contact])
    console.log(contacts);
  }
  useEffect(()=>
  {
    localStorage.setItem(LSkey,JSON.stringify(contacts))
  },[contacts])

  useEffect(()=>
  {
   let extractData= JSON.parse(localStorage.getItem(LSkey))
   if(extractData)
   {
    setContacts(extractData)
   }
  },[])

  let daleteContact=(id)=>
  {
    let newList=contacts.filter((contact)=>
    {
       return contact.phone!==id
    })
    setContacts(newList)
  }

  return (
    <div className="ui container">
    <Header/> <br/>
    <AddContact myfunct={sendData}/> <br/> <hr/>
    <ContactList contact={contacts} deletefunct={daleteContact}/>
    </div>
  );
}

export default React.memo(App);
