import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { SyllabusPageContent } from "@/components/site/syllabus-page-content";

export default function SyllabusPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <SyllabusPageContent />
      </main>
      <SiteFooter />
    </div>
  );
}
