import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function Response({ from, message }) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><FontAwesomeIcon className="fa online" icon={faCircle} />{from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  )
}

Response.propTypes = {
  from: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
}

export default Response;