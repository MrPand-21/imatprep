import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { MethodPageContent } from "@/components/site/method-page-content";

export default function MethodPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <main>
                <MethodPageContent />
            </main>
            <SiteFooter />
        </div>
    );
}
