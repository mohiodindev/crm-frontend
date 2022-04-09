import React from "react";
import { Footer } from "./Partials/footer";
import { Header } from "./Partials/header";

export function DefaultLayout({ children }) {
  return (
    <div className="defualt-Layout">
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
