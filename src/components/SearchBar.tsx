'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const searchIndex = [
  { name: 'Exo-H3', href: '/docs/robotics/h3', description: 'Technaid H3 Exoskeleton setup and ROS2 drivers', keywords: ['technaid', 'exo', 'robot', 'h3', 'pcan'] },
  { name: 'SOEM Bridge', href: '/docs/robotics/soem', description: 'EtherCAT SOEM driver for robotic integration', keywords: ['ethercat', 'master', 'slave', 'soem', 'bridge'] },
  { name: 'Xsens IMU', href: '/docs/motion-analysis/xsens', description: 'Xsens MTw Awinda calibration and MT Manager', keywords: ['imu', 'xsens', 'motion', 'calibration', 'awinda'] },
  { name: 'OpenSim', href: '/docs/motion-analysis/opensim', description: 'Gait analysis and musculoskeletal modeling', keywords: ['biomechanics', 'gait', 'osim', 'scaling', 'inverse kinematics'] },
  { name: 'Delsys EMG', href: '/docs/sensors/delsys', description: 'Trigno Wireless EMG integration and ROS2 bridge', keywords: ['emg', 'muscle', 'delsys', 'trigno', 'sensing'] },
  { name: 'FSR Sensors', href: '/docs/sensors/fsr', description: 'Tekscan pressure sensing and MATLAB claims', keywords: ['pressure', 'fsr', 'tekscan', 'foot', 'contact'] },
  { name: 'AFO Robotic System', href: '/docs/pipeline/afo', description: 'Active Ankle Foot Orthosis simulation and control', keywords: ['ankle', 'afo', 'orthosis', 'control', 'simulation'] },
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof searchIndex>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 1) {
      const filtered = searchIndex.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(k => k.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (href: string) => {
    router.push(href);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="flex-1 relative" ref={searchRef}>
      <input
        className="w-full bg-search rounded-[40px] px-6 py-3.5 text-[15px] border-none outline-none text-foreground placeholder:text-foreground/50 transition-all focus:ring-2 focus:ring-accent-lissi/20"
        placeholder="Search documentation (H3, Xsens, AFO...)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query.length > 1 && setIsOpen(true)}
      />

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-sidebar border border-line-lissi rounded-[20px] shadow-2xl z-50 max-h-[400px] overflow-y-auto p-3">
          {results.map((result) => (
            <button
              key={result.href}
              onClick={() => handleSelect(result.href)}
              className="w-full text-left p-4 rounded-[14px] hover:bg-surface transition-colors group"
            >
              <div className="font-semibold font-space text-[16px] text-accent-lissi group-hover:text-primary-lissi">
                {result.name}
              </div>
              <div className="text-[13px] opacity-70 mt-1 line-clamp-1">
                {result.description}
              </div>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.length > 1 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-sidebar border border-line-lissi rounded-[20px] shadow-2xl z-50 p-6 text-center text-foreground/60 italic">
          No results found for &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
