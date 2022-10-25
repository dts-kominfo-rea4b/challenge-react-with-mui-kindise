// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={data.photo}/>
          </ListItemAvatar>
          <ListItemText
            primary={data.name}
            secondary={
                <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary">
                </Typography>
                {data.phone}
                <br />
                {data.email}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
    </List>
    );
};

export default Contact;
