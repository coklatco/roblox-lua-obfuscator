# ⚡ Quick Start Guide

Get Roblox Lua Obfuscator running in 5 minutes!

## 🎯 Option 1: Online (Instant)

Just visit: **[your-app.vercel.app](https://your-app.vercel.app)**

No installation needed! 🎉

## 💻 Option 2: Local Development

### Step 1: Setup
```bash
# Clone repository
git clone https://github.com/yourusername/roblox-lua-obfuscator.git
cd roblox-lua-obfuscator

# Install dependencies
npm install
```

### Step 2: Run
```bash
# Start development server
npm start
```

Browser opens automatically at `http://localhost:3000` 🚀

### Step 3: Use
1. Paste your Lua script in the **Input** area
2. Click one of the obfuscation buttons (try "FULL" for maximum)
3. Copy or download the result

That's it! 🎊

## 🔧 Common Tasks

### Want to build for production?
```bash
npm run build
```
Output goes to `dist/` folder

### Deploy to Vercel?
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages?
```bash
npm run deploy
```

## 📝 File Structure

```
📦 roblox-lua-obfuscator
 ├── 📁 src/
 │   ├── App.jsx          ← Main component
 │   ├── main.jsx         ← Entry point
 │   └── index.css        ← Styles
 ├── 📁 public/
 │   └── index.html       ← HTML page
 ├── package.json         ← Dependencies
 ├── tailwind.config.js   ← Tailwind config
 └── README.md            ← Full documentation
```

## 🎨 Obfuscation Buttons Explained

| Button | Does | Use When |
|--------|------|----------|
| **Variables** | Renames variables to `_0`, `_1`, etc | Quick obfuscation |
| **Strings** | Encodes text strings | Hiding string content |
| **Tables** | Changes `x.y` to `x["y"]` | Confusing table access |
| **Advanced** | Creates string lookup tables | Maximum confusion |
| **Minify** | Removes whitespace & comments | Reduce file size |
| **XOR** | Encrypts entire script | Maximum security |
| **FULL** | All techniques combined | Best protection |

## 🆘 Troubleshooting

### Dependencies not installing?
```bash
# Clear npm cache
npm cache clean --force

# Reinstall
npm install
```

### Port 3000 already in use?
```bash
# On Windows
netstat -ano | findstr :3000

# On Mac/Linux
lsof -i :3000
```

### Need different port?
```bash
PORT=3001 npm start
```

### Build errors?
```bash
# Remove and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🚀 Next Steps

1. **Customize**
   - Edit colors in `tailwind.config.js`
   - Modify component in `src/App.jsx`
   - Update text in README.md

2. **Deploy**
   - Follow [DEPLOYMENT.md](./DEPLOYMENT.md)
   - Choose: Vercel, GitHub Pages, Netlify, etc.

3. **Contribute**
   - See [CONTRIBUTING.md](./CONTRIBUTING.md)
   - Submit improvements via Pull Requests

## 💡 Pro Tips

✅ **Try the FULL obfuscation** for best results  
✅ **Test scripts** in Roblox Studio before using  
✅ **Keep original copy** before obfuscating  
✅ **Download .lua file** for easy import  

## 📚 Learn More

- [Full README](./README.md) - Comprehensive guide
- [Deployment Guide](./DEPLOYMENT.md) - Deploy anywhere
- [Contributing Guide](./CONTRIBUTING.md) - Help improve

## ❓ Questions?

- Check [README.md](./README.md)
- Open a GitHub Issue
- Check existing issues for answers

---

**Happy obfuscating!** 🔐✨
