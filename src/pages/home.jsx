import { useState, useEffect } from "react";
import Layout from "../components/layout.jsx";
import HeroSlider from "../components/HeroSlider";
import "./../styles/pages/Home.css";

const slides = [
  {
    img: "https://i.pinimg.com/736x/b5/2f/58/b52f589daebd13077f27ccabd2bacfe0.jpg",
    title: "Sajek Valley",
    desc: "Experience the clouds above the hills.",
  },
  {
    img: "https://i.pinimg.com/1200x/11/99/d2/1199d2b57cf03528bec023822e49985e.jpg",
    title: "Sylhet",
    desc: "Green hills and endless tea gardens.",
  },
  {
    img: "https://i.pinimg.com/736x/0f/e1/cd/0fe1cd18d5aae44d370ac712a5555f8e.jpg",
    title: "Bandarban",
    desc: "Misty hills, waterfalls, tribal soul.",
  },
  {
    img: "https://i.pinimg.com/736x/71/a0/a3/71a0a3d9a91acd580f4e019884bf7025.jpg",
    title: "Sundarban",
    desc: "Wild mangroves, animals, winding tides.",
  },
  {
    img: "https://i.pinimg.com/736x/ef/9e/20/ef9e20b9d227d7e98654eb5f37125bc3.jpg",
    title: "Debotakhum",
    desc: "Serene canyon, emerald waters, hidden.",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background">

      <Layout>

        <HeroSlider />

        <section className="hero">

          {/* LEFT */}
          <div className="hero-left">
            <span className="hero-tag">✈ Explore Bangladesh Smarter</span>

            <h1>
              Discover the beauty of <span>Bangladesh</span> with JatraPath
            </h1>

            <p>
              Plan journeys, discover hidden gems, explore breathtaking
              destinations, and travel with confidence — all in one place.
            </p>

            <div className="hero-buttons">
              <a href="/destinations" className="primary-btn">
                Explore Destinations
              </a>

              <a href="/about" className="secondary-btn">
                Learn More
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-box">
                <h3>150+</h3>
                <p>Travel Spots</p>
              </div>

              <div className="stat-box">
                <h3>10K+</h3>
                <p>Travelers</p>
              </div>

              <div className="stat-box">
                <h3>64</h3>
                <p>District Guides</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">

            <div className="glass-card main-card image-slider">

              <div className="img-stack">
                {slides.map((slide, i) => (
                  <img
                    key={i}
                    src={slide.img}
                    alt={slide.title}
                    className={i === index ? "active" : ""}
                  />
                ))}
              </div>

              <div className="card-content">
                <h3>{slides[index].title}</h3>
                <p>{slides[index].desc}</p>
              </div>

            </div>

            <div className="floating-card">
              <span>🌍 Trending Destination</span>
              <h4>Cox's Bazar</h4>
            </div>

          </div>

        </section>
      </Layout>
    </div>
  );
};

export default Home;

