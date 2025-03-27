import About from "../components/about";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
const HomePage = () => {
    return (
        <>
            <section>
                <Header />
                <Hero />
                <About />
                <Footer/>
            </section>
        </>
    );
}

export default HomePage;
