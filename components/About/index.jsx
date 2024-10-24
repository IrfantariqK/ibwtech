import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default function About() {
  const reviews = [
    {
      quote:
        "Pleasant and efficient experience. The end product was produced taking account of my suggestions, so it felt like a collaborative and intuitive process. The more detail you can provide the better.",
      name: "Mr Doodle",
      role: "Client",
    },
    {
      quote:
        "Amazing experience! The team was so helpful and responsive. They went above and beyond to ensure everything was perfect.",
      name: "Jane Doe",
      role: "Project Manager",
    },
    {
      quote:
        "Excellent service and attention to detail. They truly care about their customers and ensure that every expectation is exceeded.",
      name: "John Smith",
      role: "Entrepreneur",
    },
    {
      quote:
        "I highly recommend them! Their attention to detail and customer service is unparalleled. I am extremely satisfied with the results.",
      name: "Sarah Lee",
      role: "Small Business Owner",
    },
    {
      quote:
        "They exceeded my expectations! The quality of work and their dedication to meeting deadlines were truly impressive.",
      name: "Michael Johnson",
      role: "CEO",
    },
    {
      quote:
        "The team was very professional and easy to work with. I’m extremely happy with the end product and the entire experience.",
      name: "Emily Brown",
      role: "Designer",
    },
  ];

  return (
    <section id="about" className="bg-purple-100 py-80">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-5xl font-bold text-center text-purple-800">
          What Clients Say About Us
        </h2>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 md:w-1/2 md:mb-0">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              className="w-full"
            >
              {/* Review Cards */}
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <p className="mb-6 italic text-gray-600">
                      “{review.quote}”
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold">{review.name}</h4>
                        {review.role && (
                          <p className="text-sm text-gray-500">{review.role}</p>
                        )}
                      </div>
                      <div className="text-yellow-500">★★★★★</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="md:w-1/2 md:pl-8">
            <p className="mb-4 text-gray-700">
              We are very fortunate to have built excellent partnerships with
              many of our customers. And we've built more than just working
              relationships with them; We made true friendships. That's what
              they say about us.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 text-white transition-all duration-200 ease-in-out bg-purple-600 rounded-full hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
            >
              Hire Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
