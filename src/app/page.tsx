// src/app/page.tsx

import Hero from '../components/Hero'
import Advertisers from '../components/Advertisers'
import Affiliates from '../components/Affiliates'
import Metrics from '../components/Metrics'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <>
      {/* Hero — верхняя секция */}
      <Hero />

      {/* Секции для клиентов и партнёров */}
      <Advertisers />
      <Affiliates />

      {/* Ключевые метрики */}
      <Metrics />

      {/* О нас и Контакты */}
      <About />
      <Contact />
    </>
  )
}
