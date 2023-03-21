import ForContext from "./forContext";
import React, { useState } from 'react'

const ForState = ({ children }) => {

    const [name, setName] = useState("ankit")
    console.log('name: ', name);

    // const n = "Ankit_Dabhi";
    return (

        <ForContext.Provider value={[name, setName]}>

            {children}

        </ForContext.Provider>

    );

}

export default ForState;