import RatingCard from './RatingCard';

export default function Ratings({ ratings }) {
    return (
        <section className="testimonials">
            <div>
                <h1>Testimonials</h1>
                <div>
                    {ratings.map((rating, index) => (
                        <RatingCard key={index} rating={rating} />
                    ))}
                </div>
            </div>
        </section>
    )
}