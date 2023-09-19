import { connetDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const client = await connetDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {
        result.map(data => (
          <div className="list-item" key={data._id}>
            <Link href={`/detail/${data._id.toString()}`}>
              <h4>{data.title}</h4>
            </Link>
            <Link href={`/edit/${data._id.toString()}`}>✏️</Link>
            <p>{data.content}</p>
          </div>
        ))
      }
    </div>
  )
}