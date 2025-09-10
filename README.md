# Questal PH Project Documentation

This document provides a comprehensive overview of the Questal PH project, including its architecture, technologies, and setup instructions.

## 1. Project Overview

Questal PH is a full-stack web application built with Next.js and Supabase. It features user authentication, protected routes, and a clear separation of concerns between public-facing pages, user-specific dashboards, and backend API logic.

## 2. Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 15 (with Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Backend & Auth:** [Supabase](https://supabase.io/) (using `@supabase/ssr` for server-side rendering)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 4 with the [DaisyUI](https://daisyui.com/) component library
- **Linting:** [ESLint](https://eslint.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 3. Project Structure

The project uses the Next.js App Router, with a directory structure organized by route groups.

```
/
├── app/
│   ├── (api)/                # Backend API routes
│   │   └── api/
│   ├── (auth)/               # Authentication-related pages (login, terms)
│   ├── (guest)/              # Publicly accessible pages (about, community)
│   ├── (root)/               # The main landing page
│   └── (user)/               # Pages for authenticated users (dashboard, profile)
├── components/               # Reusable React components
│   └── ui/                   # UI-specific components
├── public/                   # Static assets (images, fonts)
├── utils/
│   └── supabase/             # Supabase client/server configuration
├── middleware.ts             # Handles request middleware for authentication
├── package.json              # Project dependencies and scripts
└── next.config.ts            # Next.js configuration
```

## 4. Backend

The backend is powered by a combination of Next.js API Routes and Supabase.

### 4.1. Supabase Integration

- **Connection:** Supabase is integrated using the `@supabase/ssr` library, which allows for seamless authentication and data access across Server Components, Client Components, and API Routes.
- **Configuration:**
    - `utils/supabase/client.ts`: Configures the Supabase client for browser-side execution.
    - `utils/supabase/server.ts`: Configures the Supabase client for server-side execution (in API routes and Server Components).
- **Environment Variables:** The project requires Supabase URL and Anon Key to be set in a `.env.local` file.

### 4.2. Authentication

- **Flow:** Authentication is managed by the `middleware.ts` file.
- **Logic:**
    1. The middleware intercepts incoming requests.
    2. It uses a server-side Supabase client to check if a user is authenticated.
    3. **Protected Routes:** If an unauthenticated user tries to access a protected route (e.g., `/dashboard`, `/profile`), they are redirected to `/login`.
    4. **Public Routes:** If an authenticated user tries to access an auth-specific route (e.g., `/login`), they are redirected to their `/dashboard`.
- **Callback:** The `/app/(api)/auth/callback/route.ts` handles the callback from Supabase after a successful login.

### 4.3. API Endpoints

- `/api/validate-email`: An example API route for validating email addresses.

## 5. Frontend

The frontend is built with React and TypeScript, following the Next.js App Router paradigm.

- **Routing:** Pages and layouts are defined within the `app` directory. The use of route groups like `(guest)` and `(user)` helps organize files without affecting the URL structure.
- **Components:** Reusable components are located in the `components` directory, promoting a modular and maintainable codebase.
- **Styling:** The project uses Tailwind CSS for utility-first styling, enhanced by the DaisyUI component library for pre-built UI elements.

## 6. Getting Started

Follow these steps to set up and run the project locally.

### 6.1. Prerequisites

- [Node.js](https://nodejs.org/en) (v20 or later recommended)
- [pnpm](https://pnpm.io/installation)

### 6.2. Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd questal_ph
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

### 6.3. Environment Variables

1.  Create a `.env.local` file in the root of the project.
2.  Add your Supabase project credentials:
    ```
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

### 6.4. Running the Development Server

Execute the following command to start the development server with Turbopack:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### 6.5. Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Creates a production build of the application.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs the ESLint linter to check for code quality issues.
