"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial } from "@/types";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Testimonials = ({ data }: { data: Testimonial }) => {
  const swiperRef = useRef<Swiper | null>(null);
  const testimonial = data;

  useEffect(() => {
    // Initialize Swiper
    swiperRef.current = new Swiper(".review-slider", {
      modules: [Autoplay, Pagination, Navigation],
      spaceBetween: 24,
      loop: true,
      centeredSlides: true,
      allowTouchMove: false,
      navigation: {
        prevEl: ".custom-swiper-button-prev",
        nextEl: ".custom-swiper-button-next",
      },
      slidesPerView: 1,
      on: {
        slideChange: function (swiper) {
          updateReviewBackground(swiper.realIndex);
        },
      },
    });

    // Clean up swiper on unmount
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  // Function to update review background
  const updateReviewBackground = (activeIndex: number) => {
    document.querySelectorAll(".review-image-wrapper").forEach((el) => {
      el.classList.remove("active");
      el.classList.remove("max-md:block");
      el.classList.add("max-md:hidden");
    });

    const activeImage = document.querySelector(
      `.review-image-wrapper[data-index="${activeIndex}"]`,
    );

    if (activeImage) {
      activeImage.classList.add("active");
      activeImage.classList.remove("max-md:hidden");
      activeImage.classList.add("max-md:block");
    }
  };

  return (
    <>
      {testimonial.enable && (
        <section className="section-sm">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start max-lg:gap-10">
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start gap-2.5">
                {testimonial.review.map((review, index: number) => (
                  <div
                    key={index}
                    className={`review-image-wrapper relative transition-all duration-500 ease-in-out ${index === 0 ? "active" : ""
                      }`}
                    data-index={index}
                    data-aos="fade-up-sm"
                    data-aos-delay={index * 50}
                  >
                    <ImageFallback
                      src={review.image}
                      alt={`reviewer ${index + 1}`}
                      width={120}
                      height={120}
                      className="avatar relative mb-2 rounded-full opacity-60 scale-90 transform transition-all duration-500 ease-in-out object-cover aspect-square"
                    />

                    <div className="quote absolute top-[45%] opacity-0 right-0 transform transition-all duration-500 ease-in-out z-20 bg-secondary p-2 rounded-full">
                      <DynamicIcon
                        icon="FaQuoteRight"
                        className="text-primary "
                      />
                    </div>

                    <p
                      dangerouslySetInnerHTML={markdownify(review.name)}
                      className="font-semibold opacity-0 transform transition-all duration-500 ease-in-out"
                    />
                    <p
                      dangerouslySetInnerHTML={markdownify(review.about)}
                      className="text-base-sm opacity-0 transform transition-all duration-500 ease-in-out"
                    />
                  </div>
                ))}
              </div>
              <div
                className="w-full lg:w-1/2 swiper review-slider"
                data-aos="fade-left-sm"
              >
                <div className="swiper-wrapper mb-8">
                  {testimonial.review.map((review, index: number) => (
                    <div
                      className="swiper-slide"
                      data-index={index}
                      key={index}
                    >
                      <p
                        dangerouslySetInnerHTML={markdownify(review.says)}
                        className="text-lg text-text/80 max-lg:text-center before:content-['“'] after:content-['”'] leading-[30px] [&>br]:block!"
                      />
                    </div>
                  ))}
                </div>
                {/* Custom arrow buttons */}
                <div className="flex max-lg:justify-center items-center gap-2.5">
                  <div
                    className="custom-swiper-button-prev bg-body hover:bg-primary hover:text-body transition-colors! duration-500 ease-in-out cursor-pointer w-fit p-4 rounded-full border border-border"
                    data-aos="fade-right-sm"
                  >
                    <DynamicIcon icon="FaArrowLeftLong" />
                  </div>
                  <div
                    className="custom-swiper-button-next bg-body hover:bg-primary hover:text-body transition-colors! duration-500 ease-in-out cursor-pointer w-fit p-4 rounded-full border border-border"
                    data-aos="fade-left-sm"
                  >
                    <DynamicIcon icon="FaArrowRightLong" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
