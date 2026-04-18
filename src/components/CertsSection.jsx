import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

export default function CertificationsSection() {
  return (
    <Box id="certifications" sx={{ py: 10, px: 2 }}>

      <Box sx={{ maxWidth: 700, mx: "auto" }}>

        {/* ================= HEADER ================= */}
        <Typography variant="h4" align="center" gutterBottom>
          Certifications
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
        >
          Verified technical credentials demonstrating applied machine learning and cloud system 
expertise.
        </Typography>

        {/* ================= CARD ================= */}
        <Card
          sx={{
            border: "1px solid #eee",
            boxShadow: "none",
            borderRadius: 2,
          }}
        >
          <CardContent sx={{ textAlign: "center", py: 3 }}>

            {/* Title */}
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              AWS Certified Machine Learning – Associate
            </Typography>

            {/* Meta */}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Amazon Web Services • 2026
            </Typography>

            {/* Context line */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              Validates applied machine learning knowledge, including model development, deployment,
              and AWS-based ML workflows.
            </Typography>

            {/* CTA */}
            <Button
              variant="outlined"
              href="https://www.credly.com/badges/4bc508b9-a4c3-4e8f-979b-fc101893dd2f/public_url"
              target="_blank"
              rel="noopener"
              sx={{
                textTransform: "none",
                borderRadius: 999,
                px: 3,
              }}
            >
              Verify on Credly
            </Button>

          </CardContent>
        </Card>

      </Box>
    </Box>
  );
}
