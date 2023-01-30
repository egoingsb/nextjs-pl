import { Header } from "./Header";
import { Nav } from "./Nav";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Container, Grid, Stack } from "@mui/material";
import Button from '@mui/material/Button';
import {useState} from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Layout({children}){
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  let contextUI = null;
  if(router.query.id){
    contextUI = <>
      <Button component={Link} variant="outlined" href={`/update/${router.query.id}`}>Update</Button>
      <Button variant="outlined" onClick={()=>setIsOpen(true)}>Delete</Button>
    </>
  }
  return <Container maxWidth="md">
    <Dialog open={isOpen} onClose={()=>setIsOpen(false)}>
      <DialogTitle>정말 삭제할까요?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
          <Button onClick={()=>{
            setIsOpen(false);
          }}>Cancel</Button>
          <Button onClick={async ()=>{
            await axios.delete('http://localhost:9999/topics/'+router.query.id);
            router.push('/');
            setIsOpen(false);
          }}>Confirm</Button>
        </DialogActions>
    </Dialog>
    <Header title="Payletter"></Header>
    <Grid container>
      <Grid item md={3} xs={12}>
        <Nav></Nav>
      </Grid>
      <Grid item md={9} xs={12}>
        {children}
        <Stack direction="row" spacing={1}>
          <Button color="success" variant="outlined" component={Link} href="/create">Create</Button>
          {contextUI}
        </Stack>
      </Grid>
    </Grid>
  </Container>
}