import '../styles/pages/Home.css'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import ImgBackground from '../assets/images/banner.jpg'

function Home() {
  return (
    <>
    <main className="home">
<Banner
className="bannerImgHome"
  picture={ImgBackground}
  title="Chez vous, partout et ailleurs"
  alt="Falaises en bord de mer"
  variant="home"
/>
<Gallery />
    </main>
    </>
  )
}

export default Home
