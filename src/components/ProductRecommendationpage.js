
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'; // Import Link for navigation

const products = [
  {
    name: 'Product 1',
    description: 'Description of Product 1',
    price: '$10.99',
    location: 'Location 1',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 2',
    description: 'Description of Product 2',
    price: '$20.99',
    location: 'Location 2',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more products as needed
  {
    name: 'Product 3',
    description: 'Description of Product 3',
    price: '$30.99',
    location: 'Location 3',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    name: 'Product 4',
    description: 'Description of Product 4',
    price: '$40.99',
    location: 'Location 4',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    name: 'Product 5',
    description: 'Description of Product 5',
    price: '$50.99',
    location: 'Location 5',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    name: 'Product 6',
    description: 'Description of Product 6',
    price: '$60.99',
    location: 'Location 6',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    name: 'Product 7',
    description: 'Description of Product 7',
    price: '$70.99',
    location: 'Location 7',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    name: 'Product 8',
    description: 'Description of Product 8',
    price: '$80.99',
    location: 'Location 8',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    name: 'Product 9',
    description: 'Description of Product 9',
    price: '$90.99',
    location: 'Location 9',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    name: 'Product 10',
    description: 'Description of Product 10',
    price: '$100.99',
    location: 'Location 10',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    name: 'Product 11',
    description: 'Description of Product 11',
    price: '$110.99',
    location: 'Location 11',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    name: 'Product 12',
    description: 'Description of Product 12',
    price: '$120.99',
    location: 'Location 12',
    imageUrl: 'https://via.placeholder.com/150',

  },
  // Add more products as needed
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    height: '100%',
  },
  banner: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto',
  },
  card: {
    margin: theme.spacing(0, 1),
  },
}));

const ProductRecommendationPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" className={classes.banner}>
        Products recommended for you
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Link to="/checkout">
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  height="150"
                  image={product.imageUrl}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body1">
                    Price: {product.price}
                  </Typography>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                    <Typography variant="body2">{product.location}</Typography>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductRecommendationPage;
