# Holistic Yog Foundation

A modern, responsive Next.js application for a yoga foundation, featuring course listings, instructor profiles, and membership information.

## ��� Project Overview

The Holistic Yog Foundation website is built with Next.js and features a modular, component-based architecture. It offers a clean, responsive UI with blue gradients, orange call-to-action buttons, and a minimalist design approach focused on user experience.

### Key Features

- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Course Catalog**: Browsable course listings with filtering and search
- **Instructor Profiles**: Information about yoga instructors and their qualifications
- **Membership Plans**: Details about available membership options
- **Dynamic Content**: Modular sections that can be displayed conditionally
- **Optimized Images**: Lazy loading and proper sizing for performance

## ��� Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/holistic-yog-foundation.git
   cd holistic-yog-foundation
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ���️ Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── all-courses/        # All courses listing page
│   ├── course-info/[id]/   # Dynamic course detail page
│   ├── courses/            # Courses section page
│   └── layout.tsx          # Root layout with providers
├── components/             # Reusable components
│   ├── Layout.tsx          # Main layout with sidebar
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── ContentDisplay.tsx  # Conditional section renderer
│   └── sections/           # Individual content sections
│       ├── AboutUsSection.tsx
│       ├── BannerSection.tsx
│       ├── CoursesSection.tsx
│       ├── HeadingSection.tsx
│       ├── ImagesSection.tsx
│       ├── InstructorsSection.tsx
│       ├── MembershipSection.tsx
│       ├── ServicesSection.tsx
│       └── WhyUsSection.tsx
├── contexts/               # React context providers
│   └── SectionContext.tsx  # Active section state management
├── lib/                    # Utility functions and helpers
├── styles/                 # Global styles and CSS modules
└── utils/                  # Helper functions
```

## ��� Architecture

### Content Display System

The application uses a section-based architecture managed through the `SectionContext` and `ContentDisplay` component. This allows for conditional rendering of sections based on the active navigation item.

- **SectionContext**: Manages the active section state
- **ContentDisplay**: Renders sections based on the active section
- **Layout**: Handles the overall page structure with sidebar and main content area

### Key Components

#### ContentDisplay

The core component that conditionally renders sections based on the active section:

```tsx
// Function to determine if a section should be visible
const isSectionVisible = (section: SectionType): boolean => {
  // Home page shows all sections
  if (activeSection === 'home') {
    return true;
  }
  // Otherwise, only show the active section
  return section === activeSection;
};
```

#### Course Pages

- **All Courses Page**: Features search, filtering, and a responsive grid of course cards
- **Course Info Page**: Dynamic page that displays detailed information about a specific course

## ��� Design System

The UI follows specific design principles:

1. **Color Scheme**:
   - Blue gradients for backgrounds and accents
   - Orange for primary action buttons
   - Light backgrounds (white/beige) for content areas

2. **UI Elements**:
   - Rounded corners on containers and buttons
   - Blue bullet points for lists
   - Consistent spacing and alignment
   - Heroicons for iconography

3. **Typography**:
   - Clear text hierarchy with bold section titles
   - Consistent font sizes across sections

## ��� Data Flow

The application is currently using static data with placeholders for future API integration:

1. **Course Data**: Sample course information in the all-courses page
2. **Course Details**: Mock API response in the course-info page
3. **Instructor Data**: Static instructor information with qualifications

### Future API Integration

The course-info page is already structured to work with API calls:

```tsx
// This would be replaced with an actual API call in the future
const fetchCourse = async () => {
  // API call will go here
};
```

## ��� Performance Considerations

- All images use `loading="lazy"` and explicit width/height
- Next.js `<Image />` component used where appropriate
- Horizontal scrolling sections use efficient rendering

## ���️ Development Guidelines

1. **Code Style**:
   - Follow ESLint and Prettier configurations
   - Use TypeScript for type safety
   - Follow the existing component patterns

2. **Adding New Sections**:
   - Create a new component in `src/components/sections/`
   - Add it to the ContentDisplay component
   - Update the SectionType in ContentDisplay.tsx

3. **Responsive Design**:
   - Always test on mobile, tablet, and desktop viewports
   - Use Tailwind's responsive classes (sm:, md:, lg:)

4. **Images**:
   - Store in the public/images directory
   - Always include alt text, width, height, and lazy loading

## ��� Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Heroicons](https://heroicons.com/)

## ��� License

This project is licensed under the MIT License - see the LICENSE file for details.
