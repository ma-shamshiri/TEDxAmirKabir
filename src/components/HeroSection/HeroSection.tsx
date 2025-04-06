import React from "react";
import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Typed from "react-typed";

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Responsive font sizes
  const headingSize = useBreakpointValue({ base: "4rem", md: "7rem" });
  const subheadingSize = useBreakpointValue({ base: "1.8rem", md: "4rem" });
  const textSize = useBreakpointValue({ base: "sm", md: "2.4rem" });

  // Choose your accent color (#CB0000 or #e24943)
  const accentColor = "#CB0000"; // or "#e24943"

  return (
    <Box
      as="section"
      position="relative"
      w="100%"
      // minH={{ base: "50vh", lg: "95vh" }}
      bg="linear-gradient(135deg, #000, #333)"
      color="#fff"
      overflow="hidden"
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
      fontFamily={i18n.language === "fa" ? "'Rubik', sans-serif" : undefined}
    >
      {/* Content Wrapper */}
      <Flex
      position="relative"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1400px"
        mx="auto"
        px={{ base: 6, md: "4rem", lg:"6rem" }}
        py={{ base: "4rem", md: "10rem" }}
      >
        {/* LEFT COLUMN - Text Section */}
        <Box
          flex="2"
          pr={{ base: 0, md: 8 }}
          mb={{ base: 10, md: 0 }}
          textAlign={{ base: "center", md: i18n.language === 'fa' ? "right" : "left" }}
        >
          <Heading
            as="h1"
            fontSize={headingSize}
            mb={4}
            fontWeight="1000"
            lineHeight="1.2"
            color={accentColor}
            fontFamily={i18n.language === 'fa' ? "'Rubik', sans-serif" : ""}
            dir={i18n.language === 'fa' ? "rtl" : "ltr"}
          >
            {t("heroTitle")}
          </Heading>

          {/* <Text
            fontSize={subheadingSize}
            fontWeight="semibold"
            mb={6}
            color="#fff"
            fontFamily={i18n.language === 'fa' ? "'Rubik', sans-serif" : ""}
                    dir={i18n.language === 'fa' ? "rtl" : "ltr"}
          >
            {t("heroSubtitle")}
          </Text> */}

          <Box
            fontSize={subheadingSize}
            fontWeight="semibold"
            mb={6}
            color="#fff"
            fontFamily={i18n.language === 'fa' ? "'Rubik', sans-serif" : ""}
            dir={i18n.language === 'fa' ? "rtl" : "ltr"}
          >
            <Typed
              strings={[t("heroSubtitle")]}
              typeSpeed={50}
              backSpeed={20}
              loop
              backDelay={3000}
            />
          </Box>

          {/* <Text
            fontSize={textSize}
            mb={8}
            maxW="600px"
            mx={{ base: "auto", md: "0" }}
            lineHeight="1.6"
            fontFamily={i18n.language === 'fa' ? "'Rubik', sans-serif" : ""}
                    dir={i18n.language === 'fa' ? "rtl" : "ltr"}
          >
            {t("heroDescription")}
          </Text> */}
        </Box>

        {/* RIGHT COLUMN - Poster Image */}
        {/* <Box
          flex="1"
          display="flex"
          justifyContent={{ base: "center", md: "flex-end" }}
          border={"3px solid red"}
          width="100%"
          height={"100%"}
        >
          
        </Box> */}
      </Flex>

      {/* WAVE DIVIDER AT THE BOTTOM */}
      {/* <Box position="absolute" bottom="0" left="0" w="100%" h="auto" zIndex={0}>
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <path
            fill={accentColor}
            fillOpacity="1"
            d="M0,256L80,224C160,192,320,128,480,128C640,128,800,192,960,208C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </Box> */}
    </Box>
  );
};

export default HeroSection;
