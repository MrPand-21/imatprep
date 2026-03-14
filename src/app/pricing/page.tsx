import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { PricingPageContent } from "@/components/site/pricing-page-content";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <main>
                <PricingPageContent />
            </main>
            <SiteFooter />
        </div>
    );
}
