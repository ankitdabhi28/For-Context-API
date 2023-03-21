import React from 'react'
import ForState from '../Context/forState'
import { useContext } from 'react'


function ExtraData() {

    const [name] = useContext(ForState);
    console.log('name: ', name);
    console.log("val", name);
    // const value = 'My Context Value';

    return (

        <div>ExtraData Page

            <div>Name : {name}</div>
        </div>

    );

};

export default ExtraData;