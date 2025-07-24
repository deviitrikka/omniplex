"use client"; // This directive marks the entire file as a Client Component

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

export function LayoutManager({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  
  const noSidebarPaths = ["/success","/cancel"]; 

  
  const shouldHideSidebar = noSidebarPaths.includes(pathname);

  return shouldHideSidebar ? (
    
    <>{children}</>
  ) : (
    
    <>
      <Sidebar />
      {children}
    </>
  );
}