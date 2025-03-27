

const Experience = () => {
    return (
        <>
            <main className="container">
                <div className="d-flex justify-content-center">
                    <h1 className="mt-5 gradient-title">Resume</h1>
                </div>
                <section className="row mt-5">
                    <article className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="title-experience">Experience</h2>
                            <a href="/assets/docs/" className="btn btn-primary pt-3 pb-3">
                                <i className="bi bi-download"></i> Download Resume
                            </a>
                        </div>
                        <div className="mt-5">
                            <div className="card mb-3 shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                                <div className="row g-0">
                                    <div className="col-md-4 bg-body-secondary rounded">
                                        <div className="card-body">
                                            <h5 className="card-title h5-exp">2022-2023</h5>
                                            <p className="card-text fw-bold">Développeur Web Mobile</p>
                                            <p className="card-text"><small className="text-body-secondary">Atos Digital Academy,
                                                Abidjan</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text">Mise en place d'une application web d'alerte en cas
                                                d'urgence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="col-12">
                        <div className="center">
                            <div className="card mb-3 shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                                <div className="row g-0">
                                    <div className="col-md-4 bg-body-secondary rounded">
                                        <div className="card-body">
                                            <h5 className="card-title h5-exp">2021</h5>
                                            <p className="card-text fw-bold">Développeur Web</p>
                                            <p className="card-text"><small className="text-body-secondary">Ivoire Geek School,
                                                Abidjan</small></p>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text">Réalisation du site web de l'apfnp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Experience;