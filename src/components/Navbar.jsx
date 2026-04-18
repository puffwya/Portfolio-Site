import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: "white",
        color: "black",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* LEFT: Brand */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            letterSpacing: 0.5,
          }}
        >
          Wyatt Puff
        </Typography>

        {/* RIGHT: Nav */}
        <Box sx={{ display: "flex", gap: 1 }}>

          <Button
            onClick={() => scrollTo("software")}
            sx={{
              textTransform: "none",
              borderRadius: 999,
              px: 2,
            }}
          >
            Software Dev
          </Button>

          <Button
            onClick={() => scrollTo("gamedev")}
            sx={{
              textTransform: "none",
              borderRadius: 999,
              px: 2,
            }}
          >
            Game Dev
          </Button>

          <Button
            onClick={() => scrollTo("about")}
            sx={{
              textTransform: "none",
              borderRadius: 999,
              px: 2,
            }}
          >
            About
          </Button>

          <Button
            onClick={() => scrollTo("experience")}
            sx={{
              textTransform: "none",
              borderRadius: 999,
              px: 2,
            }}
          > 
            Experience
          </Button>

          <Button
            onClick={() => scrollTo("education")}
            sx={{
              textTransform: "none",
              borderRadius: 999,
              px: 2,
            }}
          > 
            Education
          </Button>

          <Button
            onClick={() => scrollTo("certifications")}
            sx={{
              textTransform: "none",
              borderRadius: 999,
              px: 2,
            }} 
          >
            Certifications
          </Button>

        </Box>

      </Toolbar>
    </AppBar>
  );
}
