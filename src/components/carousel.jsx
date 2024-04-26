
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import goyaUno from '../assets/GoyaUno.jpg'

export function EmblaCarousel() {

  //delay:3000 is the time the carousel will show an image

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({delay:3000})])

  return (

  //I dont know if this tags should work for validation,should check

    <section className="embla" ref={emblaRef}>
      <article className="embla__container">
        <img className="embla__slide" src={goyaUno} alt='1'/>
        <img className="embla__slide" src={goyaUno} alt='2'/>
        <img className="embla__slide" src={goyaUno} alt='3'/>
      </article>
    </section>
  )
}
