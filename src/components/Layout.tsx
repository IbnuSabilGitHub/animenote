import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: "200px", p: 2, borderRight: "1px solid #ddd" }}>
        <ButtonGroup orientation="vertical">
          <Button component={Link} to="/">Home</Button>
          <Button component={Link} to="/about">About</Button>
          <Button component={Link} to="/user/123">User</Button>
        </ButtonGroup>
      </Box>

      {/* Konten Utama */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Outlet /> {/* Ini tempat konten halaman akan ditampilkan */}
      </Box>
    </Box>
  );
}
