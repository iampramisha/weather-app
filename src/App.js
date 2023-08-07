
import { useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const apiKey="19e11a79c8c583fce51586b107173392"
  const[city,setCity]=useState("");
  const[data,setData]=useState({});
  const weatherApiDetails=(cityName)=>{
    if(!cityName) return;
const apiURL= "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid="+apiKey
axios.get(apiURL).then((res)=>{
  console.log("response",res.data);
  setData(res.data);

}).catch((err)=>{
  console.log("error",err)
}

)
  }
  const handleInputChange=(e)=>{
setCity(e.target.value);
  }
  const handleSearch=()=>{
    weatherApiDetails(city);
  }
   useEffect(() =>{
    weatherApiDetails("Nepal")

 },[])

  return (
    < >
    <div className='body'>
    <div className="col-md-12">
      <div className='weatherBg'>
        <h1 className='heading'>Weather-App</h1>
        <div className='d-grid gap-3 col-4 mt-4'>
        <input type='text' className='form-control' onChange={handleInputChange} value={city}/>
        <button className='btn btn-primary' type='submit' onClick={handleSearch}>Search</button>

        </div>
       
      </div>
      <div className='col-md-12 text-center mt-5'>
    
        <div className='shadow rounded weatherResultBox'>
    <img className='pic' src='https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-1024.png' alt='picn'/>
    <h2 className='weathercity'>{data?.name}</h2>
    <h1 className='weathertemperature'>{((data?.main?.temp)-273.15).toFixed(2)} degree celcius</h1>
    <h3> humidity - {data?.main?.humidity}</h3>
    <h4>Cloudiness: {data?.clouds?.all}%</h4>

        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
