import Link from 'next/link';

const navigation = [
  {
    name: 'Robotics',
    items: [
      { name: 'Exo-H3', href: '/docs/robotics/h3' },
      { name: 'SOEM Bridge', href: '/docs/robotics/soem' },
    ],
  },
  {
    name: 'Motion Analysis',
    items: [
      { name: 'Xsens IMU', href: '/docs/motion-analysis/xsens' },
      { name: 'OpenSim', href: '/docs/motion-analysis/opensim' },
    ],
  },
  {
    name: 'Sensors',
    items: [
      { name: 'Delsys EMG', href: '/docs/sensors/delsys' },
      { name: 'FSR Sensors', href: '/docs/sensors/fsr' },
    ],
  },
  {
    name: 'Pipeline',
    items: [
      { name: 'AFO Robotic System', href: '/docs/pipeline/afo' },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="w-[290px] bg-sidebar border-r-[1.5px] border-line-lissi p-6 flex flex-col gap-8 h-full">
      <Link href="/" className="flex items-center gap-3.5 no-underline group">
        <div className="w-[18px] height-[18px] bg-accent-lissi rounded-full" />
        <h2 className="font-space text-[26px] font-bold tracking-[-1px] text-foreground">
          LISSI Docs
        </h2>
      </Link>

      <nav className="flex flex-col gap-8 overflow-y-auto">
        <div>
          <div className="text-[13px] uppercase tracking-[2px] opacity-60 mb-3.5">
            Navigation
          </div>
          <div className="flex flex-col gap-2.5">
            {navigation.map((group) => (
              <div key={group.name} className="flex flex-col gap-2">
                <div className="nav-item font-medium px-4.5 py-3.5 rounded-[16px] cursor-default text-[15px]">
                  {group.name}
                </div>
                <div className="ml-3 flex flex-col gap-2 border-l border-line-lissi pl-4">
                  {group.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-[14px] py-2.5 px-3.5 rounded-[12px] transition-all hover:bg-surface hover:translate-x-1 text-foreground/80 hover:text-foreground no-underline"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
