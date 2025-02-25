import React from 'react';
import "./styles.scss";

type CButtonProps = {
  text: string; // Text to be displayed on the button
  disabled: boolean;
  onClick?: () => void; // Optional onClick handler for the button
};

export default function CButton({ text, disabled, onClick }: CButtonProps) {
  return (
    <button
      className='btn-general'
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
