import React, {useContext, useEffect} from 'react'
import Quiz from '../components/Quiz'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Router from 'next/router';
import Helmet from '../components/Head';
import Timer from '../components/Timer'
import { Context } from './_app';

const Test = () => {

    const {state} = useContext(Context)

    const handleNext = (e) => {
        e.preventDefault()
        Router.push("/result")
    }

    useEffect(() => {
        if(state.name === "" || state.topic === ""){
          Router.push("/")
        }
      }, [state])

  return (
    <>
        <Helmet/>
        
        <div className='quiz'>

            <Timer/>

            <Carousel 
                autoPlay={false}
                infiniteLoop={false}
                showIndicators={false}
                showThumbs={false}
            >
            {
                state.questionList?.map((item, index) => (

                    <Quiz question={item} index={index} key={index}/>
                
                ))
            }

            </Carousel>

            <button className='finish' onClick={(e) => {handleNext(e)}}>
                End Test
            </button>

        </div>
    </>
  )
}

export default Test