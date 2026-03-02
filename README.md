# 🔴 Roblox Lua Obfuscator

Advanced Lua script obfuscation tool designed specifically for Roblox developers. Protect your scripts with professional-grade obfuscation techniques.

![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/roblox-lua-obfuscator)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node.js](https://img.shields.io/badge/node.js-16+-brightgreen)

## 📋 Features

✨ **7 Powerful Obfuscation Techniques:**
- **Variables** - Transform local variables & functions into cryptic names
- **Strings** - Encode strings using `string.char()` function calls
- **Tables** - Convert dot notation to bracket notation
- **Advanced** - Create string lookup tables for maximum confusion
- **Minify** - Remove comments, whitespace, and formatting
- **XOR Cipher** - Advanced XOR encryption with loadstring
- **Full Obfuscate** - Combines all techniques for maximum protection

🎨 **Modern Interface:**
- Dark, brutalist design with Tailwind CSS
- Real-time code preview
- One-click copy & download
- Responsive mobile-friendly layout
- Smooth animations and transitions

✅ **Roblox Compatible:**
- All output runs safely in Roblox Studio
- Works with LocalScripts, ServerScripts, ModuleScripts
- No breaking changes to script functionality
- Preserves all Roblox API calls

## 🚀 Quick Start

### Option 1: Online (Easiest)
1. Visit [your-vercel-link.vercel.app](https://your-vercel-link.vercel.app)
2. Paste your Lua script
3. Choose obfuscation method
4. Copy or download the result

### Option 2: Local Setup

**Prerequisites:**
- Node.js 16+ installed
- npm or yarn

**Installation:**
```bash
# Clone the repository
git clone https://github.com/yourusername/roblox-lua-obfuscator.git
cd roblox-lua-obfuscator

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

## 📦 Project Structure

```
roblox-lua-obfuscator/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── App.jsx             # Main React component
│   ├── main.jsx            # React DOM mount point
│   └── index.css           # Tailwind + custom styles
├── package.json            # Dependencies & scripts
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
└── README.md               # This file
```

## 🛠️ Available Scripts

```bash
# Start development server
npm start

# Build for production
npm build

# Deploy to GitHub Pages
npm run deploy

# Run tests (if configured)
npm test
```

## 📖 Obfuscation Methods Explained

### Variables
Renames all local variables and functions to cryptic names:
```lua
-- Before
local playerName = "Player"
local function greet() print(playerName) end

-- After
local _0 = "Player"
local function _1() print(_0) end
```

### Strings
Encodes string literals using byte values:
```lua
-- Before
local message = "Hello World"

-- After
local message = string.char(72,101,108,108,111,32,87,111,114,108,100)
```

### Tables
Converts table access patterns:
```lua
-- Before
local player = game.Players.LocalPlayer

-- After
local player = game["Players"]["LocalPlayer"]
```

### Advanced
Creates lookup tables for strings:
```lua
-- Before
print("Hello")

-- After
local _S = { _S0 = string.char(72,101,108,108,111) }
print(_S._S0)
```

### Minify
Removes all whitespace and comments:
```lua
-- Before (10 lines)
local x = 5
-- This is a comment
print(x)

-- After (1 line)
local x=5;print(x)
```

### XOR Cipher
Encrypts entire script with XOR:
```lua
-- Entire script encoded and wrapped with decryption code
local _K=42
local _C="..."
-- Automatic decryption on execution
```

### Full Obfuscate
Combines all techniques for maximum protection:
```lua
-- All previous methods applied together
-- Unreadable, but fully functional
```

## 🎯 Use Cases

✅ **Legitimate Uses:**
- Protect proprietary game scripts
- Prevent script stealing in open-source games
- Secure payment systems and authentication
- Hide client-side logic from players

⚠️ **Not For:**
- Malicious exploit scripts
- Unauthorized access to games
- Scamming or fraud
- Violating Roblox Terms of Service

## 🔧 Technology Stack

- **React 18** - UI framework
- **Tailwind CSS 3** - Utility-first CSS
- **Lucide React** - Icon library
- **JavaScript ES6+** - Core logic

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This tool is provided for educational and legitimate purposes only. Users are responsible for how they use this obfuscator. The creator is not liable for:
- Violation of Roblox Terms of Service
- Malicious use of obfuscated code
- Legal consequences from misuse

Always respect game developers' intellectual property and use this tool responsibly.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Node version, etc.)

## 📧 Contact

Have questions? 
- Open an issue on GitHub
- Email: your.email@example.com

## 🙏 Credits

Made with ❤️ by [Your Name]

Inspired by the Roblox community and lua obfuscation best practices.

---

<p align="center">
  Made with Lua 💜 for Roblox
</p>
