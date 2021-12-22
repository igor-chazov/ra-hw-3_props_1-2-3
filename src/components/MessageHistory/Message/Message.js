import PropTypes from 'prop-types';
import Response from '../Response/Response';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function Message({ from, message }) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <FontAwesomeIcon className="fa me" icon={faCircle} />
      </div>
      <div className="message other-message float-right">{message.text}</div>
    </li>
  )
}

Response.propTypes = {
  from: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
}

export default Message;