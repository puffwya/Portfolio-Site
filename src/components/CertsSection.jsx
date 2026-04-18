import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

export default function CertificationsSection() {
  return (
    <Box id="certifications" sx={{ py: 8, px: 2 }}>

      <Box sx={{ maxWidth: 700, mx: "auto" }}>

        {/* ================= HEADER ================= */}
        <Typography variant="h5" align="center" gutterBottom>
          Certifications
        </Typography>

        {/* ================= CARD ================= */}
        <Card>
          <CardContent sx={{ textAlign: "center" }}>

            <Typography variant="h6" gutterBottom>
              AWS Certified Machine Learning – Associate
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Amazon Web Services • 2026
            </Typography>

            <Button
              variant="outlined"
              href="https://www.credly.com/badges/4bc508b9-a4c3-4e8f-979b-fc101893dd2f/public_url"
              target="_blank"
              rel="noopener"
            >
              Verify Credential
            </Button>

          </CardContent>
        </Card>

      </Box>
    </Box>
  );
}
