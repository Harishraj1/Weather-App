import { useState } from "react"
import axios from 'axios'


function W_app(){

    const[inputt,setinputt] = useState("")
    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")
    const [city,setcity] = useState("")

    function handlechange(event){
        setinputt(event.target.value)
    }
    function get_report(){

        var weather_data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${inputt}&appid=b7e893dffcdba02c4d23ca85e325cd51`)
        weather_data.then(function(data){
            console.log(data.data)
            setcity(data.data.name)
            setweather(data.data.weather[0].main)
            setdesc(data.data.weather[0].description)
            settemp(data.data.main.temp)

        }).catch(function(){
            console.log("error occured")
        })
    }


    return(
        <div className="bg-black p-20">
            <div className="bg-yellow-100 p-10 border rounded-md">
                <h1 className="text-3xl font-medium my-2">Weather Report</h1>
                <p style={{fontSize:"18px"}} className="my-2">I can give you a weather Report of your city..!</p>
                <input className="border rounded-md p-1 w-40" onChange={handlechange} value={inputt}></input><br/>
                <button className="bg-black text-white my-3 p-2 border rounded-lg border-black" onClick={get_report}>Get Report</button>
                <div>
                    <p className="font-medium">Name : {city}</p>
                    <p className="font-medium">Weather : {weather}</p>
                    <p className="font-medium">Temperature : {temp}</p>
                    <p className="font-medium">Description : {desc}</p>
                </div>
            </div>
        </div>
    )
}

export default W_app