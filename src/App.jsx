import Destination from "./components/Destination";
import Discover from "./components/Discover";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TravelPoint from "./components/TravelPoint";

function App() {
    return (
        <>
            <div className="px-5 md:px-20 overflow-hidden">
                <Header />
                <Hero />
                <Discover />
                <TravelPoint />
                <Features />
            </div>
        </>
    );
}

export default App;
