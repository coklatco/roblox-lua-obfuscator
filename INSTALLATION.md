# 🔧 Installation Guide

Complete step-by-step installation instructions for all systems.

## ⚙️ System Requirements

- **Node.js**: v16 or higher
- **npm**: v7 or higher (comes with Node.js)
- **Git**: Latest version (for GitHub)
- **RAM**: 512MB minimum
- **Disk Space**: 300MB for node_modules

### Check Your System

```bash
# Check Node.js version
node --version
# Should show v16.0.0 or higher

# Check npm version
npm --version
# Should show v7.0.0 or higher

# Check Git version
git --version
# Should show v2.20.0 or higher
```

## 📥 Installation Methods

### Method 1: Quick Download (Easiest)

1. Download the project folder from outputs
2. Extract the ZIP file
3. Open terminal in the folder
4. Run: `npm install && npm start`
5. Browser opens at http://localhost:3000

### Method 2: Git Clone (Recommended)

#### Step 1: Open Terminal

**Windows:**
- Press `Win + R`, type `cmd`, press Enter
- Or right-click folder → "Open PowerShell here"

**Mac:**
- Press `Cmd + Space`, type `terminal`, press Enter

**Linux:**
- Right-click desktop → Open Terminal
- Or press `Ctrl + Alt + T`

#### Step 2: Navigate to Folder

```bash
# Go to where you want the project
cd Downloads
# or
cd Desktop
# or
cd ~/Projects
```

#### Step 3: Clone Repository

```bash
git clone https://github.com/yourusername/roblox-lua-obfuscator.git
cd roblox-lua-obfuscator
```

#### Step 4: Install Dependencies

```bash
npm install
```

This downloads all required packages. **Takes 2-3 minutes.**

Wait for it to complete. You should see:
```
added XXX packages
```

#### Step 5: Start Development Server

```bash
npm start
```

Browser should open automatically. If not, visit:
```
http://localhost:3000
```

## 📦 What Gets Installed

### Main Dependencies
- **React 18** - UI framework
- **React DOM** - React browser support
- **Lucide React** - Icons library

### Dev Dependencies
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **Vite** - Build tool
- **gh-pages** - GitHub Pages deployment

Total size: ~200MB (compresses to ~50MB in node_modules)

## 🐛 Installation Troubleshooting

### Issue: "npm: command not found"

**Solution:** Install Node.js

1. Visit [nodejs.org](https://nodejs.org)
2. Download LTS version
3. Run installer, follow steps
4. Restart terminal
5. Try again: `npm --version`

### Issue: "ERR! code EACCES" (Permission denied)

**On Mac/Linux:**
```bash
# Fix permissions
sudo chown -R $(whoami) ~/.npm
npm install
```

### Issue: Port 3000 already in use

```bash
# Use different port
PORT=3001 npm start
```

Then visit `http://localhost:3001`

### Issue: Dependencies install but app crashes

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm start
```

### Issue: "Module not found" error

```bash
# Make sure you're in project directory
cd roblox-lua-obfuscator

# Reinstall
npm install

# Start again
npm start
```

## 🪟 Windows-Specific Steps

### Using Command Prompt

```cmd
# Navigate to project
cd C:\Users\YourName\Downloads\roblox-lua-obfuscator

# Install
npm install

# Start
npm start
```

### Using PowerShell

```powershell
# Same commands as above
npm install
npm start
```

### Issue: Execution Policy Error

If you get an execution policy error:

```powershell
# Run PowerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try again.

## 🍎 Mac-Specific Steps

### Install Homebrew (Optional but Recommended)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Install Node.js via Homebrew

```bash
brew install node
```

### Using Terminal

```bash
# Navigate to project
cd ~/Downloads/roblox-lua-obfuscator

# Install
npm install

# Start
npm start
```

## 🐧 Linux-Specific Steps

### Ubuntu/Debian

```bash
# Install Node.js
sudo apt update
sudo apt install nodejs npm

# Install project
cd ~/Downloads/roblox-lua-obfuscator
npm install
npm start
```

### Fedora/RedHat

```bash
# Install Node.js
sudo dnf install nodejs npm

# Install project
cd ~/Downloads/roblox-lua-obfuscator
npm install
npm start
```

### Arch Linux

```bash
# Install Node.js
sudo pacman -S nodejs npm

# Install project
cd ~/Downloads/roblox-lua-obfuscator
npm install
npm start
```

## ✅ Verify Installation

After `npm install`, check:

```bash
# Should show package versions
npm list

# Should show 2-3 lines of info
npx vite --version
```

If you see no errors, you're good to go!

## 🚀 Start Development

```bash
npm start
```

This will:
1. Start a development server
2. Open browser automatically
3. Enable hot reload (changes refresh instantly)
4. Show console for debugging

## 📁 Project Structure After Install

```
roblox-lua-obfuscator/
├── node_modules/        ← Downloaded packages (don't edit)
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── index.html
├── package.json
└── ... (other config files)
```

## 🎯 Next Steps

1. **Test it works:** Open http://localhost:3000
2. **Try obfuscating:** Paste Lua code and click buttons
3. **Read the docs:** Check README.md
4. **Customize:** Edit src/App.jsx if desired
5. **Deploy:** Follow DEPLOYMENT.md

## 🔄 Common Commands

```bash
# Start development
npm start

# Stop development
Ctrl + C

# Build for production
npm run build

# Build output goes to 'dist/' folder

# Deploy to GitHub Pages
npm run deploy

# Check code structure
npm list --depth=0
```

## 💾 Save Your Work

### Local Backup
```bash
# Copy entire project
cp -r roblox-lua-obfuscator ~/Documents/backup
```

### Git Backup (Recommended)
```bash
git add .
git commit -m "Save progress"
git push origin main
```

## 🆘 Still Having Issues?

### Check Node Version Again
```bash
# Must be v16 or higher
node -v

# If old, install from nodejs.org
```

### Try Fresh Install
```bash
# Remove and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Check Internet Connection
- Installation downloads ~200MB
- Need stable connection
- Try installing again

### Check Disk Space
- Need at least 500MB free
- Run: `df -h` (Mac/Linux) or check Properties (Windows)

### Look at Error Message Carefully
- Error messages usually tell you what's wrong
- Google the error message
- Check README.md
- Open GitHub issue with the error

## 📞 Getting Help

1. **Local issues?** Check this guide
2. **Installation stuck?** Run with verbose output:
   ```bash
   npm install --verbose
   ```
3. **Still stuck?** Check [npm documentation](https://docs.npmjs.com)

## ✨ Success Indicators

You're ready if:
- ✅ `npm install` completed without errors
- ✅ Browser opened to http://localhost:3000
- ✅ You can paste code and obfuscate it
- ✅ Copy/Download buttons work

**Congratulations! Installation complete!** 🎉

---

Next: Read [QUICK_START.md](./QUICK_START.md) to start using the app!
