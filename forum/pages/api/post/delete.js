import { connetDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method == 'DELETE') {
    let session = await getServerSession(req, res, authOptions);

    const client = await connetDB;
    const db = client.db('forum');

    let findUser = await db.collection('post').findOne({ _id : new ObjectId(JSON.parse(req.body)._id) })

    if (session) {
      // 로그인 상태에서 로그인한 유저가 본인이 작성한 글만 삭제할 수 있도록 함
      if (findUser.author == session.user.email) {
        let result = await db.collection('post').deleteOne({
          _id : new ObjectId(JSON.parse(req.body)._id)
        });
        
        return res.status(200).json('삭제완료')
      } else {
        return res.status(500).json('현재 유저와 작성자 불일치')
      }
    }
  }
}