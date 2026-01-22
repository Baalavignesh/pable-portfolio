"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "@/app/ThemeContext";
import { MoonIcon, SunIcon } from 'lucide-react';

type NavItem = {
  path: string;
  label: string;
};

const navItems: NavItem[] = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/experience", label: "Experience" },
  { path: "/achievements", label: "Achievements" },
];

interface NavbarItemsProps {
  pathname: string;
  onItemClick: (path: string) => void;
  isMobile?: boolean;
  onMobileItemClick?: () => void;
}

const NavbarItems: React.FC<NavbarItemsProps> = ({ 
  pathname, 
  onItemClick, 
  isMobile = false,
  onMobileItemClick,
}) => {
  const baseClasses = isMobile
    ? "block py-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-secondary"
    : "h-fit font-light text-xs sm:text-sm lg:text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 cursor-pointer";

  return (
    <>
      {navItems.map((item, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.8 }}
          key={item.path}
          onClick={() => {
            onItemClick(item.path);
            onMobileItemClick?.();
          }}
          className={`${baseClasses} ${
            (item.path === "/" ? pathname === "/" : pathname.includes(item.path.substring(1))) 
              ? "font-normal text-gray-800 dark:text-white" 
              : ""
          }`}
        >
          {item.label}
        </motion.div>
      ))}
    </>
  );
};

const CustomNavbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center py-4 lg:py-6 border-b-2 border-gray-100 dark:border-gray-800 w-full mx-auto sticky bg-white dark:bg-dark-primary bg-opacity-60 dark:bg-opacity-60 top-0 z-50 backdrop-filter backdrop-blur-2xl hover:bg-white dark:hover:bg-dark-primary transition-all duration-300"
    >
      <div className="flex gap-2 sm:gap-4 justify-between xl:justify-start items-center w-full px-2 sm:px-4">
        <div className="flex text-base gap-4 sm:gap-8 lg:gap-12 w-full justify-center" id="items">
          <NavbarItems 
            pathname={pathname.toLowerCase()} 
            onItemClick={handleNavigation}
          />
          <button
            onClick={toggleDarkMode}
            className="rounded-full  hover:bg-gray-100 dark:hover:bg-dark-secondary transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? 
              <SunIcon strokeWidth={1.5} className="text-gray-600 dark:text-gray-300 w-4 h-4 sm:w-5 sm:h-5" /> : 
              <MoonIcon strokeWidth={1.5} className="text-gray-600 dark:text-gray-300 w-4 h-4 sm:w-5 sm:h-5" />
            }
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomNavbar;
