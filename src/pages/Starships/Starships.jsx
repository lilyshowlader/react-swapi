import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllStarships } from '../../services/sw-api';

const Starships = (props) => {
  const[starships, setStarships] = useState([])
  
  useEffect(()=> {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results);
      console.log(starshipData)
    }  
    fetchStarshipData()
  },[])
  
  
  return ( 
    <>

    <h3>Starships</h3>
      {starships.length ?
    <>
      {starships.map(starship =>
        <div class="shipDiv" key={starship.model}>
          
        <Link to='/starship' state={{starship}}>
        <button>{starship.name}</button>
        </Link>
      </div>
      )}
    </>
      :
    <>
    <h4>Loading Starships...</h4>
    </>
    }
    </>
  );
  }
export default Starships;