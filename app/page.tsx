import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingPortfolio from "./components/FloatingPortfolio";

export default function Home() {
    return (
        <div className="bg-gray-50 text-gray-800 antialiased">
            <Header />
            <Hero />
            <Services />
            <WhyUs />
            <About />
            <Testimonials />
            <Contact />
            <CTA />
            <Footer />
            <FloatingPortfolio />
        </div>
    );
}
