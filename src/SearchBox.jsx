

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [err,setErr]=useState(false);

    const API_URL=" https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="194556dff7b49006f55c7191a56b8cfd";    

    let getWeatherInfo=async()=>{
        try{ let url=`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
       
        let response=await fetch(url);
       
        let jsonResponse=await response.json();
        

        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMax:jsonResponse.main.temp_max, 
            tempMin:jsonResponse.main.temp_min,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
          }
          console.log(result);
          return result;
   
        }catch(err){
           throw err;
        }
    }
       
    let handleSearch=(event)=>{
        setCity(event.target.value);
    }
   
        let handleSubmit=async(event)=>{
            try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
          setErr(true);
        }
    }
    
    
    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
               <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleSearch} required/><br /><br />
               <Button variant="contained" type="submit">Search</Button>

               {err && <p style={{color:"red"}}>No such place exists! </p>}
            </form>
           
        </div>
    )
}
















