import React from 'react'
import { useContext } from 'react'
import forContext from '../Context/forContext';

function ExtraData() {

const a =  useContext(forContext)
console.log("hello",a.name)
    return (

        <div>ExtraData Page

            <div>Name : {a.name} </div>

        </div>

    );

};

export default ExtraData;