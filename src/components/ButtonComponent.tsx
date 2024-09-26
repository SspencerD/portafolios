import React from "react";

interface ButtonComponentProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  size?: "tiny" | "small" | "medium" | "large" | "huge";
  device?: "desktop" | "mobile";
  loading?: boolean;
  variant?: "primary" | "secondary" | "outlined" | "dashed";
  shape?: "rounded" | "square" | "round";
}

const ButtonComponent = (props: ButtonComponentProps): React.ReactElement => {
  const {
    title,
    onClick,
    disabled = false,
    className = "",
    icon,
    shape = "rounded",
    size = "medium",
    device = "desktop",
    loading = false,
    variant = "primary",
  } = props;

  const variantButtons = {
    primary: "bg-primary hover:bg-secondary text-white font-poppins-medium justify-start items-center",
    secondary: "bg-secondary hover:bg-primary text-white font-poppins-medium justify-start items-center",
    outlined: "border border-primary text-secondary hover:text-primary hover:border-secondary font-poppins-medium justify-start items-center",
    dashed: "border-dashed border-2 text-secondary hover:text-lightColorIn border-lightColorOut hover:border-lightColorIn font-poppins-medium justify-start items-center",
  };

  const sizingButtons = {
    tiny: "px-3 py-1",
    small: "px-4 py-[4px]",
    medium: "px-7 py-3",
    large: "px-9 py-4",
    huge: "px-11 py-5",
  };

  const deviceButtons = {
    desktop: "hidden sm:flex",
    mobile: "flex sm:hidden",
  };

  const shapingButtons = {
    rounded: "rounded",
    square: "rounded-none",
    round: "rounded-full",
  };

  const disabledButtons = "opacity-50 cursor-not-allowed";

  const buttonClasses = [
    variantButtons[variant],
    sizingButtons[size],
    deviceButtons[device],
    shapingButtons[shape],
    className,
    disabled ? disabledButtons : "",
  ].join(" ");

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && (
        <div className="spinner-border text-white mr-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {!loading && icon && <span className="mr-2">{icon}</span>}
      <span>{title}</span>
    </button>
  );
};

export default ButtonComponent;
