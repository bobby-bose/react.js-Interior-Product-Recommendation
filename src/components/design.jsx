import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom right, #000000, #4d4d4d, #808080)',
    padding: theme.spacing(2),
    borderRadius: 30,
    justifySelf: 'center',
    alignSelf: 'center',
    marginTop: '20vh',
  },
  formControl: {
    minWidth: 200,
    margin: theme.spacing(1),
  },
  input: {
    color: '#ffffff',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const DesignPage = () => {
  const classes = useStyles();

  const [roomType, setRoomType] = React.useState('');
  const [roomStyle, setRoomStyle] = React.useState('');
  const [image, setImage] = React.useState(null);

  const handleRoomTypeChange = (event) => {
    setRoomType(event.target.value);
  };

  const handleRoomStyleChange = (event) => {
    setRoomStyle(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h4" align="center" style={{ color: '#ffffff' }}>
              Please Upload Your Design Details
            </Typography>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="room-type-label" className={classes.input}>
                Choose your room type
              </InputLabel>
              <Select
                labelId="room-type-label"
                id="room-type"
                value={roomType}
                onChange={handleRoomTypeChange}
                className={classes.input}
                style={{ width: '300px' }}
              >
               <MenuItem value="">
  <em>None</em>
</MenuItem>
<MenuItem value="Living Room">Living Room</MenuItem>
<MenuItem value="Dining Room">Dining Room</MenuItem>
<MenuItem value="Gaming Room">Gaming Room</MenuItem>
<MenuItem value="Bedroom">Bedroom</MenuItem>
<MenuItem value="Bathroom">Bathroom</MenuItem>
<MenuItem value="Office">Office</MenuItem>
<MenuItem value="Kitchen">Kitchen</MenuItem>
<MenuItem value="Guest Room">Guest Room</MenuItem>
<MenuItem value="Laundry Room">Laundry Room</MenuItem>
<MenuItem value="Home Theater">Home Theater</MenuItem>
<MenuItem value="Playroom">Playroom</MenuItem>
<MenuItem value="Music Room">Music Room</MenuItem>
<MenuItem value="Exercise Room">Exercise Room</MenuItem>
<MenuItem value="Outdoor Living Space">Outdoor Living Space</MenuItem>
<MenuItem value="Study Room">Study Room</MenuItem>
<MenuItem value="Home Office">Home Office</MenuItem>
<MenuItem value="Outdoor Garden">Outdoor Garden</MenuItem>
<MenuItem value="Meeting Room">Meeting Room</MenuItem>

            
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="room-style-label" className={classes.input}>
                Choose your room style
              </InputLabel>
              <Select
                labelId="room-style-label"
                id="room-style"
                value={roomStyle}
                onChange={handleRoomStyleChange}
                className={classes.input}
                style={{ width: '300px' }}
              >
                <MenuItem value="">
  <em>None</em>
</MenuItem>
<MenuItem value="Modern">Modern</MenuItem>
<MenuItem value="Neutral">Neutral</MenuItem>
<MenuItem value="Monochromatic">Monochromatic</MenuItem>
<MenuItem value="Complementary">Complementary</MenuItem>
<MenuItem value="Cyberpunk">Cyberpunk</MenuItem>
<MenuItem value="Analogous">Analogous</MenuItem>
<MenuItem value="Warm">Warm</MenuItem>
<MenuItem value="Cool">Cool</MenuItem>
<MenuItem value="Pastel">Pastel</MenuItem>
<MenuItem value="Black and white">Black and white</MenuItem>
<MenuItem value="Earthy">Earthy</MenuItem>
<MenuItem value="Vintage">Vintage</MenuItem>
<MenuItem value="Minimalist">Minimalist</MenuItem>
<MenuItem value="Scandinavian">Scandinavian</MenuItem>
<MenuItem value="Bohemian">Bohemian</MenuItem>
<MenuItem value="High-Contrast">High-Contrast</MenuItem>
<MenuItem value="Bright">Bright</MenuItem>
<MenuItem value="Ocean-inspired">Ocean-inspired</MenuItem>
<MenuItem value="Rustic">Rustic</MenuItem>
<MenuItem value="Tropical">Tropical</MenuItem>
<MenuItem value="Bold">Bold</MenuItem>
<MenuItem value="Jewel-toned">Jewel-toned</MenuItem>
<MenuItem value="Art Deco">Art Deco</MenuItem>
<MenuItem value="Mediterranean">Mediterranean</MenuItem>
<MenuItem value="Traditional">Traditional</MenuItem>
<MenuItem value="Beachy">Beachy</MenuItem>
<MenuItem value="Spanish">Spanish</MenuItem>
<MenuItem value="Swedish">Swedish</MenuItem>
<MenuItem value="Boho">Boho</MenuItem>
<MenuItem value="Victorian gothic">Victorian gothic</MenuItem>
<MenuItem value="Organic modern">Organic modern</MenuItem>
<MenuItem value="Dark academia">Dark academia</MenuItem>
<MenuItem value="Modern rustic">Modern rustic</MenuItem>
<MenuItem value="Art deco modern">Art deco modern</MenuItem>
<MenuItem value="Industrial chic">Industrial chic</MenuItem>
<MenuItem value="Industrial rustic">Industrial rustic</MenuItem>
<MenuItem value="Rustic industrial">Rustic industrial</MenuItem>
<MenuItem value="Eclectic">Eclectic</MenuItem>
<MenuItem value="Victorian">Victorian</MenuItem>
<MenuItem value="Luxury">Luxury</MenuItem>
<MenuItem value="Gothic">Gothic</MenuItem>
<MenuItem value="Moroccan">Moroccan</MenuItem>
<MenuItem value="French">French</MenuItem>
<MenuItem value="Mexican">Mexican</MenuItem>
<MenuItem value="50s">50s</MenuItem>
<MenuItem value="60s">60s</MenuItem>
<MenuItem value="70s">70s</MenuItem>
<MenuItem value="80s">80s</MenuItem>
<MenuItem value="90s">90s</MenuItem>
<MenuItem value="Moody">Moody</MenuItem>
<MenuItem value="Christmas">Christmas</MenuItem>
<MenuItem value="Urban">Urban</MenuItem>
<MenuItem value="Contemporary">Contemporary</MenuItem>
<MenuItem value="Retro">Retro</MenuItem>
<MenuItem value="Whimsical">Whimsical</MenuItem>
<MenuItem value="Zen">Zen</MenuItem>
<MenuItem value="Industrial">Industrial</MenuItem>
<MenuItem value="Biophilic">Biophilic</MenuItem>
<MenuItem value="Farmhouse">Farmhouse</MenuItem>
<MenuItem value="Japanese Design">Japanese Design</MenuItem>
<MenuItem value="Coastal">Coastal</MenuItem>
<MenuItem value="Cottagecore">Cottagecore</MenuItem>
<MenuItem value="French Country">French Country</MenuItem>
<MenuItem value="Maximalist">Maximalist</MenuItem>
<MenuItem value="Art Nouveau">Art Nouveau</MenuItem>
<MenuItem value="Baroque">Baroque</MenuItem>
<MenuItem value="Vaporwave">Vaporwave</MenuItem>
<MenuItem value="Ski Chalet">Ski Chalet</MenuItem>
<MenuItem value="Sketch">Sketch</MenuItem>
<MenuItem value="Tribal">Tribal</MenuItem>
<MenuItem value="Medieval">Medieval</MenuItem>
<MenuItem value="Chinese New Year">Chinese New Year</MenuItem>
<MenuItem value="Halloween">Halloween</MenuItem>
<MenuItem value="Kelly Wearstler">Kelly Wearstler</MenuItem>
<MenuItem value="Nate Berkus">Nate Berkus</MenuItem>
<MenuItem value="Joanna Gaines">Joanna Gaines</MenuItem>
<MenuItem value="Martyn Lawrence Bullard">Martyn Lawrence Bullard</MenuItem>
<MenuItem value="Philippe Starck">Philippe Starck</MenuItem>
<MenuItem value="Emily Henderson">Emily Henderson</MenuItem>
<MenuItem value="Miles Redd">Miles Redd</MenuItem>
<MenuItem value="Victoria Hagan">Victoria Hagan</MenuItem>
<MenuItem value="Tom Dixon">Tom Dixon</MenuItem>
<MenuItem value="Timothy Corrigan">Timothy Corrigan</MenuItem>
<MenuItem value="Axel Vervoordt">Axel Vervoordt</MenuItem>
<MenuItem value="Kelly Hoppen">Kelly Hoppen</MenuItem>
<MenuItem value="Ilse Crawford">Ilse Crawford</MenuItem>
<MenuItem value="India Mahdavi">India Mahdavi</MenuItem>
<MenuItem value="David Collins">David Collins</MenuItem>
<MenuItem value="Thomas O'Brien">Thomas O'Brien</MenuItem>
<MenuItem value="Jacques Garcia">Jacques Garcia</MenuItem>
<MenuItem value="Bunny Williams">Bunny Williams</MenuItem>
<MenuItem value="Kelly Behun">Kelly Behun</MenuItem>
<MenuItem value="Robert Couturier">Robert Couturier</MenuItem>

        
              </Select>
            </FormControl>
          </Grid>
          <div>
  <input
    accept="image/*"
    id="image-upload"
    type="file"
    onChange={handleImageUpload}
    style={{ display: 'none' }}
  />
  <label htmlFor="image-upload">
    <Button
      variant="contained"
      color="primary"
      size="large"
      fullWidth
      component="span"
      className={classes.button}
      style={{ marginBottom: '16px', width:'300px' }} // Add margin bottom to create space between buttons
    >
      Upload Image
    </Button>
  </label>
</div>
<div>
  <Button
    variant="contained"
    color="primary"
    size="large"
    fullWidth
    component="span"
    className={classes.button}
    style={{ width: '250px' }}
  >
    Submit
  </Button>
</div>



        </Grid>
      </form>
    </Container>
  );
};

export default DesignPage;
