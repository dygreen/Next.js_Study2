export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];

  return (
    <div>
      <h2 className="title">Products</h2>
      {
        상품.map((data, idx) => (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} alt="" className="food-img"/>
            <h4>{data} $40</h4>
          </div>
        ))
      }
    </div>
  )
} 
