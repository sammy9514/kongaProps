import React, { InputHTMLAttributes } from "react";
import BaseInput from ".";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}
export default function TextInput({ placeholder }: InputProps) {
  return <BaseInput placeholder={placeholder} type="text" />;
}
