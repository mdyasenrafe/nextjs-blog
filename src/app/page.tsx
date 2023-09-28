import React from "react";
import "./styles/responsive.css";
import BlogList from "./components/BlogList";
import BlogBanner from "./components/BlogBanner";

export default function page() {
  return (
    <main>
      <BlogBanner />
      <BlogList />
    </main>
  );
}
