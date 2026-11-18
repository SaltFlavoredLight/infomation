import React, { useState } from 'react';

export default function GeneratedListApp() {
  const [listTitle, setListTitle] = useState("Curated Reading & Task List");
  const [items, setItems] = useState(["Design crimson & gold theme","Wire SortableJS layer ordering","Export production JSX"]);
  const [newItem, setNewItem] = useState("");
  const [accentColor, setAccentColor] = useState("#8b2525");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '24px' }}>
      <span
        className="uppercase tracking-widest inline-block"
        style={{
          fontSize: "11px",
          fontWeight: "700",
          color: "#520c0c",
          backgroundColor: "#FFD700",
          padding: "4px 12px",
          margin: "0px",
          borderRadius: "9999px",
          textAlign: "left",
          borderWidth: "1px",
          borderColor: "#8b2525",
          borderStyle: 'solid',
          boxShadow: "none"
        }}
      >
        {`${items.length} ACTIVE ${items.length === 1 ? "ENTRY" : "ENTRIES"}`}
      </span>

      <h2
        className="tracking-tight"
        style={{
          fontSize: "26px",
          fontWeight: "700",
          color: `${accentColor}`,
          backgroundColor: "transparent",
          padding: "2px 0px",
          margin: "0px",
          borderRadius: "0px",
          textAlign: "left",
          borderWidth: "0px",
          borderColor: "transparent",
          borderStyle: 'solid',
          boxShadow: "none"
        }}
      >
        {`${listTitle}`}
      </h2>

      <input
        className="focus:outline-none transition"
        value={`${newItem}`}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Write a new item to append..."
        style={{
          fontSize: "14px",
          fontWeight: "400",
          color: "#1B1717",
          backgroundColor: "#f7f4f4",
          padding: "10px 14px",
          margin: "0px",
          borderRadius: "8px",
          textAlign: "left",
          borderWidth: "1px",
          borderColor: "#bc8d8d",
          borderStyle: 'solid',
          boxShadow: "none"
        }}
      />

      <button
        className="hover:opacity-95 transition"
        onClick={() => {
          // Custom action
          if (newItem && newItem.trim()) { state.items = [...items, newItem.trim()]; state.newItem = ''; }
        }}
        style={{
          fontSize: "14px",
          fontWeight: "600",
          color: "#FFFFFF",
          backgroundColor: `${accentColor}`,
          padding: "10px 18px",
          margin: "0px",
          borderRadius: "8px",
          textAlign: "center",
          borderWidth: "1px",
          borderColor: "#520c0c",
          borderStyle: 'solid',
          boxShadow: "0 2px 6px rgba(139, 37, 37, 0.25)"
        }}
      >
        + Add to List
      </button>

      <ul
        className="transition-all"
        style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0 }}
      >
        {items.map((item, idx) => (
          <li key={idx} style={{
          fontSize: "14px",
          fontWeight: "500",
          color: "#1B1717",
          backgroundColor: "#FFFFFF",
          padding: "12px 14px",
          margin: "4px 0px",
          borderRadius: "10px",
          textAlign: "left",
          borderWidth: "1px",
          borderColor: "#e5e2e2",
          borderStyle: 'solid',
          boxShadow: "0 2px 8px rgba(27, 23, 23, 0.04)"
        }} className="flex items-center justify-between">
            <span>{item}</span>
            <button onClick={() => setItems(items.filter((_, i) => i !== idx))}>Remove</button>
          </li>
        ))}
      </ul>

      <button
        className="hover:bg-stone-200 transition"
        onClick={() => setItems([])}
        style={{
          fontSize: "13px",
          fontWeight: "600",
          color: "#520c0c",
          backgroundColor: "#f7f4f4",
          padding: "8px 14px",
          margin: "0px",
          borderRadius: "8px",
          textAlign: "center",
          borderWidth: "1px",
          borderColor: "#bc8d8d",
          borderStyle: 'solid',
          boxShadow: "none"
        }}
      >
        {`Clear All (${items.length})`}
      </button>
    </div>
  );
}