# Saniyat Mahmud's Portfolio

This is a personal portfolio website built with React and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1.  Clone the repository or copy the files.
2.  Open the terminal in the project directory.
3.  Install dependencies:

    ```bash
    npm install
    ```

### Running Locally

To start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment to GitHub Pages

1.  Open `package.json` and update the `"homepage"` field:

    ```json
    "homepage": "https://<your-github-username>.github.io/<repository-name>"
    ```

2.  Initialize a git repository if you haven't already:

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

3.  Create a repository on GitHub and push your code:

    ```bash
    git remote add origin https://github.com/<your-github-username>/<repository-name>.git
    git push -u origin master
    ```

4.  Deploy the app:

    ```bash
    npm run deploy
    ```

5.  Go to your GitHub repository settings -> Pages, and ensure the source is set to the `gh-pages` branch.

## Technologies Used

- React
- Tailwind CSS
- React Scroll
- Framer Motion
- React Icons
