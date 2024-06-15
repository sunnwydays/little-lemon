export default function RatingCard({ review }) {
    return (
        <div className="rating-card">
            <p>Rating</p>
            <div>
                <p>{review.image}</p>
                <p>{review.name}</p>
            </div>
            <p>{review.comments}</p>
        </div>
    )
}