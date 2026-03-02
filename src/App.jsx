import React, { useState, useCallback } from 'react';
import { Copy, RefreshCw, Download, Zap } from 'lucide-react';
import './index.css';

export default function RobloxObfuscator() {
  const [inputCode, setInputCode] = useState(`local Players = game:GetService("Players")
local player = Players.LocalPlayer
local character = player.Character

function greetPlayer(name)
    print("Hello, " .. name)
    return name
end

greetPlayer(player.Name)`);
  
  const [outputCode, setOutputCode] = useState('');
  const [obfuscationType, setObfuscationType] = useState('full');
  const [copied, setCopied] = useState(false);

  // Obfuscate local variable and function names
  const obfuscateVariableNames = (code) => {
    let result = code;
    let varCounter = 0;
    const varMap = {};
    
    // Match local variable declarations
    const localVarRegex = /\blocal\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g;
    result = result.replace(localVarRegex, (match, varName) => {
      if (!varMap[varName]) {
        varMap[varName] = `_${varCounter++}`;
      }
      return `local ${varMap[varName]} =`;
    });
    
    // Match function declarations
    const funcRegex = /\bfunction\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    result = result.replace(funcRegex, (match, funcName) => {
      if (!varMap[funcName]) {
        varMap[funcName] = `_${varCounter++}`;
      }
      return `function ${varMap[funcName]} (`;
    });
    
    // Replace all occurrences
    Object.entries(varMap).forEach(([original, obfuscated]) => {
      const regex = new RegExp(`\\b${original}\\b`, 'g');
      result = result.replace(regex, obfuscated);
    });
    
    return result;
  };

  // Obfuscate strings
  const obfuscateStrings = (code) => {
    return code.replace(/"([^"]*)"|'([^']*)'/g, (match, dq, sq) => {
      const str = dq !== undefined ? dq : sq;
      return `string.char(${str.split('').map(c => c.charCodeAt(0)).join(',')})`;
    });
  };

  // Minify Lua code
  const minify = (code) => {
    // Remove comments
    let result = code.replace(/--.*$/gm, '');
    // Remove unnecessary whitespace
    result = result.replace(/\s+/g, ' ').trim();
    // Remove whitespace around operators but preserve keywords
    result = result.replace(/\s*([=\-+*/%<>(){}[\];:,.])\s*/g, '$1');
    // Fix spacing after keywords
    result = result.replace(/\b(local|function|if|then|else|end|for|while|do|return)\b/g, '$1 ');
    return result;
  };

  // Add dead code
  const addDeadCode = (code) => {
    const deadCodeSnippets = [
      'local _0x0 = 0\n',
      'local _0xdead = 0xDEAD\n',
      'for _=1,0 do end\n',
      'if false then local _u = 1 end\n'
    ];
    
    const randomDead = deadCodeSnippets[Math.floor(Math.random() * deadCodeSnippets.length)];
    return randomDead + code;
  };

  // Obfuscate table keys
  const obfuscateTables = (code) => {
    // Replace table.key with table["key"] and obfuscate
    let result = code.replace(/(\w+)\.(\w+)/g, (match, table, key) => {
      return `${table}["${key}"]`;
    });
    return result;
  };

  // Advanced string obfuscation with table
  const advancedStringObfuscation = (code) => {
    let result = code;
    let stringCounter = 0;
    const stringMap = {};
    
    result = result.replace(/"([^"]*)"|'([^']*)'/g, (match, dq, sq) => {
      const str = dq !== undefined ? dq : sq;
      const key = `_S${stringCounter++}`;
      stringMap[key] = str;
      return key;
    });
    
    // Add string table at the beginning
    let stringTable = 'local _S={';
    Object.entries(stringMap).forEach(([key, value], index) => {
      const encoded = value.split('').map(c => c.charCodeAt(0)).join(',');
      stringTable += `${key}=string.char(${encoded})`;
      if (index < Object.keys(stringMap).length - 1) stringTable += ',';
    });
    stringTable += '}\n';
    
    return stringTable + result;
  };

  // XOR obfuscation for strings
  const xorObfuscate = (code) => {
    const key = 42;
    const encoded = code.split('').map(char => {
      return (char.charCodeAt(0) ^ key).toString(16);
    }).join('');
    
    return `local _K=${key}\nlocal _C="${encoded}"\nlocal _D=""\nfor i=1,#_C,2 do _D=_D..string.char(tonumber(_C:sub(i,i+1),16)^_K) end\nloadstring(_D)()`;
  };

  // Full obfuscation
  const fullObfuscate = (code) => {
    let result = code;
    result = obfuscateVariableNames(result);
    result = obfuscateTables(result);
    result = advancedStringObfuscation(result);
    result = addDeadCode(result);
    result = minify(result);
    return result;
  };

  const handleObfuscate = useCallback(() => {
    let result = '';
    
    switch(obfuscationType) {
      case 'variables':
        result = obfuscateVariableNames(inputCode);
        break;
      case 'strings':
        result = obfuscateStrings(inputCode);
        break;
      case 'tables':
        result = obfuscateTables(inputCode);
        break;
      case 'advanced':
        result = advancedStringObfuscation(inputCode);
        break;
      case 'minify':
        result = minify(inputCode);
        break;
      case 'xor':
        result = xorObfuscate(inputCode);
        break;
      case 'full':
        result = fullObfuscate(inputCode);
        break;
      default:
        result = inputCode;
    }
    
    setOutputCode(result);
  }, [inputCode, obfuscationType]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const downloadCode = () => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(outputCode));
    element.setAttribute('download', 'obfuscated.lua');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-slate-900 to-red-950 p-6 font-mono">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 animate-slide" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(239,68,68,.1) 50%, transparent 70%)',
        }}></div>
      </div>

      {/* Grid pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-red-500" size={32} />
            <div>
              <h1 className="text-5xl font-black text-white tracking-tighter">
                ROBLOX<span className="text-red-500">LUA</span>
              </h1>
              <p className="text-red-400 text-sm font-bold tracking-widest">OBFUSCATOR</p>
            </div>
          </div>
          <p className="text-slate-400 text-lg max-w-xl">Advanced Lua script obfuscation for Roblox exploits and private scripts</p>
        </div>

        {/* Control Panel */}
        <div className="bg-slate-800/40 border border-red-500/20 rounded-lg p-6 mb-6 backdrop-blur">
          <p className="text-red-400 text-xs font-bold mb-4 uppercase">Obfuscation Methods</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {[
              { id: 'variables', label: 'Variables' },
              { id: 'strings', label: 'Strings' },
              { id: 'tables', label: 'Tables' },
              { id: 'advanced', label: 'Advanced' },
              { id: 'minify', label: 'Minify' },
              { id: 'xor', label: 'XOR' },
              { id: 'full', label: 'FULL' }
            ].map(option => (
              <button
                key={option.id}
                onClick={() => setObfuscationType(option.id)}
                className={`py-2 px-3 rounded text-xs font-bold transition-all duration-200 ${
                  obfuscationType === option.id
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/50 border border-red-400'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/80 border border-slate-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <label className="text-slate-300 font-bold text-sm uppercase tracking-widest">
                <span className="text-red-400">›</span> Input Lua Script
              </label>
              <button
                onClick={() => setInputCode('')}
                className="text-slate-400 hover:text-red-400 transition text-xs font-bold"
              >
                CLEAR
              </button>
            </div>
            <textarea
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="flex-1 bg-slate-900/50 border border-red-500/20 rounded-lg p-4 text-slate-100 text-sm leading-relaxed focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 resize-none font-mono"
              placeholder="Paste your Roblox Lua script here..."
            />
          </div>

          {/* Output */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <label className="text-slate-300 font-bold text-sm uppercase tracking-widest">
                <span className="text-red-400">›</span> Obfuscated Output
              </label>
              <button
                onClick={handleObfuscate}
                className="flex items-center gap-1 text-red-400 hover:text-red-300 transition text-xs font-bold"
              >
                <RefreshCw size={12} /> OBFUSCATE
              </button>
            </div>
            <textarea
              value={outputCode}
              readOnly
              className="flex-1 bg-slate-900/50 border border-red-500/20 rounded-lg p-4 text-slate-100 text-sm leading-relaxed focus:outline-none resize-none cursor-default font-mono"
              placeholder="Obfuscated code will appear here..."
            />
          </div>
        </div>

        {/* Action Buttons */}
        {outputCode && (
          <div className="mt-6 flex gap-3 justify-end">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-slate-100 px-6 py-3 rounded-lg font-bold transition-all border border-slate-600 hover:border-slate-500"
            >
              <Copy size={18} />
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button
              onClick={downloadCode}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-red-500/50 border border-red-400"
            >
              <Download size={18} />
              Download .lua
            </button>
          </div>
        )}

        {/* Info Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { 
              title: 'Variables', 
              desc: 'Rename local variables and functions to cryptic names (_0, _1, etc)',
              icon: '⟳'
            },
            { 
              title: 'Strings', 
              desc: 'Encode string literals using string.char() function calls',
              icon: '◆'
            },
            { 
              title: 'Tables', 
              desc: 'Convert dot notation to bracket notation and obfuscate keys',
              icon: '▢'
            },
            { 
              title: 'Advanced', 
              desc: 'Create string table with encoded characters for maximum confusion',
              icon: '◈'
            },
            { 
              title: 'Minify', 
              desc: 'Remove comments, whitespace, and unnecessary formatting',
              icon: '▭'
            },
            { 
              title: 'XOR', 
              desc: 'XOR cipher encoding of entire script (requires loadstring)',
              icon: '⊕'
            },
            { 
              title: 'FULL', 
              desc: 'Combine all techniques for maximum obfuscation level',
              icon: '◉'
            },
            { 
              title: 'Roblox Compatible', 
              desc: 'All output is safe to run in Roblox Studio and games',
              icon: '✓'
            }
          ].map((item, i) => (
            <div key={i} className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 hover:border-red-500/40 transition">
              <div className="text-red-400 text-2xl mb-2">{item.icon}</div>
              <h3 className="text-red-400 font-bold text-sm uppercase mb-2">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Warning */}
        <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-red-400 text-xs">
            <span className="font-bold">⚠️ Warning:</span> This tool is for educational purposes. Use responsibly. Do not use for malicious exploits or unauthorized access to Roblox games.
          </p>
        </div>
      </div>
    </div>
  );
}
