import React, {useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
import "../Styles/reviews.css";

import avatar1 from "../assets/panda.png";
import avatar2 from "../assets/cat.png";
import avatar3 from "../assets/bear.png";

export default function Reviews() {
  // const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const reviews = [
    { id: 1, avatar: avatar1, text: "C-ATE-ERING made our wedding unforgettable! The food was authentic and delicious.", author: "Sarah L." },
    { id: 2, avatar: avatar2, text: "The team was professional and attentive. The Middle Eastern dishes were a hit!", author: "Michael T." },
    { id: 3, avatar: avatar3, text: "From start to finish, they exceeded our expectations. The flavors reminded me of home.", author: "Aisha K." },
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
              <div className="review-card">
                  <img src={review.avatar} alt={`${review.author} avatar`} className="review-avatar" />
                  <p className="review-text">"{review.text}"</p>
                  <p className="review-author">- {review.author}</p>
              </div>
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