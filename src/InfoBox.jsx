import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
    let INIT_URL="https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   
    let COLD_URL="https://images.unsplash.com/photo-1519863436079-8436f74be632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENPTEQlMjBXRUFUSEVSfGVufDB8fDB8fHww";
    let HOT_URL="https://images.unsplash.com/photo-1546274527-9327167dc1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW4lMjBXRUFUSEVSfGVufDB8fDB8fHww";
     
   
    return(
        <div className="InfoBox">
            
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={
                    info.humidity>80
                    ? RAIN_URL
                    : info.temp>15
                    ? HOT_URL
                    : COLD_URL
                    }
                  icon={
                    info.col
                  }
                 />
                <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                    {info.city}{
                    info.humidity>80
                    ? <ThunderstormIcon/>
                    : info.temp>15
                    ? <WbSunnyIcon/>
                    : <SevereColdIcon />
                    }

                   </Typography>
                   <Typography variant="body2" color="text.secondary" component={"span"}>
                       <p>Temperature:{info.temp}</p>
                       <p>Humidity:{info.humidity}</p>
                       <p>Max Temperature:{info.tempMax}</p>
                       <p>Min Temperature:{info.tempMin}</p>
                       <p>The weather can be described as <i>{info.weather}</i>  and feels like{info.feelsLike}&deg;C</p>
                   </Typography>
                </CardContent>
            </Card>
        </div>
    )
}