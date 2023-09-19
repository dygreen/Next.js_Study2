'use client';

import Link from "next/link"

export default function ListItem(props) {
  return (
    <>
      {
        props.result.map(data => (
          <div className="list-item" key={data._id}>
            <Link href={`/detail/${data._id.toString()}`}>
              <h4>{data.title}</h4>
            </Link>
            <Link href={`/edit/${data._id.toString()}`}>✏️</Link>
            <span 
              onClick={(e) => {
                fetch('/api/post/delete', {
                  method: 'DELETE',
                  body: JSON.stringify(data)
                }).then((res) => {
                  if (res.status == 200) {
                    return res.json();
                  } else {
                    // 서버가 에러 코드 전송 시 실행할 코드

                  }
                }).then((result) => {
                  // 성공 시 실행할 코드
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = 'none';
                  },1000)
                }).catch((err) => {
                  // 인터넷 문제로 실패 시 실행할 코드
                  console.log(err);
                })
              }}
            >🗑️</span>
            <p>{data.content}</p>
          </div>
        ))
      }
    </>
  )
}