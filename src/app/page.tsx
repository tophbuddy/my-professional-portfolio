import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import SkillsSection from '@/components/home/SkillsSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import QuickNav from '@/components/home/QuickNav';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative scroll-smooth overflow-x-hidden">
      <div className="fixed right-8 2xl:right-12 top-1/2 -translate-y-1/2 z-50">
        <QuickNav />
      </div>
      <div className="w-full space-y-16 md:space-y-24 lg:space-y-32">
        <section 
          id="hero" 
          className="min-h-[calc(100vh-80px)] flex items-center justify-center w-full pt-20 md:pt-32"
        >
          <HeroSection />
        </section>
        <section 
          id="skills" 
          className="min-h-screen flex items-center justify-center w-full py-16 md:py-24 lg:py-32"
        >
          <SkillsSection />
        </section>
        <section 
          id="projects" 
          className="min-h-screen flex items-center justify-center w-full pb-16 md:pb-24 lg:pb-32"
        >
          <FeaturedProjects />
        </section>
      </div>
    </main>
  );
}
