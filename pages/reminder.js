import React, { useContext, useEffect } from 'react'
import {Context} from './_app'
import Router from 'next/router'
import Helmet from '../components/Head'

const Reminder = () => {

  const {state} = useContext(Context)

  const handleStart = (e) => {
    e.preventDefault()
    Router.push("/test")
  }

  useEffect(() => {
    if(state.name === "" || state.topic === ""){
      Router.push("/")
    }
  }, [state])

  return (
    <>
        <Helmet/>
        <div className='reminder'>
            <h1>Learn About Quiz Regulations<span>.</span></h1>
            <p>Hi {state.name}, You have selected {state.topic} as your topic for this test. 10 Quistions will be provided and you have 10 minutes to complete this test. Try to choose the correct answer carefully. You will not get any chance to change your chosen answer. Don't try to copy. After completing this test you will redirected to your result. Don't refresh the browser if you have incomplete test or you will redirect to home page. Good luck.</p>
            <button onClick={(e) => handleStart(e)}>Start Test</button>
        </div>
    </>
  )
  
}

export default Reminder