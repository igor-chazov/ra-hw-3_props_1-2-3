import Star from './Star/Star';
import './stars.css';
import { nanoid } from 'nanoid'

function Stars({ count = 0 }) {
  const number = parseInt(count, 10);
  if (Number.isNaN(number)) return null;
  if (number < 1 || number > 5) return null;

  const listItems = [];

  for (let i = 1; i <= count; i += 1) {
    listItems.push(<Star />);
  }

  const listItemsIndex = listItems.map((listItem) =>
    ({ id: nanoid(), value: listItem }));

  const starsListItems = listItemsIndex.map((listItem) =>
    <li key={listItem.id}>{listItem.value}</li>);

  return (
    <ul className="card-body-stars">
      {[starsListItems]}
    </ul>
  )
}

export default Stars;
