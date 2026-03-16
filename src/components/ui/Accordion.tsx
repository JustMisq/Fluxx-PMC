"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggleItem(id: string) {
    if (allowMultiple) {
      setOpenId(openId === id ? null : id);
    } else {
      setOpenId(openId === id ? null : id);
    }
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="border border-white/10 bg-brand-dark hover:border-brand-red/20 transition-colors"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-brand-gray/20 transition-colors"
          >
            <h3 className="font-semibold text-white">{item.title}</h3>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <svg
                className="w-5 h-5 text-brand-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </button>

          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-white/5"
              >
                <div className="px-6 py-4 text-sm text-brand-text-muted leading-relaxed bg-brand-gray/10">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
