import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

// ================= NAV ITEMS =================
const navItems = [
  { label: "Software", id: "software" },
  { label: "Game Dev", id: "gamedev" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Certs", id: "certifications" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("software");
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  // ================= SCROLL TO TOP =================
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(false);
  };

  // ================= SCROLL TRACKING =================
  useEffect(() => {
    const handleScroll = () => {
      let current = "software";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            current = item.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          color: "black",
          borderBottom: "1px solid #eee",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* ================= BRAND (CLICKABLE) ================= */}
          <Typography
            role="button"
            tabIndex={0}
            onClick={scrollToTop}
            onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
            sx={{
              fontWeight: 700,
              letterSpacing: "-0.3px",
              cursor: "pointer",
              fontSize: "1.05rem",
              transition: "0.2s ease",
              userSelect: "none",
              "&:hover": { opacity: 0.7 },
            }}
          >
            Wyatt Puff
          </Typography>

          {/* ================= DESKTOP NAV ================= */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                sx={{
                  textTransform: "none",
                  fontSize: "0.85rem",
                  borderRadius: 999,
                  px: 1.5,
                  py: 0.8,
                  color: activeSection === item.id ? "#000" : "#666",
                  fontWeight: activeSection === item.id ? 600 : 400,
                  backgroundColor:
                    activeSection === item.id ? "#f2f2f2" : "transparent",
                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* ================= MOBILE MENU ================= */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250, pt: 2 }}>

          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.id}
                onClick={() => scrollTo(item.id)}
                selected={activeSection === item.id}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>

        </Box>
      </Drawer>
    </>
  );
}
