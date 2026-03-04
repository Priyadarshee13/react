import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(""); // fixed: usestate → useState

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) { // fixed: i=1 → i=0, removed +1 offset
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Courier New', monospace",
      padding: "20px",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "440px",
        background: "#111118",
        border: "1px solid #2a2a3a",
        borderRadius: "16px",
        padding: "36px",
        boxShadow: "0 0 60px rgba(99,102,241,0.08)",
      }}>
        <div style={{ marginBottom: "32px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#6366f1", marginBottom: "6px" }}>
            SECURITY TOOL
          </div>
          <h1 style={{ margin: 0, fontSize: "26px", color: "#e8e8f0", fontWeight: 700 }}>
            Password Generator
          </h1>
        </div>

        {/* Password output */}
        <div style={{
          background: "#0d0d14",
          border: "1px solid #2a2a3a",
          borderRadius: "10px",
          padding: "16px 18px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          minHeight: "60px",
        }}>
          <input
            ref={passwordRef}
            readOnly
            value={password}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#c8c8e8",
              fontSize: "15px",
              letterSpacing: "0.5px",
              fontFamily: "'Courier New', monospace",
              cursor: "default",
            }}
          />
          <button
            onClick={copyToClipboard}
            style={{
              background: "#1a1a2a",
              border: "1px solid #3a3a5a",
              color: "#8888aa",
              borderRadius: "6px",
              padding: "6px 12px",
              cursor: "pointer",
              fontSize: "12px",
              letterSpacing: "1px",
              fontFamily: "'Courier New', monospace",
              whiteSpace: "nowrap",
            }}
          >
            COPY
          </button>
        </div>

        {/* Length slider */}
        <div style={{ marginBottom: "28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span style={{ color: "#8888aa", fontSize: "12px", letterSpacing: "2px" }}>LENGTH</span>
            <span style={{ color: "#6366f1", fontSize: "14px", fontWeight: 700 }}>{length}</span>
          </div>
          <input
            type="range" min={6} max={64} value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#6366f1", cursor: "pointer" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
            <span style={{ color: "#3a3a5a", fontSize: "10px" }}>6</span>
            <span style={{ color: "#3a3a5a", fontSize: "10px" }}>64</span>
          </div>
        </div>

        {/* Checkboxes - Numbers & Symbols only */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ color: "#8888aa", fontSize: "12px", letterSpacing: "2px", marginBottom: "14px" }}>
            CHARACTER SET
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {[
              { label: "Numbers", ex: "0–9", value: numberAllowed, setter: setNumberAllowed },
              { label: "Symbols", ex: "!@#$%", value: charAllowed, setter: setCharAllowed },
            ].map(({ label, ex, value, setter }) => (
              <button
                key={label}
                onClick={() => setter((v) => !v)}
                style={{
                  background: value ? "#1a1a40" : "#0d0d14",
                  border: `1px solid ${value ? "#6366f1" : "#2a2a3a"}`,
                  borderRadius: "8px",
                  padding: "12px 14px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ color: value ? "#a5b4fc" : "#5a5a7a", fontSize: "12px", fontWeight: 600, marginBottom: "2px" }}>
                  {label}
                </div>
                <div style={{ color: value ? "#6366f1" : "#3a3a5a", fontSize: "11px" }}>{ex}</div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={passwordGenerator}
          style={{
            width: "100%",
            padding: "16px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            border: "none",
            borderRadius: "10px",
            color: "#fff",
            fontSize: "13px",
            letterSpacing: "3px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'Courier New', monospace",
          }}
        >
          GENERATE PASSWORD
        </button>
      </div>
    </div>
  );
}

export default App;