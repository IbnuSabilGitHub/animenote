import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import drakTheme from "../theme";

export default function Layout() {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={drakTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column-reverse",
          height: "100vh",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: 300,
            position: "fixed",
            m: 2,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            sx={{
              borderRadius:2 ,
              fontWeight: "bold",
              bgcolor: "rgba(255, 255, 255, 0.12)",
            }}
          >
            <BottomNavigationAction component={Link} to="/" label="Home" />
            <BottomNavigationAction component={Link} to="/about" label="About" />
            <BottomNavigationAction component={Link} to="/user/ADMIN" label="User" />
          </BottomNavigation>
        </Box>
        {/* Konten Utama */}
        <Box sx={{ flex: 1, p: 1 }}>
          <Outlet /> {/* Ini tempat konten halaman akan ditampilkan */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
