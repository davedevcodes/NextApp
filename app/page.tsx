import React from 'react'
import LoginForm from '@/components/auth/LoginForm'
import '../components/styles/auth.css';



export default function Home() {
  return (
    <div className='authbg'>
        <LoginForm />
    </div>
  );
}
