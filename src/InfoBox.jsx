import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}){

    // let info={
    //     city:"Delhi",
    //     feelslike:11.92,
    //     temp: 12.05,
    //     temp_min: 12.05,
    //     temp_max: 12.05,
    //     humidity :  100,
    //     weather: "fog"     
    // }
    
    let INIT_URL="https://images.unsplash.com/photo-1673191898498-9bac443b2407?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL="https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    


    return(
        <div className="infobox">
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80? RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}{
                    info.humidity>80? <ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>
                }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <div>
                        <p>Temperature= {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}&deg;C</p>
                        <p>Min Temp: {info.temp_min}&deg;C</p>
                        <p>Max Temp: {info.temp_max}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i>  and feelslike:{info.feelslike}&deg;C</p>
                    </div>
                </Typography>
            </CardContent>
        </Card>
        </div>  
        </div>
    )
}