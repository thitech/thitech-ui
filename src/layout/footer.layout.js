import { Email, LinkedIn, Room } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { contactDetails } from "../constants";
import { useCallback } from "react";

const SocialLinks = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleEmailClick = useCallback(() => {
    window.location.href = `mailto:${contactDetails.email}`;
  }, []);

  const showInMapClicked = useCallback(() => {
    window.open(`https://maps.google.com?q=${contactDetails.coordinates}`);
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingTop={2}
      flexWrap={"wrap"}
      gap={1}
    >
      <Box display={"flex"} alignItems={"baseline"}>
        <Box
          component='img'
          sx={{
            width: 200,
            height: 60,
            objectFit: "cover",
            objectPosition: "25% 50%",
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            cursor: "pointer",
          }}
          alt='Thitech icon'
          src='/assets/logo.png'
        />
      </Box>
      <Typography fontWeight={600} color={"text.primary"}>
        @2023 Thitech
      </Typography>
      <Box display={"flex"} gap={2}>
        <Room onClick={showInMapClicked} />
        <Email onClick={handleEmailClick} />
        <LinkedIn onClick={() => openInNewTab(contactDetails.linkedin)} />
      </Box>
    </Box>
  );
};

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ background: theme.palette.secondary.light, paddingX: 10 }}>
      <SocialLinks />
    </Box>
  );
};

export default Footer;
