import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  if (req.method == 'GET') {
    res.status(200).json(result);
  }

  if (req.method == 'POST') {
    res.status(200).json('success');
  }
}