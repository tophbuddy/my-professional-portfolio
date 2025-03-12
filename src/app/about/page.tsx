import React from 'react';
import ProfessionalSummary from '@/components/about/ProfessionalSummary';
import SkillsMatrix from '@/components/about/SkillsMatrix';
import ExperienceTimeline from '@/components/about/ExperienceTimeline';
import Education from '@/components/about/Education';

export const metadata = {
  title: 'About | Christopher Holzheu',
  description: 'Learn more about Christopher Holzheu\'s professional background, skills, and experience in software engineering.',
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ProfessionalSummary />
      <SkillsMatrix />
      <ExperienceTimeline />
      <Education />
    </main>
  );
}
