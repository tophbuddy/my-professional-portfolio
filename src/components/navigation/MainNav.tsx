'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

const MainNav = (): React.JSX.Element => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center space-x-8">
        {navItems.map((item, index) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group relative py-2 font-mono text-sm text-[#8892b0] hover:text-accent 
                       transition-colors duration-200 flex items-center"
            >
              <span className="text-accent mr-1 text-xs">0{index + 1}.</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
