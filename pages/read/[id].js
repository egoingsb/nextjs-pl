import { useRouter } from "next/router"
export async function getServerSideProps(context){
  return {props:{}}
}
export default function Read(){
  const route = useRouter();
  console.log("🚀 ~ file: [id].js:5 ~ Read ~ route", route.asPath, route.query)
  return <h1>Read</h1>
}