# TheGovLab Team Page

This project recreates the team page of TheGovLab website using React, TypeScript, Vite, and Bootstrap. The page dynamically fetches team member data from an API, displays it in styled cards, and includes features such as hover effects and responsive design.

## Features

- Dynamic fetching and display of team member data
- Responsive design using Bootstrap
- Styled components with hover effects
- Buttons for "MORE" and "PROJECTS" with hover effects

## Setup

### Prerequisites

- Node.js (v14 or later recommended)
- npm (v6 or later recommended)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/darshan1510/thegovlab-team-page.git
   cd thegovlab-team-page
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Development Server

Start the development server:

```sh
npm run dev
```

Open your browser and go to `http://localhost:3000` to see the team page.

### Building for Production

To build the project for production, run:

```sh
npm run build
```

The output will be in the `dist` directory.

## Project Structure

- `src/`: Contains the source code for the project
  - `components/`: Contains React components
    - `Header.tsx`: The header component
    - `TeamMemberCard.tsx`: The team member card component
    - `Footer.tsx`: The footer component
    - `TeamPage.tsx`: The main team page component
  - `styles/`: Contains CSS files for styling
  - `types/`: Contains TypeScript interfaces
- `public/`: Contains static assets
- `index.html`: The main HTML file

## API Integration

The project fetches team member data from the following API endpoint:

```
https://content.thegovlab.com/items/team?limit=-1&sort=name&fields[0]=*.*&fields[1]=picture.*&fields[2]=projects.projects_id.*
```

## Styling

- Uses Bootstrap for responsive design and styling.
- Custom CSS for additional styling and hover effects.

### Bootstrap Icons

Ensure you have Bootstrap Icons for the icons used in the buttons. Add the following in your `public/index.html` file in the head section:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css"
/>
```

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
/>
```

---
