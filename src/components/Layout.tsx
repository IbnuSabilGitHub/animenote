import { Outlet, useNavigate } from "react-router-dom";
// import { useState} from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import drakTheme from "../theme";
import Dock from "./Dock";

interface DockItem {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
  className: string;
}

const items = (navigate: (path: string) => void): DockItem[] => [
  {
    icon: <i className="fa-solid fa-house fa-xs"></i>,
    label: "Home",
    onClick: () => navigate("/"),
    className: "rounded-lg",
  },
  {
    icon: <i className="fa-solid fa-person fa-xs"></i>,
    label: "About",
    onClick: () => navigate("/About"),
    className: "rounded-lg",
  },
  {
    icon: <i className="fa-solid fa-circle-user fa-xs"></i>,
    label: "Profile",
    onClick: () => navigate("/user/ADMIN"),
    className: "rounded-lg",
  },
  {
    icon: <i className="fa-solid fa-gear fa-xs"></i>,
    label: "Settings",
    onClick: () => navigate("/Settings"),
    className: "rounded-lg",
  },
];

export default function Layout() {
  // const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={drakTheme}>
      <CssBaseline />
      <div>
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-1">
        <Dock
          items={items(navigate)}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
        </div>

        {/* Konten Utama */}
        <div>
          <Outlet /> {/* Ini tempat konten halaman akan ditampilkan */}
        </div>
      </div>
    </ThemeProvider>
  );
}
