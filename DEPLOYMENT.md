# 🚀 Deployment Guide

This guide explains how to deploy the Roblox Lua Obfuscator to various platforms.

## Prerequisites

- Node.js 16+ installed
- npm or yarn
- GitHub account
- Git installed locally

## 1. Vercel (Recommended - Easiest)

### Automatic Deployment

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will auto-detect React project
6. Click "Deploy"

Your app will be live at `https://your-project.vercel.app`

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## 2. GitHub Pages

### Setup

1. Edit `package.json` and set `homepage`:
```json
{
  "homepage": "https://yourusername.github.io/roblox-lua-obfuscator"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Deploy

```bash
# Build and deploy
npm run deploy

# Visit: https://yourusername.github.io/roblox-lua-obfuscator
```

## 3. Netlify

### Via Dashboard

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select GitHub and your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

## 4. Docker Deployment

### Create Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Build & Run

```bash
# Build Docker image
docker build -t roblox-obfuscator .

# Run container
docker run -p 3000:3000 roblox-obfuscator

# Visit: http://localhost:3000
```

## 5. Traditional Server (Node.js)

### Using PM2

```bash
# Install PM2
npm install -g pm2

# Build
npm run build

# Create ecosystem.config.js
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'roblox-obfuscator',
    script: 'npx',
    args: 'serve -s dist -l 3000',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
EOF

# Start
pm2 start ecosystem.config.js

# Save startup
pm2 startup
pm2 save
```

### Using Express Server

Create `server.js`:
```javascript
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Run:
```bash
npm run build
node server.js
```

## 6. AWS

### S3 + CloudFront

1. **Build the app:**
```bash
npm run build
```

2. **Create S3 bucket:**
   - AWS S3 → Create bucket
   - Enable static website hosting
   - Upload contents of `dist` folder

3. **Setup CloudFront:**
   - Create distribution
   - Set S3 bucket as origin
   - Enable compression
   - Add custom domain if needed

4. **Access via CloudFront domain**

## 7. Railway

1. Push code to GitHub
2. Visit [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub"
4. Select your repository
5. Add build command: `npm run build`
6. Start: `npx serve -s dist`

## Environment Variables

For production deployments, create a `.env.production`:

```env
VITE_APP_NAME=Roblox Lua Obfuscator
NODE_ENV=production
```

## Performance Optimization

### Before Deployment

1. **Build analysis:**
```bash
npm install -g @vitejs/plugin-visualizer
npm run build
```

2. **Minification:**
   - Already handled by Vite

3. **Assets optimization:**
   - Ensure images are optimized
   - CSS and JS are minified

### CDN Configuration

For CloudFlare:
1. Add your domain
2. Enable caching
3. Set cache level to "Cache Everything"
4. Enable Gzip compression

## Monitoring & Analytics

Add to your `public/index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>

<!-- Sentry Error Tracking -->
<script src="https://browser.sentry-cdn.com/7.0.0/bundle.min.js"></script>
<script>
  Sentry.init({ dsn: 'YOUR_DSN' });
</script>
```

## Domain Setup

### Custom Domain on Vercel

1. In Vercel Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records:
   - Add A record pointing to Vercel IP
   - Or use CNAME record

### Custom Domain on GitHub Pages

1. Add `CNAME` file to repo root:
```
yourdomain.com
```

2. Update DNS settings at your registrar

## SSL/TLS Certificate

Most platforms provide free SSL:
- Vercel: Automatic
- Netlify: Automatic
- GitHub Pages: Automatic
- AWS S3+CloudFront: Use ACM

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page on Load
- Check browser console for errors
- Verify `homepage` in package.json
- Clear browser cache

### 404 on Refresh
Add redirect rules for SPA:
- **Vercel**: Automatic
- **Netlify**: Add `_redirects` file:
```
/*    /index.html   200
```
- **GitHub Pages**: Use `.nojekyll` file

## Performance Tips

1. Enable gzip compression
2. Enable caching headers
3. Use CDN for assets
4. Monitor Core Web Vitals
5. Regular performance audits

## Rolling Back

```bash
# Vercel
vercel rollback

# GitHub Pages
git revert <commit-hash>
git push origin main

# Netlify - use dashboard to revert
```

---

**Need help?** Open an issue or check the docs of your chosen platform!
