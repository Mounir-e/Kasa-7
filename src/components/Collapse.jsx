import { useState } from 'react'
import PropTypes from 'prop-types'
import collapseArrow from '../assets/icons/collapse-arrow.svg'
import '../styles/components/Collapse.css'

function Collapse({ id, label, content, contentList, variant='default' }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = `${id}-content`

  return (
    <article className={`tab ${variant === 'about' ? 'tabAbout' : 'tabLogement'}`}>
      <button
        type="button"
        id={id}
        className="tabLabel"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{label}</span>
        <span className={`tabLabelArrow ${isOpen ? 'open' : ''}`}>
          <img src={collapseArrow} alt="" aria-hidden="true" />
        </span>
      </button>

      <div id={contentId} className={`tabContent ${isOpen ? 'tabContentOpen' : ''}`}>
        {contentList ? (
          <ul>
            {contentList.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </article>
  )
}

Collapse.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  contentList: PropTypes.arrayOf(PropTypes.string),
    variant: PropTypes.string
}

export default Collapse
