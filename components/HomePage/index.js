import React, { useContext, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SetTest from "./SetTest";
import Router from "next/router";
import { Context } from "../../pages/_app";

const HomePage = () => {

  const {state} = useContext(Context)
  const [alert, setAlert] = useState(false)

  const handleNext = (e) => {
    e.preventDefault()
    if(state.name !== "" && state.topic !== ""){
      Router.push("/reminder")
    }else{
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 2000)
    }
  }

  return (
    <>

      {
        alert ? <div className="alert">
        Please Add Your Name &  Topic for this test
      </div>: ""
      }

      <div className="home">

          <button className="next" onClick={(e) => handleNext(e)}> {"Next Step >"} </button>
        
          <Header/>

          <SetTest/>

          <Footer/>

      </div>
    </>
  );
};

export default HomePage;
