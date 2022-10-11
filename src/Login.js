import React from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import {auth, provider, signInWithGoogle} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    
  const [state, dispatch] = useStateValue();
  
  const signIn = () => {        
        signInWithGoogle(auth,provider)
          .then(result=>{
            console.log(result);
            dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
            })
          })
          .catch(error=>alert(error))
    }

  return (
    <div className='login'>
     <div className='login__container'>
        <img 
            src='https://assets.turbologo.com/blog/en/2021/07/25051845/slack-old-logo.png'
            alt=''
            />
        <h1>Sign in to Slack</h1>
        <Button onClick={signIn}>Sign with Google</Button>
     </div>
    </div>
  )
}

export default Login