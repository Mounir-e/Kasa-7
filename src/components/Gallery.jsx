import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logementsData from '../datas/logements.json'
import '../styles/Gallery.css'

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
    <section className="gallery">
      {logements.map(({ id, title, cover }) => (
        <Link key={id} to={`/logement/${id}`} className="gallery-card">
          <article>
            <img src={cover} alt={title} className="gallery-card-image" />

            <div className="gallery-card-content">
              <h2>{title}</h2>
            </div>
          </article>
        </Link>
      ))}
    </section>
  )
}

export default Gallery