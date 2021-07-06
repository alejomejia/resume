import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = '/api'

const useAxios = (path) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async (path) => {
    setLoading(true)

    try {
      const res = await axios.get(path)
      setResponse(res.data)
      setError(null)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(path)
  }, [])

  return { response, error, loading }
}

export default useAxios
