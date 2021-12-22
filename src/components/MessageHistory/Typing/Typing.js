import PropTypes from 'prop-types';
import Response from '../Response/Response';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function Typing({ from, message }) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><FontAwesomeIcon className="fa online" icon={faCircle} />{from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <FontAwesomeIcon className="fa online fa-fade" icon={faCircle} />
      <FontAwesomeIcon className="fa online fa-fade two" icon={faCircle} />
      <FontAwesomeIcon className="fa online fa-fade three" icon={faCircle} />
    </li>
  )
}

Response.propTypes = {
  from: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
}

export default Typing;