"use client";

import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
                                          href,
                                          children,
                                          className,
                                          size = "lg",
                                          isLoading = false,
                                          fullWidth = false,
                                          disabled,
                                          ...rest
                                        }) => {
  const classes = cn(
    "bg-secondary lg:h-[52px] text-nowrap inline-flex transform cursor-pointer justify-center items-center gap-3 text-center rounded-md leading-[130%] text-black capitalize transition duration-300 button-shadow",
    {
      "px-3 py-1.5 text-sm": size === "sm",
      "px-4 py-2 text-base": size === "md",
      "px-4 py-3 text-sm md:text-md lg:text-xl": size === "lg",
      "w-full": fullWidth,
    },
    className
  );

  const content = (
    <>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
        color="rgb(0, 0, 0)"
        className="h-[17px] w-[17px]"
      >
        <g color="rgb(0, 0, 0)" height="regular">
          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
        </g>
      </svg>
    </>
  );

  // If `href` is provided, render link instead of button
  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    } else {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }
  }

  // Default button
  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...rest}
    >
      {content}
    </button>
  );
};
