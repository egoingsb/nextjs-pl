import Link from "next/link";

export function Nav() {
  const topics = [
    { id: 1, title: "About", body: "About Payletter" },
    { id: 2, title: "History", body: "History of Payletter" },
  ];
  const lis = topics.map((e) => <li key={e.id}>
    <Link href={`/read/${e.id}`}>{e.title}</Link>
  </li>);
  return <nav>
    <ul>
      {lis}
    </ul>
  </nav>;
}
