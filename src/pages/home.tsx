import HomeTable from "@/components/tables/home/HomeTable";
import { FeaturedSection } from "../components/cards/home/FeaturedSection";
import HighlightedProject from "../components/cards/home/HighlightedProject";

import { IndexLayout } from "../layout/Layout";
import News from "@/components/trading-view/charts/news";

/**
 * This is the home page for the application.
 * It is displayed when a user navigates to the root URL.
 * It includes the HighlightedProject, FeaturedSection, News, and HomeTable components.
 * This was created to get the root URL to work correctly. (index.tsx)
 * @returns {JSX.Element} - The home page.
 */

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
