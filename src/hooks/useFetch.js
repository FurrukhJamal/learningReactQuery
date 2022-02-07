import React, {useEffect, useState} from "react";

export default function useFetch(url){
    //console.log("Hook called", url)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(()=>{
        //console.log("url in hook:", url)
        async function getData(){
           //console.log("async function called")
            try
            {
                    
                let response = await fetch(url)
                let result = await response.json()
                //console.log("Result", result)
                return result 
            }
            catch(error)
            {
                setError(true)
            }
               
        }
        
        let result;
        (async ()=>{
            result = await getData()
            //console.log(result)
            setData(result)
            setIsLoading(false)
                        
        })()
        
    },[url])
   
    return {data, isLoading, error} 
}