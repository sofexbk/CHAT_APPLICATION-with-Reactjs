import React, { useState } from 'react'
import axios from 'axios';
const LoginForm = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const authObject={'Project-ID':"b5d151b5-5c3e-4c3e-b6ea-0a8647654f5d",'User-name':username,'User-Secret':password}
        try {
        //username /password =>CE -> give messages
          await axios.get('https://api.chatengine.io/chats' , {headers:authObject})
         //works out ->logged in
          localStorage.setItem('username',username);
          localStorage.setItem('password',password);
          window.location.reload();        
        } catch (error) {
         //error -> try with new uysername
           setError('Oups , incorrect credentials.')
        }
      
        

    } 
  return (
    <div className='wrapper'>
        <div className='form'>
          <h1 className='title'>Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className='input' placeholder='Username' required/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='password' required/>
            <div align="center">
                <button type='submit' className='button' >
                   <span>Start Chatting</span>
                </button>
                <h2 className='error' > {error}</h2>
            </div>
          </form>
        </div>

    </div>
  )
}

export default LoginForm