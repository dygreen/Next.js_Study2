import { connetDB } from "@/util/database";

export default async function List() {
  const client = await connetDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      {
        result.map(data => (
          <div className="list-item">
            <h4>{data.title}</h4>
            <p>{data.content}</p>
          </div>
        ))
      }
    </div>
  )
}