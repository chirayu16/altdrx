Tech Stack
Next.js: React framework for server-side rendering and static site generation.

Tailwind CSS: Utility-first CSS framework for rapid, responsive styling.

React: Component-based UI development.

Vercel: Recommended deployment platform (optional).

Getting Started
Follow these steps to set up and run the project locally.
Prerequisites
Node.js: Version 16.x or higher.

npm or yarn: Package manager of your choice.

Installation
Clone the Repository:
bash

git clone https://github.com/chirayu16/altdrx.git
cd altdrx

Install Dependencies:
Using npm:
bash

npm install

Or using yarn:
bash

yarn install

Run the Development Server:
bash

npm run dev

Or:
bash

yarn dev

Open http://localhost:3000 in your browser to see the app in action.

Build for Production
To create an optimized build:
bash

npm run build
npm start

Or:
bash

yarn build
yarn start

Project Structure

altdrx/
├── public/               # Static assets (e.g., favicon.ico, logos)
├── components/           # Reusable React components (e.g., NavButton.js)
├── pages/                # Next.js pages (e.g., index.js)
├── styles/               # Global styles (if any)
├── package.json          # Dependencies and scripts
└── README.md             # This file

Customization
Favicon: Replace /public/favicon.ico with your custom favicon.

Social Links: Update the socialLogos array in your navigation component (e.g., Nav.js) with desired URLs.

Styling: Modify Tailwind classes in components or update tailwind.config.js for custom themes

