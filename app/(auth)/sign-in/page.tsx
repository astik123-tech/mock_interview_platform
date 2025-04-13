import React from 'react'
import AuthForm from '@/components/AuthForm'

const page = () => {
  return (
    <div className='auth-layout'>
      <AuthForm type="sign-in" />
    </div>
  )
}

export default page