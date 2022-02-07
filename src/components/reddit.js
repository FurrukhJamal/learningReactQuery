import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useFetch from "../hooks/useFetch";

export default function Reddit(){
    // const [data, setData] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    // const [error, setError] = useState(false)
    
    // useEffect(()=>{
    //     async function getData(){
    //        try
    //        {
                    
    //             let response = await fetch("http://www.reddit.com/r/aww.json")
    //             let result = await response.json()
    //             return result.data.children 
    //        }
    //        catch(error)
    //        {
    //            setError(true)
    //        }
               
    //     }

    //     let result;
    //     (async ()=>{
    //         result = await getData()
    //         console.log(result)
    //         setData(result)
    //         setIsLoading(false)    
    //     })()

        
    // },[])

    //const{ data : posts, isLoading, error} = useFetch("http://www.reddit.com/r/aww.json")

    const{ data : posts, isLoading, error, isError, isSuccess} = useQuery("post", fetchPosts)

    //const test = useQuery("posts", fetchPosts)

    //console.log("The new Data from useQuery:", test)


    function fetchPosts(){
        //return fetch("http://www.reddit.com/r/aww.json").then(response => response.json())
        return (async()=>{
            let response = await fetch("http://www.reddit.com/r/aww.json")
            let result = await response.json()
            return result
        })()
    }

    console.log("Data in reddit:", posts)    
    return(
        <div>
            <h1>Reddit API</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p style = {{color : "red"}}>{error.message}</p>}
            {isSuccess && (
                <ul>
                {
                     posts?.data.children.map((post, index)=>(
                         <li key = {index}><a rel = "noreferrer"  target = "_blank" href = {`http://www.reddit.com${post.data.permalink}`}>{post.data.title}</a></li>
                    ))
                }
                 
             </ul>
            )}
            
        </div>
    )
}