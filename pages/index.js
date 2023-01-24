import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { sendContactForm } from '../lib/api';

const intialValues={name:"",email:"",subject:"",message:""};
const intialState={values:intialValues};
export default function Home() {

  const [state,setState]=useState(intialState);
  const {values}=state;

  
  const handleChange=({target})=>{
    setState(prev=>({
      ...prev,
      values:{
        ...prev.values,
        [target.name]:target.value
      }
    }))

  }

   const submitHandler=async(e)=>{
    e.preventDefault();
    setState(prev=>({
      ...prev,
      isLoading:true,
    }))


    await sendContactForm(values)

   }

  return (
    <div className={styles.container}>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" value={values.name} name='name' onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="text" value={values.email} name='email' onChange={handleChange} />
        <label htmlFor="subject">Subject</label>
        <input type="text" value={values.subject} name='subject' onChange={handleChange} />
        <label htmlFor="message">Message</label>
        <input type="text" value={values.message} name='message' onChange={handleChange} />


        <button onClick={submitHandler} type='submit'>Submit</button>
      
      </form>
    </div>
  )
}
