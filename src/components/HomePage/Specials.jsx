import SpecialCard from './SpecialCard';

export default function Specials({ specials }) {
    <section className="specials">
        <p>usenaothuesntoahu</p>
        <div>
            <div>
                <h1>This week&apos;s specials!</h1>
                <button>Online Menu</button>
            </div>
            <div>
                {specials.map((special, index) => (
                    <SpecialCard key={index} special={special} />
                ))}
            </div>
        </div>
    </section>
}