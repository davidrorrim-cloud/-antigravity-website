# Installation Guide

Since you don't have Node.js or Git installed, you need to install them to run this project and push it to GitHub.

## 1. Install Node.js
Node.js is the engine that runs the website server.

1.  Go to the official website: [https://nodejs.org/](https://nodejs.org/)
2.  Download the **LTS (Long Term Support)** version (recommended for most users).
3.  Run the installer.
4.  **Important**: Keep all default settings. Ensure "Add to PATH" is selected (it usually is by default).

## 2. Install Git
Git is the tool used to track changes and upload code to GitHub.

1.  Go to the official website: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2.  Click on **"Click here to download"** (the standalone installer).
3.  Run the installer.
4.  There will be many options. **You can safely click "Next" through all of them** to accept the defaults.

## 3. Verify Installation
After installing both:
1.  **Restart your computer** (or at least close and reopen strictly your terminal/VS Code).
2.  Open a terminal (Command Prompt or PowerShell) and type:

```bash
node -v
git --version
```

If you see version numbers (e.g., `v20.x.x` and `git version 2.x.x`), you are ready to go!

## 4. Run the Project
Once verified, run these commands in your project folder:

```bash
npm install
npm start
```

## 5. Upload to GitHub
Once verified, run these commands to push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/davidrorrim-cloud/-antigravity-website.git
git branch -M main
git push -u origin main
```
