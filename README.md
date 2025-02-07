# Kamehameha Highway Long-Range Coastal Resilience Plan

## Client Information

- **Client Name**: [Hawaii Department of Transportation]
- **PM Name**: [Laura Adleman]
- **Project Number**: 60735321
- **Task**: 2.4

## Project Overview

This project is a web application developed for [HDOT]. The application is designed to provide users with information about the Kamehameha Highway Long-Range Coastal Resilience Plan. It includes features such as a photo gallery, project updates, document library, and a comments submission form.

## Architecture and Technology Used

- **Frontend**:

  - [Next.js](https://nextjs.org/): A React framework for building server-side rendered and static web applications.
  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
  - [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.

- **Backend**:

  - [Sanity.io](https://www.sanity.io/): A headless CMS for managing content.

- **Deployment**:
  - [Netlify](https://vercel.com/): A platform for frontend frameworks and static sites, built to integrate with your headless CMS.

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later) or yarn (version 1.x or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/hawaii-next.git
   cd hawaii-next
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

# or

```bash
yarn install
```

2. Create a `.env.local` file in the root directory of the project and add the following environment variables:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
NEXT_PUBLIC_SANITY_API_VERSION=2021-03-25
```

3. Start the development server:
   ```bash
   npm run dev
   ```
   # or
   ```bash
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Project Structure as of 2025-02-07

hawaii-next/
├── app/ # React components
│ ├── admin/ # Route to Sanity Studio
│ ├── document-library/
│ ├── faq/
│ ├── project-information/
│ ├── submit-comments/
│── page.tsx # Main page component
│── layout.tsx # Main layout component
│── globals.css
├── components/ # React components
│ ├── Footer/ # Footer component
│ ├── Header/ # Header component
│ ├── Section/ # Section component
│ └── ... # Other components
├── public/ # Static assets
├── sanity/ # Sanity schemas and configuration
├── types/ # TypeScript types
├── utils/ # Utility functions
├── .env # Environment variables
├── next.config.js # Next.js configuration
├── tailwind.config.js # Tailwind configuration
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
