import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuCardProps {
  name: string;
  image: string;
  description: string;
  link?: string;
  index?: number;
}

export default function MenuCard({ name, image, description, link, index = 0 }: MenuCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="bg-white rounded-[20px] border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] transition-all duration-500 hover:-translate-x-0.5 hover:-translate-y-0.5 overflow-hidden">
          {/* Image */}
          <div className="p-2 pb-0">
            <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden border-4 border-black">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
          {/* Title */}
          <div className="p-4 pt-3">
            <h3 className="text-brand font-bold uppercase text-lg leading-tight text-center" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {name}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-brand/75" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-[20px] border-4 border-black shadow-[14px_14px_0_0_#000] max-w-lg w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b-4 border-black">
                <h2 className="text-brand font-bold uppercase text-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {name}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-[20px] hover:bg-brand-quaternary/20 transition-colors"
                  aria-label="关闭"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="relative aspect-video rounded-[16px] overflow-hidden border-4 border-black mb-6">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-brand text-lg leading-relaxed" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {description}
                </p>
              </div>

              {/* Footer */}
              {link && (
                <div className="p-6 border-t-4 border-black">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-3 bg-white rounded-[20px] border-4 border-black shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-500 text-brand font-bold uppercase text-lg skew-x-[-15deg]"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    <span className="skew-x-[15deg]">查看详情</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="skew-x-[15deg]">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
