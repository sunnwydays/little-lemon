export default function SpecialCard({ special }) {
    return (
        <div className="special-card">
            <img src={special.image} alt={special.name} />
            <div>
                <div>
                    <h3>{special.name}</h3>
                    <p>${(special.price).toFixed(2)}</p>
                </div>
                <p>{special.description}</p>
                <p>Order a delivery 🚲</p>
            </div>
        </div>
    )
}