import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../Redux/Operations';
import { getIsLoggedOn } from '../../Redux/Selectors';

import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

const ContactsList = ({ items }) => {
  const dispatch = useDispatch();
  const isLoggedOn = useSelector(getIsLoggedOn);

  if (items.length === 0) return null;
  return (
    <>
      {isLoggedOn ? (
        <div className={s.contactListWrapper}>
          <h2 className={s.title}>Contacts list</h2>
          <ul>
            {items.map(item => (
              <li key={item.id} className={s.contact}>
                <span className={s.contact_span}>{item.name}</span>{' '}
                <span className={s.contact_span}>{item.number}</span>
                <button
                  className={s.button}
                  onClick={() => dispatch(deleteContacts(item.id))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  items: getVisibleContacts(items, filter),
});

export default connect(mapStateToProps)(ContactsList);

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
