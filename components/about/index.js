

const About = () => {
    return (
        <>
            <section id="about" className="text-center bg-body-secondary container-fluid mt-5 p-5">
                <div className="d-flex justify-content-center">
                    <h1 className="gradient-title">About Me</h1>
                </div>
                <p className="text-justify">Je suis Yapeaud Beda et je conçois des applications web performant et évolutif..</p>
                <p className="text-justify">Avec une expertise en MongoDB, Express, React et Node.js, je conçois des solutions sur mesure qui
                    répondent aux besoins spécifiques de chaque client. Je mets un point d'honneur à offrir une expérience
                    utilisateur fluide, tout en assurant la robustesse et la scalabilité des applications que je développe.
                    Toujours à l'affût des dernières technologies, je cherche à apporter des solutions innovantes pour
                    optimiser les performances et la maintenabilité des projets.</p>
                <p>
                    <a href="https://github.com/yapeaud">
                        <i className="bi bi-github gradient-text"></i>
                    </a>
                </p>
            </section>
        </>
    );
}

export default About;