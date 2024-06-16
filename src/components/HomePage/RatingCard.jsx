export default function RatingCard({ rating }) {
    return (
        <div className="rating-card">
            <p>Rating</p>
            <div>
                <p>{rating.image}</p>
                <p>{rating.name}</p>
            </div>
            <p>{rating.comments}</p>
        </div>
    )
}