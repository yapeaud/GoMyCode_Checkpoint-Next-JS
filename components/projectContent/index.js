import Image from "next/image";
import { projet1, projet2 } from "../../public/assets";

const ProjetContent = () => {
    return (
        <>
            <main className="container">
                <div className="d-flex justify-content-center">
                    <h1 className="mt-5 gradient-title">Projets</h1>
                </div>
                <section className="row">

                    {/* SECTION PROJET 1 */}
                    <article className="col-12">
                        <div className="mt-3">
                            <div className="card mb-3 shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="card-title">PLATE-ALERT</h5>
                                            <p className="card-text text-justify">Développement et mise en place d'une application web d'alerte en cas d'urgence, intégrant un système de notifications push pour une diffusion instantanée des messages critiques, et une fonctionnalité de géolocalisation pour cibler les zones concernées. Réalisée avec HTML, CSS, Bootstrap pour le front-end, et PHP couplé à une base de données MySQL pour le back-end.</p>
                                            <a href="#" target="_blank" className="card-text text-decoration-none"><small className="text-body-secondary">www.plate-alert.ci</small></a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <Image src={projet1} className="img-fluid rounded-start" alt="projet1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* SECTION PROJET 2 */}
                    <article className="col-12">
                        <div className="mt-3">
                            <div className="card mb-3 shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="card-title">APFNP</h5>
                                            <p className="card-text text-justify">Conception et réalisation du site web de l'APFNP en utilisant HTML, CSS, Bootstrap pour un design réactif et attractif, et PHP pour le développement de fonctionnalités dynamiques.</p>
                                            <a href="https://www.apfnp.org" target="_blank" className="card-text text-decoration-none"><small className="text-body-secondary">www.apfnp.org</small></a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <Image src={projet2} className="img-fluid rounded-start" alt="projet2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            {/* SECTION  */}
            <section className="custom-bg p-5 text-center">
                <h1 className="mb-5">Construisons quelque chose ensemble</h1>
                <a href="../pages/contact.html" type="button" className="btn btn-outline-light fw-bold p-3">Contact me</a>
            </section>
        </>
    );
}

export default ProjetContent;