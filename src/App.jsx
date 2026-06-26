import { useState, useCallback } from "react";
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ImageNode from './components/ImageNode.tsx';
import MeleeTab from './components/MeleeTab.tsx';
import RangedTab from "./components/RangedTab.tsx";
import MageTab from "./components/MageTab.tsx";
import "./App.css";


export default function App() {

  const [activeTab, setActiveTab] = useState("Melee");

  const tabs = ["Melee", "Ranged", "Mage", "Quests", "Slayer/Reaper", "General"];

  return (
    <div className="app">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="content">
          {activeTab === "Melee" && <MeleeTab />}
          {activeTab === "Ranged" && <RangedTab />}
           {activeTab === "Mage" && <MageTab />}
      </div>
    </div>
  );
}