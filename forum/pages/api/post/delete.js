import { connetDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == 'DELETE') {
    const client = await connetDB;
    const db = client.db('forum');
    let result = await db.collection('post').deleteOne({
      _id : new ObjectId(JSON.parse(req.body)._id)
    });
    
    // 성공 시 /list 로 이동
    return res.status(200).json('삭제완료')
  }
}