'use client'

import { useState } from "react";

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
  const [count, setCount] = useState([0,0,0]);

  return (
    <div>
      <h2 className="title">Products</h2>
      {
        상품.map((data, idx) => (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} alt="" className="food-img"/>
            <h4>{data} $40</h4>
            <button
              type="button"
              onClick={() => {
                let copy = [...count];
                copy[idx]--;
                setCount(copy);
              }}
            >-</button>
            <span> {count[idx]} </span>
            <button
              type="button"
              onClick={() => {
                let copy = [...count];
                copy[idx]++;
                setCount(copy);
              }}
            >+</button>
          </div>
        ))
      }
    </div>
  )
} 
