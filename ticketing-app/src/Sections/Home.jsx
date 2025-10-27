import React, { useEffect } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  const eventImages = [
    "/1.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
  ];

  return (
    <section id="home" className="home-section">
      <div className="carousel-container">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="home-swiper"
        >
          {eventImages.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <img
                  src={event}
                  alt={`event${index + 1}`}
                  className="carousel-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="home-content">
        <h1>Welcome to Tickify</h1>
        <p>
          Book, manage and explore your favorite events with ease and
          confidence.
        </p>
        <a href="/events" className="explore-btn">
          Explore Events
        </a>
      </div>
    </section>
  );
}

export default Home;
