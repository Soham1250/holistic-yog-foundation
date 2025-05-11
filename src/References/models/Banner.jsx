import React from "react";

export default function BannerModel() {
  return (
    <pre>
{`interface Banner {
  id: string;
  image?: string;
  link?: string;
  isActive: boolean;
}`}
    </pre>
  );
}
