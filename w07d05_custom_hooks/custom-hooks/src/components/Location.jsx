import { useEffect, useState } from 'react';
import useLocation from '../hooks/useLocation';

const Location = () => {
  const coords = useLocation();
  // const [coords, setCoords] = useState({
  //   lat: 0,
  //   lng: 0,
  //   error: null,
  //   loading: true
  // });

  // useEffect(() => {
  //   const handleSuccess = (data) => {
  //     setCoords({
  //       lat: data.coords.latitude,
  //       lng: data.coords.longitude,
  //       error: null,
  //       loading: false
  //     })
  //   }

  //   const handleError = (err) => {
  //     setCoords((prev) => {
  //       return {
  //         ...prev,
  //         error: true,
  //         loading: false
  //       }
  //     })
  //   }

  //   navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  // }, [])

  return (
    <section>
      <h2>location</h2>
      {coords.loading && <p>loading...</p>}
      {(!coords.error && !coords.loading) && <p>your location {coords.lat}, {coords.lng}</p>}
      {coords.error && <p>an error occured when grabbing your location</p>}
    </section>
  )
};

export default Location;