import React from "react";
import { useParams } from "react-router-dom";

function Test2(){
  const {id} = useParams();
  console.log(id);
  return <h1 className="py-5">HeloWorlsd {id}</h1>
}
export default Test2;