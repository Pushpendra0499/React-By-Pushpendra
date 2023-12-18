import React, { useEffect,useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data =useLoaderData()
    // const[data,setData] =useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/Pushpendra0499')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='ml-96 text-center w-fit content-center flex flex-col justify-center items-center rounded-3xl m-4 bg-gray-600 text-white
    p-4 text-3xl'>Github Followers: {data.followers}
    <img className='rounded-full' src={data.avatar_url} alt='Git Picture' width={100}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch ('https://api.github.com/users/Pushpendra0499')
  return response.json()
}