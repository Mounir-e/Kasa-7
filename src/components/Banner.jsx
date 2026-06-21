import PropTypes from "prop-types"
import '../styles/components/Banner.css'

function Banner({ picture, title, alt, variant = 'default' }) {
  return (
    <div className="banner">
        <img className={`bannerImg ${variant === 'home' ? 'bannerImgHome' : 'bannerImgAbout'}`}
        src={picture} 
        alt={alt} />
        {title && <h1 className="bannerTitle">{title}</h1>}
    </div>
  )
}

Banner.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string,
  alt: PropTypes.string.isRequired,
  variant: PropTypes.string
}


export default Banner
