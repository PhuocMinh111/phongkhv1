import React,{ useRef,useEffect } from 'react'
import hero from './images/hero.svg'

const Hero = ({title}) => {
  const heroRef = useRef(null)

  useEffect(function() {
    heroRef.current.classList.add('show-hero');
  },[])
  return (
    <section ref={heroRef} className="hero">
      <article className="hero-center">
        <article className="hero-info">
          <h1 >{title}</h1>
        </article>
      
      </article>

    </section>
  )
}

export default Hero
