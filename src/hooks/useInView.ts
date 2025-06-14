// src/hooks/useInView.ts
import { useState, useEffect, RefObject } from 'react'

/**
 * Хук возвращает true, когда элемент из ref появляется в viewport
 */
export function useInView<T extends Element | null>(
  ref: RefObject<T>,
  options: IntersectionObserverInit = {}
): boolean {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      options
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, options])

  return visible
}
