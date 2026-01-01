import React, {useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "../Styles/gallery.css";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const reviews = [
    { id: 1, image: gallery1, alternate: "Table Design" },
    { id: 2, image: gallery2, alternate: "Excellent Service" },
    { id: 3, image: gallery3, alternate: "Happy Customers" },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='reviews-container'>
      <button className='embla__arrow embla__prev' onClick={scrollPrev} aria-label="Previous Review">
        ❬
      </button>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {reviews.map((review) => (
            <div className="embla__slide" key={review.id}>
                <img src={review.image} alt={review.alternate} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
      <button className='embla__arrow embla__next' onClick={scrollNext} aria-label="Next Review">
        ❭
      </button>
    </div>
    
  )
}