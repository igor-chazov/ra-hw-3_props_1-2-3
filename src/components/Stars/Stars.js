import Star from './Star/Star';
import './stars.css';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

function Stars({ count = 0 }) {
  const number = parseInt(count);
  if (Number.isNaN(number)) return null;
  if (number < 1 || number > 5) return null;

  const starsListItems = [];

  for (let i = 1; i <= count; i += 1) {
    starsListItems.push(<li key={nanoid()}><Star /></li>);
  }

  return (
    <ul className="card-body-stars">
      {[starsListItems]}
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}

Stars.defaultProps = {
  count: 0,
}

export default Stars;
