import React from "react";
import { Box, Typography, Card, CardContent, Chip, Stack, Button } from "@mui/material";

export default function GameDevSection() {
  return (
    <Box id="gamedev" sx={{ py: 10, px: 2 }}>

      {/* ================= HEADER ================= */}
      <Typography variant="h3" align="center" gutterBottom>
        Game Development
      </Typography>

      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
      >
        Systems-focused game development spanning custom engines, AI systems, rendering pipelines,
        and interactive simulations.
      </Typography>

      {/* ================= FEATURED PROJECT ================= */}
      <Card sx={{ maxWidth: 1200, mx: "auto", mb: 6, p: 2 }}>
        <CardContent>

          <Typography variant="h4" gutterBottom>
            FurySyrge — Custom 2.5D Game Engine
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Custom C++ engine built with SDL2 featuring BSP-based rendering, gameplay systems,
            and full distribution pipeline.
          </Typography>

          {/* ================= RESPONSIVE MAIN LAYOUT ================= */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              alignItems: "flex-start",
              mb: 3,
            }}
          >

            {/* VIDEO */}
            <Box
              sx={{
                flex: 2,
                width: "100%",
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#000",
                height: { xs: 220, sm: 300, md: 400 },
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/GSVh0Qh_kss"
                title="FurySyrge Demo"
                allowFullScreen
                style={{ border: 0 }}
              />
            </Box>

            {/* DETAILS */}
            <Box sx={{ flex: 1, width: "100%" }}>

              <Stack
                direction="row"
                spacing={1}
                sx={{
                  mb: 2,
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <Chip label="C++" />
                <Chip label="SDL2" />
                <Chip label="BSP Rendering" />
                <Chip label="Game Engine" />
                <Chip label="AI Systems" />
                <Chip label="macOS Build" />
              </Stack>

              <Box component="ul" sx={{ pl: 2 }}>
                <li>BSP-based rendering pipeline using spatial segmentation</li>
                <li>Custom AI, collision, and player health systems</li>
                <li>Full asset pipeline (visual + audio from scratch)</li>
                <li>Packaged macOS builds (Intel + Apple Silicon)</li>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Button
                  fullWidth={{ xs: true, md: false }}
                  variant="contained"
                  href="https://github.com/puffwya/zwave/releases"
                  target="_blank"
                >
                  View Release
                </Button>
              </Box>

            </Box>
          </Box>

          <Typography variant="body2" color="text.secondary">
            Systems-level engine architecture with real-time rendering and full lifecycle deployment.
          </Typography>

        </CardContent>
      </Card>

      {/* ================= CHESS ENGINE ================= */}
      <Card sx={{ maxWidth: 900, mx: "auto", mb: 6, p: 2 }}>
        <CardContent>

          <Typography variant="h5" gutterBottom>
            Chess Engine — C++ & WebAssembly
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Fully functional chess engine with rule enforcement, AI move generation, and browser-based 
gameplay.
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
            <Chip label="C++" />
            <Chip label="WebAssembly" />
            <Chip label="Game AI" />
            <Chip label="Rule Engine" />
            <Chip label="Browser Integration" />
          </Stack>

          <Box component="ul" sx={{ pl: 2 }}>
            <li>Full legal move generation and rule validation (check, castling, etc.)</li>
            <li>AI opponent with programmatic move selection</li>
            <li>WebAssembly integration for browser execution</li>
            <li>Architecture designed for minimax + alpha-beta expansion</li>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              href="https://puffwya.github.io/Basic_Chess_Engine/"
              target="_blank"
            >
              Play Live
            </Button>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Demonstrates algorithm design, rule systems, and low-level to web execution via WebAssembly.
          </Typography>

        </CardContent>
      </Card>

      {/* ================= SMALLER PROJECTS ================= */}
      <Card sx={{ maxWidth: 900, mx: "auto", p: 2 }}>
        <CardContent>

          <Typography variant="h6" gutterBottom>
            Additional Game Projects
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Smaller systems-focused games demonstrating physics, state management, and gameplay logic.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

            <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
              <Typography fontWeight="bold">Pac-Man Clone (Python / Pygame)</Typography>
              <Typography variant="body2" color="text.secondary">
                Enemy pathing, collision systems, and full arcade gameplay loop.
              </Typography>
            </Box>

            <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
              <Typography fontWeight="bold">Pong (C++)</Typography>
              <Typography variant="body2" color="text.secondary">
                Physics-based ball movement and scoring system.
              </Typography>

              <Button
                size="small"
                variant="outlined"
                href="https://puffwya.github.io/Basic_Pong_Game/"
                target="_blank"
                sx={{ mt: 1 }}
              >
                Play
              </Button>
            </Box>

            <Box sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2 }}>
              <Typography fontWeight="bold">Blackjack (JavaScript)</Typography>
              <Typography variant="body2" color="text.secondary">
                State-driven card game with interactive UI logic.
              </Typography>

              <Button
                size="small"
                variant="outlined"
                href="https://puffwya.github.io/BlackJack-Game/"
                target="_blank"
                sx={{ mt: 1 }}
              >
                Play
              </Button>
            </Box>

          </Box>

        </CardContent>
      </Card>

    </Box>
  );
}
