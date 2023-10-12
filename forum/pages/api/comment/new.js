// 댓글 등록
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  // 서버에서 현재 로그인 중인 유저 정보 출력
  let session = await getServerSession(req, res, authOptions);
  console.log(session);


  if (session && req.method == 'POST') {
    try {
      req.body = JSON.parse(req.body);

      const item = {
        content: req.body.comment,
        parent: new ObjectId(req.body._id),
        author: session.user.email
      }

      const client = await connectDB;
      const db = client.db('forum');
      await db.collection('comment').insertOne(item);

      // 부모 게시물의 댓글만 가져옴
      let result = await db.collection('comment').find({ parent : new ObjectId(req.body._id) }).toArray();

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('로그인 필요');
  }
}