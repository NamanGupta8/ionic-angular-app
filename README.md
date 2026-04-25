# ionic-angular-app
# ionic start
# remove node modules, package.lock.json and run command npm install --legacy-peer-deps (inonic issue fix for serve)
# ionic serve

## 🎨 Tailwind CSS v4 Setup (Angular 20 + Ionic)

This project uses Tailwind CSS v4 with the new CSS-first configuration and PostCSS engine.

### 1. Installation
Install Tailwind v4 and the PostCSS plugin. Use the force flag to ensure compatibility with Angular's internal build tools.
```bash
npm install tailwindcss @tailwindcss/postcss postcss --force
Use code with caution.
2. PostCSS Configuration
Create a .postcssrc.json file in the root directory (where your angular.json is located) to enable the Tailwind plugin:
json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
Use code with caution.
3. Stylesheet Integration
To ensure compatibility between Sass (SCSS) and Tailwind v4, we use a separate CSS entry point.
Create src/tailwind.css and add:
css
@import "tailwindcss";

@theme {
  /* This replaces tailwind.config.js - add your custom tokens here */
  --color-brand: #3880ff; /* Usage: bg-brand */
  --spacing-13: 3.25rem;  /* Usage: p-13 */
  --font-display: "Inter", sans-serif; /* Usage: font-display */
}
Use code with caution.
At the very top of src/global.scss, import the Tailwind file:
scss
@use "./tailwind.css";

/* Existing Ionic Imports */
@import "@ionic/angular/css/core.css";
/* ... rest of your global styles */
Use code with caution.
4. Development Workflow
Restart Required: You must restart your development server after the initial setup for PostCSS to register.
Commands: Use ionic serve or npm start to run the project.
IntelliSense: Ensure the "Tailwind CSS IntelliSense" VS Code extension is updated to support v4 syntax.
