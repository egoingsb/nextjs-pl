import { Header } from "./Header";
import { Nav } from "./Nav";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Container, Grid, Stack } from "@mui/material";
import Button from '@mui/material/Button';

export default function Layout({children}){
  const router = useRouter();
  let contextUI = null;
  if(router.query.id){
    contextUI = <>
      <Button component={Link} variant="outlined" href={`/update/${router.query.id}`}>Update</Button>
      <Button variant="outlined">Delete</Button>
    </>
  }
  return <Container maxWidth="md">
    <Header title="Payletter"></Header>
    <Grid container>
      <Grid item md={3} xs={12}>
        <Nav></Nav>
      </Grid>
      <Grid item md={9} xs={12}>
        {children}
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" component={Link} href="/create">Create</Button>
          {contextUI}
        </Stack>
      </Grid>
    </Grid>
  </Container>
}