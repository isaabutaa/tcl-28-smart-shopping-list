import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '75%',
    margin: '16px auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  label: {
    width: '60%',
    padding: '8px',
    color: 'rgb(0, 0, 0)',
    textAlign: 'left',
  },
  deleteBtn: {
    variant: 'contained',
    backgroundColor: '#80727B',
    color: '#fefefe',
    height: 'auto',
    margin: '0 8px',
    '& :hover': {
      backgroundColor: '#FFADAD',
      color: '#000',
    },
  },
});

export default useStyles;
