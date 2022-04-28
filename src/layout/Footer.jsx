function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__author">
                        Created by Andriy Bosyi
                    </div>
                    <div className="footer__year">{ new Date().getFullYear() }</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer