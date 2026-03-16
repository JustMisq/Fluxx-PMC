"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
}

export default function Tabs({ items, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id || "");

  const activeContent = items.find((item) => item.id === activeTab)?.content;

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 mb-8">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-6 py-3 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-300 relative ${
              activeTab === item.id
                ? "text-brand-red"
                : "text-brand-text-muted hover:text-white"
            }`}
          >
            {item.label}
            {activeTab === item.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeContent}
      </motion.div>
    </div>
  );
}
