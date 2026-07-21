/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import logoMainImg from "../assets/images/logo-1.png";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function Logo({ className = "h-12", iconOnly = false, light = false }: LogoProps) {
  // We use CSS filter techniques to blend the JPEG logo image perfectly on any background:
  // 1. If light is true (white logo on a dark background), we want the white elements of the image to be visible,
  //    and the charcoal (#565656) background to blend seamlessly. Applying a high contrast converts the
  //    charcoal background to pure black, and mix-blend-screen makes it completely transparent, while keeping
  //    the logo bright white.
  // 2. If light is false (dark logo on a light background), we invert the image (making the white elements black,
  //    and the charcoal background light grey) and then boost contrast and brightness to make the background white,
  //    and use mix-blend-multiply to make the white background completely transparent.
  const filterClass = light
    ? "contrast-[350%] mix-blend-screen"
    : "invert-[1] contrast-[350%] brightness-[1.3] mix-blend-multiply";

  if (iconOnly) {
    return (
      <div
        className={`select-none overflow-hidden aspect-square relative ${className}`}
        id="cross-fellowship-logo-container"
      >
        <img
          src={logoMainImg}
          className={`absolute w-[222.22%] h-[222.22%] max-w-none left-[-15.11%] top-[-60.89%] object-cover ${filterClass}`}
          alt="The Cross Fellowship Emblem"
          id="logo-image-icon"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center select-none overflow-hidden aspect-[2.6/1] ${className}`}
      id="cross-fellowship-logo-container"
    >
      <img
        src={logoMainImg}
        className={`w-full h-full object-cover object-center ${filterClass}`}
        alt="The Cross Fellowship Logo"
        id="logo-image-full"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
