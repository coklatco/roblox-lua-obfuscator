# 📚 GitHub Setup Guide

Complete guide to setup your project on GitHub and deploy it.

## Step 1: Create GitHub Repository

### 1.1 Create New Repository
1. Go to [github.com/new](https://github.com/new)
2. Enter repository name: `roblox-lua-obfuscator`
3. Add description: `Advanced Lua script obfuscation tool for Roblox`
4. Choose visibility: **Public** (for free hosting)
5. Click "Create repository"

### 1.2 Copy Repository URL
Once created, you'll see:
```
https://github.com/yourusername/roblox-lua-obfuscator.git
```
Keep this handy!

## Step 2: Setup Locally

### 2.1 Initialize Git in Project Folder

```bash
# Navigate to your project
cd roblox-lua-obfuscator

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Roblox Lua Obfuscator"

# Add remote repository
git remote add origin https://github.com/yourusername/roblox-lua-obfuscator.git

# Rename branch to main (if on master)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 2.2 Verify Push
Visit `https://github.com/yourusername/roblox-lua-obfuscator` and refresh. You should see all your files!

## Step 3: Enable GitHub Pages

### 3.1 For Automatic Deployment (Recommended)

1. Go to repository → **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Branch: **gh-pages**
4. Folder: **/root**
5. Click Save
6. Wait 1-2 minutes for deployment

Your site will be live at:
```
https://yourusername.github.io/roblox-lua-obfuscator
```

### 3.2 Update package.json

Edit `package.json` and change:
```json
"homepage": "https://yourusername.github.io/roblox-lua-obfuscator"
```

## Step 4: Setup GitHub Actions (Auto-Deploy)

The workflow files are already created in `.github/workflows/`

### 4.1 Verify Workflows

1. Go to repository → **Actions**
2. You should see two workflows:
   - Deploy to GitHub Pages
   - Tests

### 4.2 Enable Actions

1. Go to **Settings** → **Actions** → **General**
2. Under "Permissions", select **Allow all actions**
3. Click **Save**

### 4.3 Configure Pages for Actions

1. Go to **Settings** → **Pages**
2. Under "Build and deployment":
   - Source: **GitHub Actions**
3. Click **Save**

## Step 5: First Automated Deploy

### 5.1 Push a Change

```bash
# Make a small change to test
echo "# Updated" >> README.md

# Commit and push
git add README.md
git commit -m "Test workflow"
git push
```

### 5.2 Check Actions Tab

1. Go to **Actions** tab
2. You should see your workflow running
3. Wait for it to complete (1-2 minutes)
4. Check your GitHub Pages URL

## Step 6: Configure Repository

### 6.1 Add README

- README.md is included ✅

### 6.2 Add License

- LICENSE (MIT) is included ✅

### 6.3 Add Topics

1. Go to repository main page
2. Click "Add topics" (right sidebar)
3. Add tags: `roblox`, `lua`, `obfuscator`, `security`

### 6.4 Add Description

Edit repository description in **Settings** → **General**

## Step 7: Branch Protection (Optional)

### 7.1 Protect Main Branch

1. Go to **Settings** → **Branches**
2. Click "Add rule"
3. Branch name pattern: `main`
4. Check:
   - ✅ Require pull request reviews
   - ✅ Dismiss stale pull request approvals
   - ✅ Require branches to be up to date

## Step 8: Future Updates

### Update Code

```bash
# Make changes to files
# Test locally: npm start

# Commit and push
git add .
git commit -m "Add new feature"
git push
```

### GitHub Actions Will:
1. Run tests automatically ✅
2. Build the project ✅
3. Deploy to GitHub Pages ✅
4. Update your live site ✅

## Step 9: Update GitHub Repository URL

In these files, update `yourusername` to your actual username:

1. **README.md**
   - Update all GitHub links

2. **DEPLOYMENT.md**
   - Update GitHub pages links

3. **package.json**
   - `"homepage"` field

```bash
# Find and replace
sed -i 's/yourusername/YOUR_USERNAME/g' README.md
sed -i 's/yourusername/YOUR_USERNAME/g' DEPLOYMENT.md
sed -i 's/yourusername/YOUR_USERNAME/g' package.json

# Commit
git add .
git commit -m "Update GitHub URLs"
git push
```

## Step 10: Custom Domain (Optional)

### 10.1 Add Custom Domain

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain: `obfuscator.yoursite.com`
3. Click "Save"

### 10.2 Update DNS

Add to your domain's DNS settings:
```
CNAME: yourusername.github.io
```

## Troubleshooting

### Repository not showing files?

Make sure you're on the `main` branch:
```bash
git branch
```

If not, push again:
```bash
git push -u origin main
```

### GitHub Pages not updating?

1. Check **Actions** tab for errors
2. Verify workflow is enabled
3. Check **Settings** → **Pages** configuration

### Can't push to GitHub?

```bash
# Verify remote URL
git remote -v

# Should show:
# origin  https://github.com/yourusername/roblox-lua-obfuscator.git

# If wrong, update it
git remote set-url origin https://github.com/yourusername/roblox-lua-obfuscator.git
```

### 404 on GitHub Pages?

Check that:
1. Repository is public ✅
2. Pages is enabled ✅
3. Wait 5+ minutes after first push ✅
3. Clear browser cache and try again ✅

## Check Your Deployment

Visit:
```
https://yourusername.github.io/roblox-lua-obfuscator
```

You should see the obfuscator running live! 🚀

## Share Your Project

Now you can share:
- 📍 GitHub Repo: `https://github.com/yourusername/roblox-lua-obfuscator`
- 🌐 Live App: `https://yourusername.github.io/roblox-lua-obfuscator`

---

**Congratulations! Your project is live on GitHub!** 🎉
