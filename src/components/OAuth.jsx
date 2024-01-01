import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInFailure, signInSuccess } from '../redux/user/userSlice';

const OAuth = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)
            console.log(result)

            const res=await fetch('/api/auth/google',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL
                })
            })
            const data=await res.json()
            dispatch(signInSuccess(data))
            navigate('/')        
                
        } catch (error) {
            console.log("Could't continue with Google", error)
            // dispatch(signInFailure(error))
        }
    }


    return (
        <>
            <button type='button' onClick={handleGoogleClick} className='bg-blue-600 py-2 text-white rounded-md hover:opacity-80'>Continue with Google</button>
        </>
    )
}

export default OAuth;
