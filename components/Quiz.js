import React, { useContext, useEffect} from 'react'
import { Context } from '../pages/_app'

const Quiz = ({question, index}) => {

    const {state, dispatch} = useContext(Context)

    useEffect(() => {
        checked()
    }, [])

    const checked = (ques, ans) => {
        const update = state.userAnswers?.filter((item) => {
            return item.ques === ques && item.ans === ans[0]
        })
        if(update.length === 1){
            return "checked"
        }
    }

  return (
    <>
        <div className='container'>

            <div className='question'>

                <h5>{index + 1 + ". "}{question.ques}</h5>

                <div className='options'>

                    {
                        question.option.map((opt, index) => (
                            <div 
                                onClick={() => {
                                    dispatch({
                                        type: "answerChosen",
                                        payload: {
                                            ques: question.ques, 
                                            ans: Object.keys(opt)
                                        }
                                    })}
                                } 
                                className={`list ${checked(question.ques, Object.keys(opt)) === "checked" ? "checked" : ""}`} 
                                key={index}
                            >
                                
                                <span>{Object.keys(opt)}.</span>
                                <p>
                                    {Object.values(opt)}
                                </p>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    </>
  )
}

export default Quiz