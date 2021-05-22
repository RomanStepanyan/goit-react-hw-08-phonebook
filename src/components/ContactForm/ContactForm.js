import { useState } from 'react';
import { Container, Grid } from '@material-ui/core';

import { useDispatch, useSelector, connect } from 'react-redux';
import { addContacts, getContacts } from '../../Redux/Operations';
import { getIsLoggedOn } from '../../Redux/Selectors';
import { notValidatedName } from '../../Redux/Selectors';

import s from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeNameForm = ({ target }) => {
    setName(target.value);
  };

  const handleChangeNumberForm = ({ target }) => {
    setNumber(target.value);
  };
  const isLoggedOn = useSelector(getIsLoggedOn);
  const getItem = useSelector(notValidatedName);

  const handleFormSubmit = event => {
    event.preventDefault();
    if (getItem(name)) {
      alert('Contact is already exist');
      return null;
    } else {
      dispatch(addContacts({ name, number }));
      dispatch(getContacts());
    }
    setNumber('');
    setName('');
  };

  return (
    <>
      {isLoggedOn ? (
        <Container fixed>
          <Grid container>
            <div className={s.formWrapper}>
              <h2 className={s.title}>Add contact</h2>
              <form className={s.form} onSubmit={handleFormSubmit}>
                <input
                  className={s.formInput}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  placeholder="Enter name"
                  value={name}
                  onChange={handleChangeNameForm}
                />

                <input
                  className={s.formInput}
                  type="tel"
                  name="number"
                  pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                  title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                  required
                  placeholder="Enter phone number"
                  value={number}
                  onChange={handleChangeNumberForm}
                />

                <button type="submit">Add contact</button>
              </form>
            </div>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default connect()(ContactForm);
