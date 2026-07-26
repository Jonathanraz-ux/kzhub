import React from "react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <main className="flex-1">{children}</main>
    </div>
  );
};
