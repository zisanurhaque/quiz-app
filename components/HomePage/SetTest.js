import React, { useContext } from 'react'
import { Context } from '../../pages/_app'

const SetTest = () => {

    const {state, dispatch} = useContext(Context)

    const categories = ["English", "Computer Sc", "Math", "General Knowledge"]

  return (
    <>

        <div className="select">
        
            <div className="label">
                Please Enter Your Name
            </div>

            <input 
                type={"text"} 
                placeholder={"Ex. Zisanur Haque"} 
                onChange={(e) => dispatch({
                    type: "name",
                    payload: e.target.value
                })}
            />

            <div className="label">
                Please Select A Category
            </div>

            <div className="categories">
                {
                    categories.map((cat, index) => (
                        <button 
                            key={index}
                            onClick={() => dispatch({type: "topic", payload: cat})}
                            className={state.topic === cat ? "active" : ""}
                        >{cat}</button>
                    ))
                }
            </div>

        </div>
    </>
  )
}

export default SetTest