import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Link } from 'react-router-dom';
import farmtotable from './main_images/farmtotable.png';
import handmadegoods from './main_images/Handmadegoods.png';
import processedfoods from './main_images/processedfood.png';
import craftproducts from './main_images/craftpoducts.png';
import specialityitems from './main_images/specialityfood.png';

const products = [
  {
    name: "Farm-to-Table Products",
    image: farmtotable,
  },
  {
    name: "Handmade Goods",
    image: handmadegoods,
  },
  {
    name: "Processed Foods",
    image: processedfoods,
  },
  {
    name: "Craft Products",
    image: craftproducts,
  },
  {
    name: "Speciality Items",
    image: specialityitems,
  },
];

const ProductCard = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
     <h3 style={{textAlign:"center",fontSize:"25px"}}>OUR PRODUCTS</h3>
      <Grid container spacing={4} style={{ padding: '20px' }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                maxWidth: '290px',
                margin: '0 auto',
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                style={{ height: '190px', objectFit: 'cover' }}
              />
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Button 
                  variant="contained" 
                  style={{ backgroundColor: '#F4C266', marginTop: '10px' }} 
                  onClick={handleClickOpen}
                >
                  View Products
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Attractive Login Dialog */}
      <Dialog open={openDialog} onClose={handleClose} PaperProps={{ style: { borderRadius: '15px', padding: '20px' } }}>
        <DialogTitle style={{ textAlign: 'center', backgroundColor: '#F4C266', color: '#fff', borderRadius: '15px 15px 0 0' }}>
          Please Login
        </DialogTitle>
        <DialogContent style={{ backgroundColor: '#f9f9f9' }}>
          <Typography variant="body1" style={{ marginBottom: '10px' }}>
            Please log in to view the products.
          </Typography>
          <Typography variant="body2" style={{ marginTop: '10px' }}>
            Don't have an account?&nbsp;
            <Link to="/login" style={{ textDecoration: 'underline', color: '#3f51b5' }}>
              Login here
            </Link>
          </Typography>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center', backgroundColor: '#f9f9f9' }}>
          <Button onClick={handleClose} style={{ backgroundColor: '#F4C266', color: '#fff' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductCard;
