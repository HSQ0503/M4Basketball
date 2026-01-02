import DynamicIcon from "@/helpers/DynamicIcon";
import React from "react";

type Props = {
  link?: string;
  icon?: string;
  label: string;
  button_type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "secondary" | "light";
  type?: string;
  data_aos?: string;
  data_aos_delay?: string | number;
};

const CustomButton = ({
  link,
  icon,
  label,
  button_type,
  className,
  variant,
  data_aos,
  data_aos_delay,
  type,
}: Props) => {
  const baseClasses = `relative overflow-hidden group ${type ? type : "btn"} ${className} ${
    variant === "secondary"
      ? "btn-secondary"
      : variant === "light"
        ? "btn-light"
        : "btn-primary"
  }`;

  const hoverEffectClasses = `absolute w-full h-full -left-full -bottom-full rounded-full group-hover:-left-1 group-hover:-bottom-1 group-hover:w-[110%] group-hover:h-[110%] transition-all duration-[550ms] ${
    variant === "secondary"
      ? "bg-light"
      : variant === "light"
        ? "bg-body"
        : "bg-text"
  }`;

  return (
    <>
      {link ? (
        <a
          href={link}
          className={baseClasses}
          data-aos={data_aos}
          data-aos-delay={data_aos_delay}
        >
          {icon && (
            <DynamicIcon
              icon={icon}
              className="relative z-10 inline-block mr-2"
            />
          )}
          <span className="relative z-10">{label}</span>
          <div className={hoverEffectClasses} />
        </a>
      ) : (
        <button
          type={button_type}
          className={baseClasses}
          data-aos={data_aos}
          data-aos-delay={data_aos_delay}
        >
          {icon && (
            <DynamicIcon
              icon={icon}
              className="relative z-10 inline-block mr-2"
            />
          )}
          <span className="relative z-10">{label}</span>
          <div className={hoverEffectClasses} />
        </button>
      )}
    </>
  );
};

export default CustomButton;
