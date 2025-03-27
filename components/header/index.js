import Link from "next/link";

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-secondary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">Yapeaud Dev</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/resume">Resume</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/projets">Projets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;