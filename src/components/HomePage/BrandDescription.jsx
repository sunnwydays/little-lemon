import chef from '../../assets/chef vertical.jpg';

export default function BrandDescription() {
    return (
        <div>
            <div>
                <h1>Little Lemon</h1>
                <p className="markazi-32">Chicago</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
            </div>
            <img src={chef} alt="chef" />
        </div>
    )
}