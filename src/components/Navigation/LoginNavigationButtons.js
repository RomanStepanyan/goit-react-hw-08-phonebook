import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStales = makeStyles(theme => ({
  menuButton: { marginRight: theme.spacing(1) },
}));

const LoginNavigationButtons = () => {
  const classes = useStales();
  return (
    <>
      <NavLink to="/login" exact>
        <Box className={classes.menuButton}>
          <Button color="secondary" variant="outlined">
            Login
          </Button>
        </Box>
      </NavLink>
      <NavLink to="/register" exact>
        <Box className={classes.menuButton}>
          <Button color="secondary" variant="contained">
            Sign up
          </Button>
        </Box>
      </NavLink>
    </>
  );
};

export default LoginNavigationButtons;
