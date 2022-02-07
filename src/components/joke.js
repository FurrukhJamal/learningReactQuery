import React, {useState, useEffect} from "react";
import { useQuery } from "react-query";

export default function Joke(){
    //const [joke, setJoke] = useState(null)
    // const [isLoading, setIsLoading] = useState(true)
    // const [error, setError] = useState(false)
    
    // useEffect(()=>{
    //     async function getData(){
    //        try
    //        {
                    
    //             let response = await fetch("https://api.jokes.one/jod")
    //             let result = await response.json()
    //             return result 
    //        }
    //        catch(error)
    //        {
    //            setError(true)
    //            console.log(error)
    //        }
               
    //     }

    //     let result;
    //     (async ()=>{
    //         result = await getData()
    //         console.log(result)
    //         setJoke(result.contents.jokes[0].joke.text)
    //         setIsLoading(false)    
    //     })()

        
    // },[])

    const{data : joke, isError, isSuccess, error, isLoading} = useQuery("joke", fetchJoke)

    function fetchJoke(){
        return (async()=>{
            let response = await fetch("https://api.jokes.one/jod.json")
            let result = await response.json()
            return result
        })()
        //return fetch("https://api.jokes.one/jod.jsons").then(response => response.json())
    }
    
    return(
        <div>
            <h1>Joke APi</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p style = {{color : "red"}}>{error.message}</p>}
            {isSuccess && (<p>{joke?.contents.jokes[0].joke.text}</p>)}
        </div>
    )
}