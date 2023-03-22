import React from "react";
import { useContext } from "react";
import forContext from "../Context/forContext";

function ExtraData() {
  const a = useContext(forContext);

  return (
    <div>
      <h2>ExtraData Page</h2>
      <div>
      <h3>Info</h3>
      <div>Name : {a.data.name} </div>
      <div>Phone : {a.data.phone} </div>
      </div>
      <div>
        <h3>PC Info.</h3>
        <div>Ram :{a.pc.ram} </div>
        <div>Rom :{a.pc.rom} </div>
        <div>version :{a.pc.v} </div>

      </div>

    </div>
  );
}

export default ExtraData;
