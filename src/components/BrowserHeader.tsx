import SearchBar from './SearchBar';

export default function BrowserHeader({ activeTab = 'Home' }: { activeTab?: string }) {
  return (
    <header className="h-[90px] bg-sidebar border-b-[1.5px] border-line-lissi flex items-center gap-[18px] px-[30px] shrink-0">
      <div className="flex gap-[10px] items-center">
        <div className="w-[15px] h-[15px] rounded-full bg-accent-lissi opacity-85" />
        <div className="w-[15px] h-[15px] rounded-full bg-accent-lissi opacity-85" />
        <div className="w-[15px] h-[15px] rounded-full bg-accent-lissi opacity-85" />
      </div>

      <div className="bg-surface px-[22px] py-[14px] rounded-t-[18px] border-[1px] border-line-lissi font-semibold font-space mt-[31px]">
        {activeTab.toLowerCase()}
      </div>

      <SearchBar />
    </header>
  );
}
