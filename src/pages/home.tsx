import { HomeTable } from "@/components/tables/home/HomeTable";
import { FeaturedSection } from "../components/cards/home/FeaturedSection";
import HighlightedProject from "../components/cards/home/HighlightedProject";

import { IndexLayout } from "../layout/Layout";
import News from "@/components/trading-view/charts/news";

export default function Dashboard() {
  return (
    <>
      <HighlightedProject />
      <FeaturedSection />
      <News />
      <HomeTable />
    </>
  );
}

Dashboard.PageLayout = IndexLayout;
