'use client'

import React, { useEffect, useState } from 'react';

const pageC = () => {

  const [data, setData]= useState([])

  useEffect(()=>{

    (async()=>{
      let res= await fetch('https://dummyjson.com/products')
      let json= await res.json()
      setData(json['products']);
    })()

  },[]);

  return (
    <div>
        {data.map((item,index)=>{
          return <div key={index}>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <p>{item.price}</p>
          </div>
        })}
    </div>
  );
};

// export default page;





///=======Server Side Rendering===============

import React from 'react';

async function getData(){
  let res= await fetch('https://dummyjson.com/products')
  let json = await res.json()
  return json['products']
}

const pageS = async() => {

  let data = await getData()

  return (
    <div>
      {/* //client side render */}
      <button onClick={()=>{alert("Hello")}}>click</button>
      
      {/* //server side render */}
       {data.map((item,index)=>{
        return <div key={index}>
          <h1>{item.title}</h1>
          <h3>{item.description}</h3>
          <p>{item.price}</p>
        </div>
       })}
    </div>
  );
};

//export default page;


