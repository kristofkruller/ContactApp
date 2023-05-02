"use client"
import React from 'react'
import { useState } from "react"
import { signInwithFirebase } from '../../assets/firebase'

const SignIn = () => {

  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div>SignIn</div>
  )
}

export default SignIn

