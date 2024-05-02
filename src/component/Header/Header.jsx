import './Header.css'

function Header() {
    return (
        <div className='head-container'>
            <header>
                <div className="logo">
                    <h1>Family Wellness</h1>
                    <h5>MESSAGE THERAPY</h5>
                </div>
                <div className="navbar">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICE</li>
                        <li>FAQ</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header