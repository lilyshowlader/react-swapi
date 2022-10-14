
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { getStarshipDetails } from '../../services/sw-api';
import { Link } from 'react-router-dom';

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
      console.log(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])


  return ( 
    <div>
    <>
    <h2>Starship Details </h2>
    </>
    <h2>Name: {starshipDetails.name}</h2>
    <h2>Model: {starshipDetails.model}</h2>
    <Link to='/'>Return</Link>
    </div>
  );
}

export default StarshipDetails;