// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Card, TextField, Button } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ addContacts }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: '',
        phone: '',
        email: '',
        photo: '',
    });
    
      // handler untuk get value inputan
    const inputHandler = (e) => {
        setNewContact({
          ...newContact,
          [e.target.name]: e.target.value,
        });
    };

    const addContactHandler = (e) => {
        e.preventDefault();
        addContacts(newContact);
        setNewContact({
            name: "",
            phone: "",
            email: "",
            photo: "",
        });
    };
   // onClick={() => addContacts(newContact)}

    return (
        <>
        <Card component="form" variant="outlined" sx={{ ".MuiTextField-root": { mb: 2 },
				p: 1,bgcolor: '#F3F1EB'}}  onSubmit={addContactHandler}>
                <TextField
                fullWidth
                required
                id="name"
                name="name"
                label="Name"
                variant="filled"
                value={newContact.name}
                onChange={inputHandler}
                />
                <TextField
                fullWidth
                required
                id="phone"
                name="phone"
                label="Phone"
                variant="filled"
                value={newContact.phone}
                onChange={inputHandler}
                />
                <TextField
                fullWidth
                required
                id="email"
                name="email"
                label="Email"
                variant="filled"
                value={newContact.email}
                onChange={inputHandler}
                />
                <TextField
                fullWidth
                id="photo"
                name="photo"
                label="Photo URL"
                variant="filled"
                value={newContact.photo}
                onChange={inputHandler}
                />
                <br />
                <Button color="success" type="submit"  > ADD NEW</Button>
                
        </Card>
    </>
    );
}

export default ContactForm;