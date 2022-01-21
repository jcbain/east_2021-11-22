import { useEffect, useState } from 'react';


const useLocation = () => {
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0,
    error: null,
    loading: true
  });

  useEffect(() => {
    const handleSuccess = (data) => {
      setCoords({
        lat: data.coords.latitude,
        lng: data.coords.longitude,
        error: null,
        loading: false
      })
    }

    const handleError = (err) => {
      setCoords((prev) => {
        return {
          ...prev,
          error: true,
          loading: false
        }
      })
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  }, [])

  return coords;
}

export default useLocation;