import React from 'react'
import { useEffect,useState } from 'react'

const FetchData = () => {

    let [data,setData]= useState([])
//1.get api implement
  const url= 'https://jsonplaceholder.typicode.com/comments'
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then(json=>{console.log(json)
        setData(json)})
        .catch(error=>{
            console.log(error)
            
        }) 
    } ,[])

   
    console.log(data) 
   // data = "hii";
   

    //2. POST api implement
    // const PostPutEvent=()=>{
    //     const data ={
    //         id: "anj3003",
    //         name:"dhananjay",
    //         designation:"developer0",
    //         pin:"8707",
    //         mobile:"72715665"
    //     }

    //     fetch(url,{
    //        method:'POST',
    //        headers:{
    //         'Content-Type': 'application/json', // which type of data it is
    //         'Access-Control-Allow-Origin': ""       //to allow on every point to api
    //        },
    //        body:JSON.stringify(data) //to send data in json format
    //     })
    //     .then(response=>{
    //         console.log("response",response)
    //         if(response==201){ alert("success")}
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // }
    // PostPutEvent();

  return (
    <>
    <div>FetchData</div>
    {
        data.map(item=>{
            return (
                <div>{item.email}</div>
            )
        })
    }
    {/* <button type ="submit" onClick={PostPutEvent}></button> */}
    </>
  )
}

export default FetchData;