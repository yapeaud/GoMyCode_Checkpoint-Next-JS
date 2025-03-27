import Image from "next/image"
import Link from "next/link"
import {me} from "../../public/assets"

const Hero = () => {
    return (
        <>
            <section id="hero" className="container text-center">
            <article className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-5 my-5">
                    {/* <!-- Badge --> */}
                    <div className="custom-badge mb-3">
                        FULL STACK DEVELOPER · MERN STACK
                    </div>
                    {/* Texte secondaire */}
                    <p className="text-secondary-custom">Je peux aider votre entreprise à</p>
                    {/* Texte principal */}
                    <h1 className="gradient-text">Créer des applications web dynamiques, modernes et évolutives.</h1>
                    {/* Boutons */}
                    <div className="btn-container">
                        <Link href="/resume" className="btn btn-primary btn-custom">Resume</Link>
                        <Link href="/projets" className="btn btn-outline-dark btn-custom ms-3">Projects</Link>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 py-2">
                    <div className="custom-card">
                        {/* Image */}
                        <Image src={me} alt="Profil" className="img-fluid" />
                    </div>
                </div>
            </article>
        </section>

        </>
    )
}

export default Hero;