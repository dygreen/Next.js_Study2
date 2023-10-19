'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DarkMode({ mode }) {
  let router = useRouter();

  useEffect(() => {
    if (mode == undefined) {
      document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400);
      router.refresh();
    }
  },[])

  return (
    <span 
      onClick={() => {
        if (mode === 'light') {
          document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400);
          router.refresh();
        } else {
          document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400);
          router.refresh();
        }
      }}>
        {mode === 'light' ? '🌙' : '🌞'}
      </span>
  )
}