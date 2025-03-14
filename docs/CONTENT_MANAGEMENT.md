# Content Management Guide

This guide provides step-by-step instructions for updating various sections of your portfolio website.

## Table of Contents
- [About Section](#about-section)
- [Experience Section](#experience-section)
- [Projects Section](#projects-section)
- [Contact Information](#contact-information)
- [Best Practices](#best-practices)

## About Section

The About section content is located in `src/app/about/page.tsx`.

### How to Update:
1. Navigate to `src/app/about/page.tsx`
2. Locate the text content within the JSX
3. Update the text while maintaining the existing styling classes
4. Save the file and the changes will be automatically reflected

Example:
```tsx
<p className="text-text-primary mb-4">
  Your new about text goes here...
</p>
```

## Experience Section

Experience data is stored in `src/data/experience.ts`.

### How to Update:
1. Open `src/data/experience.ts`
2. Each experience is an object in the array with the following structure:
```typescript
{
  company: "Company Name",
  position: "Your Role",
  duration: "Start Date - End Date",
  description: [
    "Bullet point 1",
    "Bullet point 2",
    // Add more bullet points as needed
  ],
  technologies: ["Tech1", "Tech2", "Tech3"]
}
```
3. To add a new experience:
   - Copy an existing experience object
   - Update all fields with new information
   - Place it at the beginning of the array for most recent experiences
4. Save the file and the changes will be automatically reflected

## Projects Section

Projects are managed through `src/data/projects.ts`.

### How to Add a New Project:
1. Open `src/data/projects.ts`
2. Add a new project object with the following structure:
```typescript
{
  id: "unique-project-id",
  title: "Project Title",
  description: "Brief project description",
  image: "/images/projects/your-image.webp",
  technologies: ["Tech1", "Tech2"],
  github: "https://github.com/your-username/project",
  live: "https://project-demo-url.com",  // Optional
  featured: true  // Set to true for featured projects
}
```

### Adding Project Images:
1. Prepare your project image:
   - Recommended size: 1200x630px
   - Format: .webp (preferred) or .png
   - Optimize for web
2. Place the image in `public/images/projects/`
3. Reference it in the project data using the path: `/images/projects/filename.webp`

## Contact Information

Contact information is stored in `src/data/contact.ts`.

### How to Update:
1. Open `src/data/contact.ts`
2. Update the relevant fields:
```typescript
export const contactInfo = {
  email: "your@email.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile"
};
```

## Best Practices

1. **Image Optimization**:
   - Always compress images before adding them
   - Use .webp format when possible
   - Maintain consistent aspect ratios

2. **Content Guidelines**:
   - Keep project descriptions concise (2-3 sentences)
   - Use bullet points for experience descriptions
   - Maintain professional tone throughout
   - Update featured projects regularly

3. **Testing Changes**:
   - Always test locally before pushing:
     ```bash
     npm run dev
     ```
   - Check mobile responsiveness
   - Verify all links work correctly

4. **Version Control**:
   - Create a new branch for content updates:
     ```bash
     git checkout -b content/update-[section]
     ```
   - Commit changes with descriptive messages
   - Push and create a PR for review

## Need Help?

If you encounter any issues or need assistance:
1. Check the error messages in your terminal
2. Review the relevant section in this guide
3. Consult the project's technical documentation
4. Reach out to your development team

Remember to always backup your content before making significant changes!
