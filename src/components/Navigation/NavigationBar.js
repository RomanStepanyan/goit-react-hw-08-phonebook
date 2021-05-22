import { useSelector } from 'react-redux';

import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { getIsLoggedOn } from '../../Redux/Selectors';
import ContactsList from '../ContactsList/ContactsList';
import UserMenu from '../UserMenu/UserMenu';
import ContactsNav from './ContactsNavigation';
import HomePage from '../HomePage/HomePage';
import LoginNavigationButtons from './LoginNavigationButtons';

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(1) },
  title: { flexGrow: 1 },
  homePageTitle: {
    position: 'relative',
    color: theme.palette.common.black,
    marginTop: theme.spacing(10),
    textAlign: 'center',
  },
}));

const NavigationBar = () => {
  const isLoggedOn = useSelector(getIsLoggedOn);
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <HomePage />
            {isLoggedOn ? (
              <>
                <ContactsNav />
                <UserMenu />
              </>
            ) : (
              <>
                <LoginNavigationButtons />
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Container fixed>
        {isLoggedOn ? (
          <ContactsList />
        ) : (
          <Typography variant="h6" className={classes.homePageTitle}>
            Please sign up or login to manage your contacts!
          </Typography>
        )}
      </Container>
    </>
  );
};
export default NavigationBar;
