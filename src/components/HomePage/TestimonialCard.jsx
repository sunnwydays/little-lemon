export default function TestimonialCard({ testimonial }) {
    return (
        <div className="testimonial-card">
            <h3>Rating</h3>
            <div>
                <img src={testimonial.image} alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
            </div>
            <p>{testimonial.comments}</p>
        </div>
    )
}