

const Footer = () => {
    return (
        <>
            <footer className="container-fluid text-center p-5">
                <article className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <p>
                            <a href="#" className="link-secondary link-opacity-50-hover no-underline">Privacy</a>
                            <a href="#" className="link-secondary link-opacity-50-hover px-2 no-underline">Terms</a>
                            <a href="#" className="link-secondary link-opacity-50-hover no-underline">Contact</a>
                        </p>
                    </div>
                </article>
            </footer>
        </>
    );
}

export default Footer;