import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
}
export default function BaseInput({ placeholder, type }: InputProps) {
  return (
    <div>
      <Input type={type} placeholder={placeholder} />;
    </div>
  );
}

const Input = styled.input`
  width: 380px;
  padding: 10px 15px;
  margin-bottom: 12px;
`;
