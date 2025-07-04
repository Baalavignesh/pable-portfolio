"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
    ? "block  py-2 text-sm text-gray-700 hover:bg-gray-100"
    : "h-fit font-light text-gray-500 hover:text-gray-900 transition-all duration-200 cursor-pointer";

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
            (item.path === "/" ? pathname === "/" : pathname.includes(item.path.substring(1))) ? "font-normal text-gray-800" : ""
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

  const handleNavigation = (path: string) => {
    try {
      router.push(path);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center py-2 max-w-screen-lg w-full mx-auto sticky bg-white bg-opacity-60 top-0 z-50 backdrop-filter backdrop-blur-2xl hover:bg-white transition-all duration-300"
    >
      <div className="flex gap-4 justify-between xl:justify-start items-center w-full">
        <div className="flex text-base gap-12 w-full justify-center" id="items">
          <NavbarItems 
            pathname={pathname.toLowerCase()} 
            onItemClick={handleNavigation}
          />
        </div>

        {/* <div className="lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-12 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
              >
                <NavbarItems 
                  pathname={pathname.toLowerCase()} 
                  onItemClick={handleNavigation}
                  isMobile={true}
                  onMobileItemClick={() => setDropdownOpen(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}
      </div>
    </motion.div>
  );
};

export default CustomNavbar;
