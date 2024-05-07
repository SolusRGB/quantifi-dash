import Heatmap from "@/components/trading-view/charts/Heatmap";

import TradingViewWidget from "@/components/trading-view/charts/TradingViewWidget";
import { IndexLayout } from "@/layout/Layout";
import React from "react";

/**
 * This is the page that displays the trading charts.
 * It includes two widgets: TradingViewWidget and Heatmap.
 * @returns {JSX.Element} - The trading charts page.
 */

export default function charts() {
  return (
    <IndexLayout>
      <div className="flex h-screen flex-col">
        {/* Each widget takes up half of the container's height */}
        <div className="flex-1">
          <TradingViewWidget />
        </div>
        <div className="flex-1">
          <Heatmap />
        </div>
      </div>
      q
    </IndexLayout>
  );
}
