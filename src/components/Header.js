import React from 'react';
import {  Divider,  Typography } from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography variant="h3">Call a Friend</Typography>
      <Divider>Your friendly contact app</Divider>
    </>

  );
};

export default Header;