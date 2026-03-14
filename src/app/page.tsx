import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { HomePageContent } from "@/components/site/home-page-content";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HomePageContent />
      </main>
      <SiteFooter />
    </div>
  );
}
