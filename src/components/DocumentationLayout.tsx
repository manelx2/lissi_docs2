import Sidebar from './Sidebar';
import BrowserHeader from './BrowserHeader';

export default function DocumentationLayout({
  children,
  activeTab,
}: {
  children: React.ReactNode;
  activeTab: string;
}) {
  return (
    <div className="flex h-full w-full bg-background overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <BrowserHeader activeTab={activeTab} />
        <div className="flex-1 overflow-y-auto p-12 bg-background relative">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg prose-headings:font-space prose-a:text-accent-lissi">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
