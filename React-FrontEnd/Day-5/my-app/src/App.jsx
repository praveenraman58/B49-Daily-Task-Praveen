import { useEffect ,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifeCycleDemo from './LifeCycleDemo';

function App() {
  const [data, setData] = useState([]);
  const[loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    async function fetchData() {
      const apiUrl = "https://restcountries.com/v3.1/all";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        for (var i = 0; i < data.length; i++) {
          if (data[i].name.common == "Peru") {
            //console.log(data[i].flag);
          setData(data[i].flag);

          }
        }
      } catch (err) {
        //console.log("Error fetching Data: ", err);
        setError(err);
      } finally{
        setLoading(false);
      }
    }

    setTimeout(()=>{
      fetchData();
    },4000);
  },[]);

  if(loading){
    return <div>Loading....</div>
  }

  if(error){
    return <div>error: {error.message}</div>
  }

  return (
    <>
    <LifeCycleDemo/>
      <h1>fetched data</h1>
      <p>{data}</p>
    </>
  )
}

export default App
