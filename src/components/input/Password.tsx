import React, { InputHTMLAttributes } from "react";
import BaseInput from ".";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
}
export default function Password({ placeholder, label }: InputProps) {
  return (
    <div>
      {label}
      <BaseInput type="password" placeholder={placeholder} />;
    </div>
  );
}
