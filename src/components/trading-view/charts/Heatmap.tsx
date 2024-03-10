import React, { useEffect, useRef, memo, type RefObject } from "react";

function TradingViewWidget() {
  const container: RefObject<HTMLDivElement> | null = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
                {
                    "dataSource": "Crypto",
                    "blockSize": "market_cap_calc",
                    "blockColor": "Perf.W",
                    "locale": "en",
                    "symbolUrl": "",
                    "colorTheme": "dark",
                    "hasTopBar": true,
                    "isDataSetEnabled": true,
                    "isZoomEnabled": true,
                    "hasSymbolTooltip": true,
                    "width": "100%",
                    "height": "100%"
                }`;
    container?.current?.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
