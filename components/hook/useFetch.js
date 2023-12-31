import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from '@env';

// const rapidapikey = RAPID_API_KEY;
const useFetch = (endpoint, query) =>{
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': 'f763a55011msh69a9f5cd90fa8d2p156348jsn73e1f5f702bd',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async() => {
        setisLoading(true);
    
        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setisLoading(false);
        }   catch(error){
            setError(error);
            alert('There is an Error!')
        }   finally {
            setisLoading(false); 
        }
    }
    
    useEffect(() =>{
        fetchData();
    },[]);
    
    const refetch =()=>{
        setisLoading(true);
        fetchData();
    }
    
    return {data, isLoading, error, refetch};

}

export default useFetch;