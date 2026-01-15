"use client";

import CustomButton from "@/components/CustomButton";
import CustomHeading from "@/components/CustomHeading";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { useEffect, useState } from "react";

interface AboutSectionProps {
  about: {
    enable: boolean;
    title: string;
    subtitle: string;
    content: string;
    schedule: { day: string; time: string }[];
    button: { enable: boolean; link: string; label: string; icon?: string };
    badge: string;
    images: string[];
    video?: { thumbnail: string; url: string };
  };
}

const AboutSection = ({ about }: AboutSectionProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isVideoOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    if (isVideoOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  return (
    <>
      {about.enable && (
        <section id="about" className="section pt-0 lg:pb-44">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 items-center">
              <div className="lg:w-[55%]">
                <div className="relative">
                  <ImageFallback
                    src={about.images[0]}
                    alt="about images"
                    width={549}
                    height={465}
                    className="rounded top-0 xl:-top-12 w-[80%]"
                    data_aos="zoom-in-sm"
                  />
                  <ImageFallback
                    src={about.images[1]}
                    alt="about images"
                    width={470}
                    height={317}
                    className="absolute rounded right-0 -bottom-20 w-[60%]"
                    data_aos="zoom-in-sm"
                    data_aos_delay="20"
                  />
                  {/* Spinning badge with video play button - Desktop */}
                  <div 
                    data-aos="zoom-in-sm" 
                    data-aos-delay="40"
                    className="hidden md:block absolute right-0 top-1/2 translate-y-[-80%] translate-x-[40%] w-[30%] cursor-pointer group"
                    onClick={() => about.video && setIsVideoOpen(true)}
                  >
                    {/* Spinning badge */}
                    <ImageFallback
                      src={about.badge}
                      alt="Olympic Athlete Training"
                      width={223}
                      height={223}
                      className="spin-animation scale-80 w-full"
                    />
                    {/* Play button in center */}
                    {about.video && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <svg
                          className="w-16 h-16 md:w-20 md:h-20 text-secondary drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 124 124"
                        >
                          <circle cx="62" cy="62" r="62" fill="currentColor" />
                          <path
                            className="text-white"
                            fill="currentColor"
                            d="M71.692 61.948 57.32 52.153c-.536-.364-1.321-.036-1.321.551v19.592c0 .587.785.915 1.32.551l14.372-9.795c.41-.28.41-.823 0-1.104"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Mobile video play button */}
                {about.video && (
                  <div 
                    className="md:hidden flex justify-center mt-8 cursor-pointer group"
                    onClick={() => setIsVideoOpen(true)}
                    data-aos="zoom-in-sm"
                  >
                    <div className="relative">
                      <ImageFallback
                        src={about.badge}
                        alt="Olympic Athlete Training"
                        width={150}
                        height={150}
                        className="spin-animation"
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <svg
                          className="w-14 h-14 text-secondary drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 124 124"
                        >
                          <circle cx="62" cy="62" r="62" fill="currentColor" />
                          <path
                            className="text-white"
                            fill="currentColor"
                            d="M71.692 61.948 57.32 52.153c-.536-.364-1.321-.036-1.321.551v19.592c0 .587.785.915 1.32.551l14.372-9.795c.41-.28.41-.823 0-1.104"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="lg:w-[33%]">
                <p
                  dangerouslySetInnerHTML={markdownify(about.subtitle)}
                  className="mb-7 text-base-sm text-primary text-center lg:text-left"
                  data-aos="fade-up-sm"
                />

                <CustomHeading
                  as="h2"
                  text={about.title}
                  className="text-h3 md:text-h2 text-balance mb-7 text-center lg:text-left"
                  dataAos="fade-up-sm"
                  dataAosDelay="50"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(about.content)}
                  className="mb-8 text-center lg:text-left"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                />

                {about.schedule.map((s: { day: string; time: string }, i: number) => (
                  <p
                    key={i}
                    className="font-medium text-base text-center lg:text-left"
                    data-aos="fade-up-sm"
                    data-aos-delay={100 + i * 50}
                  >
                    <span dangerouslySetInnerHTML={markdownify(s.day)} />
                    <span dangerouslySetInnerHTML={markdownify(s.time)} />
                  </p>
                ))}
                {about.button.enable && (
                  <div
                    className="w-full flex justify-center lg:justify-start"
                    data-aos="fade-up-sm"
                    data-aos-delay="150"
                  >
                    <CustomButton
                      link={about.button.link}
                      label={about.button.label}
                      className="mt-8"
                      variant="secondary"
                      icon={about.button.icon}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Modal */}
      {isVideoOpen && about.video && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-[90%] md:w-[80%] aspect-video max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-xl hover:text-primary transition-colors"
              onClick={() => setIsVideoOpen(false)}
            >
              ✕ Close
            </button>
            <iframe
              width="100%"
              height="100%"
              src={about.video.url}
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;
