import Sidebar from "@/components/Sidebar";
import BrowserHeader from "@/components/BrowserHeader";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // We'll use a client-side component or a trick to get the current tab name if needed, 
  // but for now let's just use a static "Documentation" or empty.
  return (
    <div className="flex h-full w-full bg-background overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <BrowserHeader activeTab="Documentation" />
        <div className="flex-1 overflow-y-auto p-12 bg-background relative">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg prose-headings:font-space prose-a:text-accent-lissi">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
