'use client'

import { useEffect, useState } from "react"

export default function Comment({_id}) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  // 댓글 조회
  useEffect(() => {
    fetch(`/api/comment/get?id=${_id}`, {
      method: 'GET'
    }).then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    }).then((result) => {
      setCommentList(result);
    })
  },[])

  return (
    <div>
      <div>댓글 목록</div>
      {
        commentList.length > 0 &&
        commentList.map((item, idx) => 
          <div key={idx}>{item.author}: {item.content}</div>
        )
      }
      <input
        type="text"
        onChange={e => setComment(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({
              comment,
              _id
            })
          }).then((res) => {
            if (res.status == 200) {
              return res.json();
            }
          }).then(result => {
            setCommentList(result);
          })
        }}
      >댓글 전송</button>
    </div>
  )
}