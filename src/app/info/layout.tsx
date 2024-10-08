import React from "react";

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
