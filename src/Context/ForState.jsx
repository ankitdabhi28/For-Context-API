
// import React, { useState } from 'react'
import forContext from "./forContext"

const ForState = (props) => {

    // const [name, setName] = useState("AD")
    // // console.log('name: ', name);

  const data = {
    "name":"ankit"
    ,"phone" : "9062548796"
  }

    // // const n = "Ankit_Dabhi";
    return (

        <forContext.Provider value={data}> 

            {props.children}

        </forContext.Provider>

    );

}

export default ForState;