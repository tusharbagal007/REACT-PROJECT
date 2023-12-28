import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({updateInfo}){
    let [city, setCity]= useState("");
    let [error,setError]= useState(false);

    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "99eba022f9d1de3e62541bf3ae00fe80";

    let getWeatherInfo=async ()=>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await response.json();
            console.log(jsonResponse);
            let result= {
             city:city,
             temp:     jsonResponse.main.temp,
             temp_min: jsonResponse.main.temp_min,
             temp_max: jsonResponse.main.temp_max,
             humidity: jsonResponse.main.humidity,
             feelslike: jsonResponse.main.feels_like,
             weather:jsonResponse.weather[0].description
     
            }
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
      
    }

    

    let handleChange= (event)=>{
        setCity(event.target.value);
        //console.log(city);
        
    }

    let handleSubmit=async (event)=>{
        try{ event.preventDefault();
            console.log(city);
            setCity("");
           let newInfo=  await  getWeatherInfo();
           updateInfo(newInfo);}
        catch(err){
            setError(true);
        }
           
        }

        return(
            <div className='searchbox'>
                <form  onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
                <br></br> <br></br>
                <Button variant="contained" type='submit'>Submit</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
                </form>
            </div>
        )
    }

   
