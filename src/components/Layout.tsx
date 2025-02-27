import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Dock from "./Dock";

interface DockItem {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
  className: string;
}

const items = (navigate: (path: string) => void): DockItem[] => [
  {
    icon: <i className="fa-solid fa-house text-xs md:text-sm text-amber-50"></i>,
    label: "Home",
    onClick: () => navigate("/"),
    className: "rounded-lg active:bg-neutral-900 transition-colors",
  },
  {
    icon: <i className="fa-solid fa-person text-xs md:text-sm text-amber-50"></i>,
    label: "About",
    onClick: () => navigate("/About"),
    className: "rounded-lg active:bg-neutral-900 transition-colors",
  },
  {
    icon: <i className="fa-solid fa-circle-user text-xs md:text-sm text-amber-50"></i>,
    label: "Profile",
    onClick: () => navigate("/user/ADMIN"),
    className: "rounded-lg active:bg-neutral-900 transition-colors",
  },
  {
    icon: <i className="fa-solid fa-gear text-xs md:text-sm text-amber-50"></i>,
    label: "Settings",
    onClick: () => navigate("/Settings"),
    className: "rounded-lg active:bg-neutral-900 transition-colors",
  },
];

export default function Layout() {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-1 z-999">
        {width > 768 ? (
          <Dock
            items={items(navigate)}
            panelHeight={70}
            baseItemSize={50}
            magnification={70}
          />
        ) : (
          <Dock
            items={items(navigate)}
            panelHeight={60}
            baseItemSize={40}
            magnification={60}
          />
        )}
      </div>

      {/* Konten Utama */}
      <div>
        <Outlet /> {/* Ini tempat konten halaman akan ditampilkan */}
      </div>
    </div>
  );
}
