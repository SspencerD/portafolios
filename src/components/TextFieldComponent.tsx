import React from "react";


interface TextFieldComponentProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "outlined";
  shape?: "rounded" | "square";
  type?: "text" | "number" | "email" | "password" | "textarea";
  error?: boolean;
  helperText?: string;
}

const TextFieldComponent = (
  props: TextFieldComponentProps
): React.ReactElement => {
  const {
    label,
    value,
    onChange,
    placeholder,
    disabled,
    className,
    variant = "default",
    shape = "rounded",
    type = "text",
    error,
    helperText,
  } = props;

  const variantTextField = {
    default: "font-poppins-semibold text-[10px] text-left text-black",
    outlined:
      "text-primary font-poppins-semibold text-[10px] text-left text-black",
  };
  const shapeTextField = {
    rounded: `rounded-full bg-white ${
      error ? "border-[1px] border-red-500" : "border-[1px] border-secondary"
    }`,
    square: `rounded  bg-white ${
      error ? "border-[1px] border-red-500" : "border-[1px] border-secondary"
    }`,
  };



  return (
    <div className={`${variantTextField[variant]} ${className ?? ""}`}>
      <p
        className={`${
          error ? "text-red-500" : "text-secondary"
        } font-poppins-semibold text-[16px] text-left`}
      >
        {label}
      </p>
      <input
        disabled={disabled}
        className={`${shapeTextField[shape]} flex justify-start items-start py-2 pl-2 font-poppins-regular font-[12px]`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && (
        <span className="text-red-500 font-poppins-bold text-[12px]">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TextFieldComponent;
