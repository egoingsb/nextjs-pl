import { Header } from "./Header";
import { Nav } from "./Nav";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Container, Grid } from "@mui/material";

export default function Layout({children}){
  const router = useRouter();
  let contextUI = null;
  if(router.query.id){
    contextUI = <>
      <Link href={`/update/${router.query.id}`}>Update</Link>
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
        <Link href="/create">Create</Link>
        {contextUI}
      </Grid>
    </Grid>
  </Container>
}