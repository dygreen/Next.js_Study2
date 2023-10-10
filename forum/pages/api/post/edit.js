import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == 'POST') {
    const client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').updateOne({
      _id : new ObjectId(req.body._id)
    }, {
      $set : {
        title : req.body.title,
        content : req.body.content
      }
    });
    
    // 성공 시 /list 로 이동
    return res.redirect(302, '/list');
  }
}

/* document 수정하기
.updateOne({ 수정할 게시물을 찾아야 하기 때문에 수정할 게시물 정보를 넣음 }, { 수정할 내용을 object 자료로 넣음 })

$set 및 여러 연산자
- $set : 기존 값을 바꿔줌. 없으면 추가함.
- $unset : 기존에 있던 키 값을 제거해줌
- $inc : 기존 값이 숫자면 거기에 숫자를 더하거나 뺄 때 사용함
*/