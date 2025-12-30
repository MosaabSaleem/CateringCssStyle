import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import "../Styles/reviews.css";

export default function Reviews() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const reviews = [
    { id: 1, text: "Authentic and delicious!", author: "Sarah L." },
    { id: 2, text: "Professional and attentive.", author: "Michael T." }
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {reviews.map((review) => (
          <div className="embla__slide" key={review.id}>
             <div className="review-card">
                <p>"{review.text}"</p>
                <p>- {review.author}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  )
}