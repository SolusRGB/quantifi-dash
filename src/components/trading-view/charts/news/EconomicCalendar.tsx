import React, { useEffect, useRef } from "react";

const EconomicCalendar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null); // Create a ref for the container

  useEffect(() => {
    if (containerRef.current) {
      // Create the script element
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "dark",
        isTransparent: false,
        width: "510",
        height: "600",
        locale: "en",
        importanceFilter: "0,1",
        countryFilter: "us,eu,gb,cn",
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

  return <div ref={containerRef} id="tradingview-widget-container" />;
};

export default EconomicCalendar;
