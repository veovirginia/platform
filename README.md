# Virginia Entrepreneurship Organization

## Overview

This repository contains the website and members-only platform for VEO, the entrepreneurship club at UVA.

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Tech Stack

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Services

- [Resend](https://resend.com)
- [Doppler](https://doppler.com)

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/) if preferred)
- [Doppler CLI](https://docs.doppler.com/docs/en/cli/install)

### Setup

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git

   ```

2. Change into the project directory:

   ```bash
   cd your-repository
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Doppler Configuration

1. Create a Doppler account if you don't have one already: [Doppler Signup](https://dashboard.doppler.com/register). Make sure you have access to the project in Doppler.

2. Install the Doppler CLI and authenticate:

   ```bash
   npm install -g doppler
   doppler login
   ```

3. Set up your doppler environment

   ```bash
   doppler setup
   ```

   > Select the `dev` environment

### Local Development

Now that everything is set up, you can run the project locally:

```bash
npm run dev
```

This command will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Database Management

On project initialization and **after any modifications to `prisma.schema`**, make sure to generate database typings:

```bash
npm run db:generate
```

To open the Prisma studio to view the database, run the command:

```bash
npm run db:studio
```

### Additional Scripts

- **npm run lint**: Run ESLint for code linting.
- **npm run build**: Build the Next.js application.
- **npm start**: Start the production server.

### Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app)
