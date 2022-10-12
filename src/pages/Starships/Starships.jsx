import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllStarships } from '../../services/sw-api';

const Starships = (props) => {
  const[starships, setStarships] = useState({})
  
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
    <h3>this is my starships components</h3>
      {starships.length ?
    <>
      {starships.map(starship =>
        <div key={starship.model}>
        <Link to='/' state={{starship}}>{starship.name}</Link>
        <br />
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