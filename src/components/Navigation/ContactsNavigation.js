import { NavLink } from 'react-router-dom';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import s from './ContactsNavigation.module.css';

const useStales = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(10),
  },
}));

const ContactsNavigation = () => {
  const classes = useStales();
  return (
    <>
      <NavLink to="/contacts" exact>
        <Box className={classes.title}>
          <Typography variant="h6" color="secondary" className={s.title}>
            Add contacts
          </Typography>
        </Box>
      </NavLink>
      <NavLink to="/filterContacts" exact>
        <Box className={classes.title}>
          <Typography variant="h6" color="secondary" className={s.title}>
            Find contacts
          </Typography>
        </Box>
      </NavLink>
    </>
  );
};

export default ContactsNavigation;
