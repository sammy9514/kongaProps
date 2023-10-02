import React, { InputHTMLAttributes } from "react";
import BaseInput from ".";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}
export default function EmailInput({ placeholder }: InputProps) {
  return <BaseInput type="email" placeholder={placeholder} />;
}
