import { Grid, Container} from '@mui/material';
import { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Contact from './components/Contact';
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  const addContact = (dataContact) => {
    const newContacts = [...contacts, dataContact];
    setContacts(newContacts);
  };

  return (
    <div className="App">
      <Header />
      <Container sx={{ pt: 10 }} maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ContactForm addContacts={addContact} />
          </Grid>
          <Grid item xs={12} md={6}>
            {contacts.map((contact) => (
              <Contact key={contact.phone} data={contact} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
