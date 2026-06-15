import PropTypes from 'prop-types'
import '../../styles/components/logementDetails/Tags.css'

function Tags({ tags }) {
  return (
    <ul className="logementTags">
      {tags.map((tag) => (
        <li key={tag} className="logementTag">
          {tag}
        </li>
      ))}
    </ul>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Tags
