import '../styles/globals.css'
import { createContext, useReducer } from 'react'
import gk from '../database/gk'
import eng from '../database/english'
import math from '../database/math'
import cse from '../database/pro'

export const Context = createContext()

const initialState = {
  name: "",
  topic: "",
  userAnswers: [],
  score: 0,
  date: "",
  questionList: []
}

const reducer = (state, action) => {

  switch(action.type){
    case "name":

      return {...state, name: action.payload};

    case "topic":

      if(action.payload === "English"){
        return {...state, topic: action.payload, date: Date.now(), questionList: eng};
      }else if(action.payload === "Computer Sc"){
        return {...state, topic: action.payload, date: Date.now(), questionList: cse};
      }else if(action.payload === "Math"){
        return {...state, topic: action.payload, date: Date.now(), questionList: math};
      }else if(action.payload === "General Knowledge"){
        return {...state, topic: action.payload, date: Date.now(), questionList: gk};
      }

    case "answerChosen":

      const duplicate = state.userAnswers.filter((item) => {
        return item.ques === action.payload.ques
      })

      if(duplicate.length !== 1){
        const value = {
          ques: action.payload.ques,
          ans: action.payload.ans[0]
        }

        const answer = state.questionList?.filter((item) => {
          return item.ques === action.payload.ques && item.ans === action.payload.ans[0]
        })

        let newScore = state.score
  
        if(answer.length === 1){
          newScore = newScore + 1
        }

        return {...state, userAnswers: [...state.userAnswers, value], score: newScore}
      }

    default:

      return state

  }

}

function MyApp({ Component, pageProps }) {

  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <>
      <Context.Provider value={{state, dispatch}}>
        <Component {...pageProps} />
      </Context.Provider>
    </>
  )
}

export default MyApp
