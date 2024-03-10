import Link from "next/link";
import React, { useEffect, useRef } from "react";

const TopStories: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Create a ref for the container

  useEffect(() => {
    // Ensure the container div is available
    if (containerRef.current) {
      // Create the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        feedMode: "market",
        isTransparent: false,
        displayMode: "regular",
        width: "100%",
        height: "105%",
        colorTheme: "dark",
        locale: "en",
        market: "crypto",
      });

      // Create the widget's inner div
      const widgetDiv = document.createElement("div");
      widgetDiv.className = "tradingview-widget-container__widget";

      // Append the script and widget div to the container
      containerRef.current.appendChild(widgetDiv);
      containerRef.current.appendChild(script);

      // Clean up the script when the component is unmounted
      return () => {
        // Make sure to remove the appended children
        containerRef.current?.removeChild(widgetDiv);
        containerRef.current?.removeChild(script);
      };
    }
  }, []); // Empty array ensures effect is only run on mount and unmount

  return (
    <div ref={containerRef} className="tradingview-widget-container">
      <div className="tradingview-widget-copyright">
        <Link
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></Link>
      </div>
    </div>
  );
};

export default TopStories;
