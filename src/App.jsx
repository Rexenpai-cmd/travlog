import Discover from "./components/Discover";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
    return (
        <>
            <div className="px-5 lg:px-20 overflow-hidden">
                <Header />
                <Hero />
                <Discover />
            </div>
        </>
    );
}

export default App;
