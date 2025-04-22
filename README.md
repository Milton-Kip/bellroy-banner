# Bellroy Notification Banner Clone

This project recreates the notification banner from Bellroy's website as an Elm component integrated into an Astro build.

## Features

- Responsive notification banner component built with Elm
- Integration with Astro for static site generation
- API endpoint for fetching banner content
- Clean, maintainable CSS with BEM methodology
- Close button functionality

## Project Structure

- `src/components/NotificationBanner.elm` - The Elm component
- `src/components/NotificationBanner.astro` - Astro wrapper for the Elm component
- `src/styles/notification-banner.css` - Styles for the banner
- `src/lib/elm-loader.js` - Helper for loading Elm components
- `src/pages/api/banner-content.js` - API endpoint for banner content

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to `http://localhost:3000`

## Deploying to GitHub Pages

1. Build the project: `npm run build`
2. Deploy using GitHub Actions (see `.github/workflows/deploy.yml`)

## Technologies Used

- Elm 0.19.1
- Astro
- CSS (BEM methodology)
