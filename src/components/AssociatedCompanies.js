import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AssociatedCompanies = () => {

    // Static companies data
    const companies = [
        {
            name: "Kevalon Technology",
            logo: "https://res.cloudinary.com/dirqmm0ky/image/upload/v1770038233/Screenshot_2026-02-02_184509-removebg-preview_jvl967.png",
        },
        {
            name: "Techmicra",
            logo: "https://techmicra.co.in/img/core-img/techlogo.png",
        },
        {
            name: "Airson Web Solutions",
            logo: "https://airsonweb.com/assets/images/resources/logo.png",
        },
        {
            name: "Metro Midas ",
            logo: "https://metromidas.com/static/media/metro-midas-logo.79bdbaa635b26da0dfab.png",
        },
        {
            name: "Kevalon Technology",
            logo: "https://res.cloudinary.com/dirqmm0ky/image/upload/v1770038233/Screenshot_2026-02-02_184509-removebg-preview_jvl967.png",
        },
        {
            name: "Techmicra",
            logo: "https://techmicra.co.in/img/core-img/techlogo.png",
        },
        {
            name: "Airson Web Solutions",
            logo: "https://airsonweb.com/assets/images/resources/logo.png",
        },
        {
            name: "Metro Midas ",
            logo: "https://metromidas.com/static/media/metro-midas-logo.79bdbaa635b26da0dfab.png",
        }
    ];
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div
                    className="text-center mb-12"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <span className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-secondary-100 to-primary-100 text-secondary-600 rounded-full text-sm font-semibold">
                        OUR ASSOCIATED COMPANIES
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-heading text-gold">
                        We Are Associated With
                    </h2>
                    <p className="mt-4 text-muted max-w-2xl mx-auto">
                        We proudly connect talented professionals with leading organizations
                        across multiple industries.
                    </p>
                </div>

                {/* Logo Carousel */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={40}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {companies.map((company, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="group flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-blue/30 transition duration-300 hover:shadow-lg"
                                data-aos="zoom-in"
                                data-aos-delay={index * 120}
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="h-20 object-contain mb-3 grayscale group-hover:grayscale-0 transition duration-300"
                                />
                                <p className="text-sm font-medium text-blue group-hover:text-gold transition">
                                    {company.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default AssociatedCompanies;