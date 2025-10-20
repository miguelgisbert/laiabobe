import TabsFormacions from "@/app/formacions/TabsFormacions";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FormacionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 to-little-prince-sky/20">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <TabsFormacions />
      </main>
      <Footer />
    </div>
  );
}
