function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">LOGO</div>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <a className="header__nav-link" href="#">Repository</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header