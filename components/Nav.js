import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from './Nav.module.css';
export function Nav() {
  const router = useRouter();
  const [topics, setTopics] = useState([]);
  async function init(){
    const resp = await fetch('http://localhost:9999/topics');
    const result = await resp.json();
    setTopics(result);
  }
  useEffect(()=>{
    init(); 
  },[router.asPath]);
  const lis = topics.map((e) => <li key={e.id}>
    <Link href={`/read/${e.id}`}>{e.title}</Link>
  </li>);
  return <nav style={{color:'green'}} className={styles.nav}>
    <ul>
      {lis}
    </ul>
  </nav>;
}
