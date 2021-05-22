import { useSelector, useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import { Toolbar, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { getUserName } from '../../Redux/Selectors';
import { logout } from '../../Redux/Operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const useStales = makeStyles(theme => ({
    menuButton: { marginRight: theme.spacing(1) },
    title: { flexGrow: 1, marginRight: theme.spacing(1) },
  }));

  const classes = useStales();

  return (
    <Toolbar>
      <Box className={classes.title}>
        <Typography variant="h6">Hello {name}</Typography>
      </Box>
      <Box className={classes.menuButton}>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => dispatch(logout())}
        >
          Logout
        </Button>
      </Box>
    </Toolbar>
  );
};
export default UserMenu;
