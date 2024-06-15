export default function SpecialCard({ dish }) {
    return (
        <div>
            <img src={dish.image} alt={dish.name} />
            <div>
                <h3>{dish.name}</h3>
                <p>${dish.price}</p>
            </div>
            <p>{dish.description}</p>
            <p>Order a delivery 🚲</p>
        </div>
    )
}