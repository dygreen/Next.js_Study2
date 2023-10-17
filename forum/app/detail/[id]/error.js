/* 에러 UI
- client component 만 넣을 수 있음
- props : error = 에러 내용 알려줌 / reset = () 붙여 실행하면 해당 페이지를 다시 로드해줌
*/

'use client'

export default function Error({error, reset}) {
  return (
    <div>
      <h4>에러</h4>
      <button onClick={() => reset()}>버튼</button> {/* reset() : 페이지 다시 로드 */}
    </div>
  );
}