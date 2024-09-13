import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  otherClasses
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`inline-flex h-12 md:w-60 md:mt-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(95deg,#000103,15%,#1e2631,85%,#000103)] bg-[length:200%_100%] px-7 font-medium text-slate-400 transition-colors gap-2 ${otherClasses}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default MagicButton;
