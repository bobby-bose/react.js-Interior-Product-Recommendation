import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, makeStyles, TextField, Button, MenuItem } from '@material-ui/core';
import MaskedInput from 'react-text-mask'; // Import MaskedInput

const countries = [
  {
    code: '+1',
    label: 'United States',
  },
  {
    code: '+44',
    label: 'United Kingdom',
  },
  // Add more countries as needed
];

const CardNumberFormat = (props) => {
  return (
    <MaskedInput
      {...props}
      mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
};

const CcvFormat = (props) => {
  return (
    <MaskedInput
      {...props}
      mask={[/\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  banner: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto',
  },
  form: {
    marginTop: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
        borderRadius: '3px',
        borderWidth: '2px',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
      '& input': {
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '3px',
        textAlign: 'center', // Center text
      },
    },
  },
  checkoutSection: {
    border: '2px solid black',
    borderRadius: '3px',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  checkoutImage: {
    width: '100%',
    border: '2px solid black',
    borderRadius: '3px',
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.banner}>
        Checkout page
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <form className={classes.form}>
            <TextField
              className={classes.textField}
              label="Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              className={classes.textField}
              label="Email"
              variant="outlined"
              fullWidth
            />
            <TextField
              className={classes.textField}
              label="Phone Number"
              variant="outlined"
              fullWidth
              select
              defaultValue={countries[0].code}
            >
              {countries.map((option) => (
                <MenuItem key={option.code} value={option.code}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.textField}
              label="Address 1"
              variant="outlined"
              fullWidth
            />
            <TextField
              className={classes.textField}
              label="Address 2"
              variant="outlined"
              fullWidth
            />
            <TextField
              className={classes.textField}
              label="District"
              variant="outlined"
              fullWidth
            />
            <TextField
              className={classes.textField}
              label="Country"
              variant="outlined"
              fullWidth
            />
            <TextField
              className={classes.textField}
              label="Pin Code"
              variant="outlined"
              fullWidth
            />
            <TextField
              className={classes.textField}
              label="Card Number"
              variant="outlined"
              fullWidth
              InputProps={{
                inputComponent: CardNumberFormat,
              }}
            />
            <TextField
              className={classes.textField}
              label="Expiry Month"
              variant="outlined"
              fullWidth
              select
            >
              {/* Dropdown options for month */}
            </TextField>
            <TextField
              className={classes.textField}
              label="Expiry Year"
              variant="outlined"
              fullWidth
              select
            >
              {/* Dropdown options for year */}
            </TextField>
            <TextField
              className={classes.textField}
              label="CCV"
              variant="outlined"
              fullWidth
              InputProps={{
                inputComponent: CcvFormat,
              }}
            />
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              fullWidth
            >
              Checkout
            </Button>
          </form>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.checkoutSection}>
            <img src="https://via.placeholder.com/150" alt="Checkout Item" className={classes.checkoutImage} />
            <Typography variant="h6" align="center" gutterBottom>
              Checkout Item Name
            </Typography>
            <Typography variant="body1" align="center">
              $XX.XX
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
