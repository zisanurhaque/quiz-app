import Router from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

const Timer = () => {

    const [sec, setSec] = useState(59)
    const [min, setMin] = useState(9)

    useEffect(() => {

        if(min <= 0 && sec <= 0){
            Router.push("/result")
        }else{

            const interval = setInterval(() => {

                if(sec < 0){
                    setSec(0)
                }else{
                    const newSec = parseFloat(sec - 1)
                    setSec(newSec)
                    if(sec === 0){
                        if(min === 0){
                            Router.push("/result")
                        }else{
                            const newMin = parseFloat(min - 1)
                            setMin(newMin)
                            setSec(59)
                        }
                    }
                }
    
            }, 1000)

            return () => clearInterval(interval)
        }

    }, [sec])

  return (
    <>
        <div className='timer'>
            <p>{min < 10 ? "0" + min : min}m : {sec < 10 ? "0" + sec : sec}s left</p>
        </div>
    </>
  )
}

export default Timer