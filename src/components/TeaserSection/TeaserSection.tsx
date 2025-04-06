// HeroSection.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import InstagramGallery from '../InstagramGallery';
// import Typed from "react-typed";

const TeaserSection: React.FC = () => {
  const { t, i18n } = useTranslation();


  return (
    <Box
      position="relative"
      width="100%"
      overflow="hidden"
    >
      <Box
        // bgGradient="radial(circle at center, rgba(229,62,62,1) 0%, rgba(229,62,62,0.2) 40%, rgba(0,0,0,1) 100%)"
        position="relative"
        bg={"#101010"}
        width="100%"
        // minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={1}
      >
        <InstagramGallery />
      </Box>
    </Box>
  );
};

export default TeaserSection;
