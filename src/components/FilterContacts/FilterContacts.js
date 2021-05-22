import { connect, useSelector } from 'react-redux';

import { Container, Grid } from '@material-ui/core';

import { onChange } from '../../Redux/Actions';
import { getIsLoggedOn } from '../../Redux/Selectors';
import PropTypes from 'prop-types';
import s from './FilterContacts.module.css';

const FilterContacts = ({ filter, onChange }) => {
  const isLoggedOn = useSelector(getIsLoggedOn);

  return (
    <>
      {isLoggedOn ? (
        <Container fixed>
          <Grid container>
            <div className={s.formWrapper}>
              <h2 className={s.title}>Find contacts</h2>
              <input
                className={s.input}
                type="text"
                name="filter"
                value={filter}
                onChange={onChange}
                placeholder="Search contact"
              />
            </div>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target }) => dispatch(onChange(target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);

FilterContacts.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
