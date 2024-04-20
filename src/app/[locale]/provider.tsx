"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const AppProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextUIProvider>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
};

export default AppProvider;
