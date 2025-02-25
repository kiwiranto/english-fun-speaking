import React from 'react';
import "./styles.scss";

type PropsType = {
  children: React.ReactNode; // React's built-in type for all possible children
};

export default function CCardQuestion({ children }: PropsType) {
  return (
    <div className="card-question">
      {children}
    </div>
  );
}
