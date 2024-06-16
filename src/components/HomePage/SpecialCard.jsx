export default function SpecialCard({ special }) {
    return (
        <div>
            <img src={special.image} alt={special.name} />
            <div>
                <h3>{special.name}</h3>
                <p>${special.price}</p>
            </div>
            <p>{special.description}</p>
            <p>Order a delivery 🚲</p>
        </div>
    )
}