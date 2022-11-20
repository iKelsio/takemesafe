import { StrictMode } from "react";
import { LayoutProps } from "./layout.types";

export function Layout({ children }: LayoutProps) {
  return (
    <StrictMode>
      <>{children}</>
    </StrictMode>
  );
}
