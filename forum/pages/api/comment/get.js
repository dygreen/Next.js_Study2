import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == 'GET') {
    const client = await connectDB;
    const db = client.db('forum');

    // 부모 게시물의 댓글만 가져옴 (query string)
    let result = await db.collection('comment').find({ parent : new ObjectId(req.query.id) }).toArray();

    return res.status(200).json(result)
  }
}