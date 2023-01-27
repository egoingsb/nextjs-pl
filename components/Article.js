export function Article({ title, children }) {
  return <article>
    <h2>{title}</h2>
    {children}
  </article>;
}
