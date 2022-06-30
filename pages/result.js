import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import {Context} from './_app'
import Router from 'next/router'

const Result = () => {

    const {state} = useContext(Context)
    const [greet, setGreet] = useState("")

    const date = new Date(state.date)

    useEffect(() => {
        if(state.name === "" || state.topic === ""){
          Router.push("/")
        }
        if(state.score < 5){
            setGreet("You Have To Improve")
        }else if(state.score < 7){
            setGreet("Nice Try")
        }else{
            setGreet("Congratulations!")
        }
    }, [state])

  return (
    <>
        <Head>
            <title>{"ZISAN's Quiz"}</title>
            <meta name="description" content="This is a quiz application" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600&display=swap" rel="stylesheet"/> 
            <link href="https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap" rel="stylesheet"/> 
        </Head>
        <div className='result'>
            <div className='contents'>
                <h3>{greet}</h3>
                <h1>{state.name}
                    <li>{state.score < 5 ? "Your score is" : "Passed with score"} {state.score} out of 10</li>
                </h1>
                <div className='bottom'>
                    <div className='signature'>
                        <span>{date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()}</span>
                        <p>Date</p>
                    </div>
                    <div className='signature'>
                        <span className='sig'>Zisanur Haque</span>
                        <p>Author</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Result