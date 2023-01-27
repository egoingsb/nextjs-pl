import { Article } from "@/components/Article";

export default function Create(){
  return <Article title="Create">
    <form onSubmit={(evt)=>{
      evt.preventDefault();
      const title = evt.target.title.value;
      const body = evt.target.body.value;
    }}>
      <p>
        <input type="text" name="title" placeholder="제목" />
      </p>
      <p>
        <textarea name="body" placeholder="본문"></textarea>
      </p>
      <p>
        <input type="submit" value="Create" />
      </p>
    </form>
  </Article>
}