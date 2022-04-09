import React from "react";

export function Footer() {
  return (
    <div className="text-center copy-right">
      &copy; all rights reserved-{new Date().getFullYear()}
    </div>
  );
}
