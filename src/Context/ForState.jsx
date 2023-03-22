
// import React, { useState } from 'react'
import forContext from "./forContext"
import { useState , useEffect } from "react";
import axios from "axios";


const ForState = (props) => {

const [ApiData, setApiData] = useState([]);

// AIP Data Fatch
useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setApiData(response.data);
  }).catch((err) => console.log(err))
}, [])
// console.log("ApiData", ApiData)


  const data = {
    name:"ankit"
    ,phone : "9062548796"
  }


  const pc = {
    "v":"2.22",
    "ram":"16GB",
    "rom":"512GB"
  }
    return (

        <forContext.Provider value={{data ,pc , ApiData}}>

            {props.children}

        </forContext.Provider>

    );

}

export default ForState;