import { useEffect, useState } from 'react'
import logementsData from '../datas/logements.json'
import '../styles/components/Gallery.css'
import Thumb from './Thumb'

function Gallery() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    const fetchLogements = async () => {
      const data = await logementsData
      setLogements(data)
    }
    fetchLogements()
  }, [])

  return (
    <ul className="gallery">
      {logements.map((logement) => (
        <Thumb key={logement.id} logement={logement} />
      ))}
    </ul>
  )
}

export default Gallery
