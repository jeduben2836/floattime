import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
