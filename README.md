# AK Digital Studio - Official Landing Page

A pixel-perfect, responsive digital product design studio landing page and design system showcase built with React 19, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 How to Publish to GitHub Pages

The repository is already configured with relative base paths (`base: './'`), asset path helpers, `.nojekyll`, `404.html` SPA routing, and automated GitHub Actions workflows.

You can publish using **Method 1 (Recommended: GitHub Actions)** or **Method 2 (`npm run deploy`)**.

---

### Method 1: Automated Deployment via GitHub Actions (Recommended)

1. **Initialize Git and Commit**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete AK Digital Studio landing page and design system"
   ```

2. **Push to your GitHub repository**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Actions in Repository Settings**:
   - In your GitHub repository, click on **Settings** (top tab).
   - In the left sidebar, under **Code and automation**, click **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions** from the dropdown.

4. **Done!**
   - The workflow in `.github/workflows/deploy.yml` will automatically build the site and deploy it.
   - Your site will be live at:
     ```
     https://<your-username>.github.io/<your-repo-name>/
     ```

---

### Method 2: Manual Deployment via `gh-pages`

1. **Build and Deploy**:
   ```bash
   npm run deploy
   ```
   *(This executes `npm run build` followed by `gh-pages -d dist`, pushing the built static assets to the `gh-pages` branch).*

2. **Enable Pages on the `gh-pages` branch**:
   - In your GitHub repository, go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `gh-pages` and folder `/ (root)`, then click **Save**.
   - Your site will be published within 1–2 minutes.

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```
