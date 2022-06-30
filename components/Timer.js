import Router from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

const Timer = () => {

    const [timer, setTimer] = useState({
        min: 9,
        sec: 59
    })

    const timerFunc = useCallback(() => {
        const t = setInterval(() => {

            setTimer({min: timer.min, sec: parseInt(timer.sec - 1)})

            if(timer.sec === 0){
                if(timer.min === 0){
                    setTimer({
                        min: 0,
                        sec: 0
                    })
                    Router.push("/result")
                }else{
                    setTimer({min: parseInt(timer.min - 1), sec: 59})
                }
            }

        }, 1000)

        return () => clearInterval(t);

    }, [timer])

    useEffect(() => {

        timerFunc()

    }, [timerFunc])

  return (
    <>
        <div className='timer'>
            <p>{timer.min < 10 ? "0" + timer.min : timer.min}m : {timer.sec < 10 ? "0" + timer.sec : timer.sec}s left</p>
        </div>
    </>
  )
}

export default Timer