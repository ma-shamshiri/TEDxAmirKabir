// TalksSpeakers.tsx

import React from "react";
import {
    Box,
    Grid,
    GridItem,
    AspectRatio,
    Image,
    Text,
    Heading,
    useBreakpointValue,
} from "@chakra-ui/react";
import { talksData } from "./data";
import { useTranslation } from "react-i18next";

const TalksSpeakers: React.FC = () => {
    const { t, i18n } = useTranslation();

    // Determine how many columns to display based on screen size
    // e.g. 1 col on mobile, 3 on md, 4 on lg
    const columns = useBreakpointValue({ base: 1, md: 3, lg: 4 });

    return (
        <Box
            as="section"
            bg="#fff"
            position="relative"
            color="#000"
            py={{ base: 8, md: 12 }}
            px={{ base: 4, md: 8, lg: 12 }}
            width="100%"
            overflow="hidden"
        >
            {/* Section Heading */}
            <Heading
                as="h2"
                marginY={{ base: 6, md: 8, lg: "4rem" }}
                marginBottom={{ base: 6, md: 8, lg: "8rem" }}
                fontSize={{ base: "2xl", md: "4xl", lg: "3rem" }}
                textAlign="center"
                color="#CB0000"
                fontFamily={i18n.language === 'fa' ? "'Rubik', sans-serif" : ""}
                dir={i18n.language === 'fa' ? "rtl" : "ltr"}
                fontWeight={i18n.language === 'fa' ? "bold" : "bold"}
            >
                {t("talkGelleryTitle")}
            </Heading>

            {/* Responsive Grid */}
            <Grid
                templateColumns={`repeat(${columns}, 1fr)`}
                gap={6}
                maxW={{ base: "90%", lg: "1200px" }}
                mx="auto"
            >
                {talksData.map((talk) => (
                    <GridItem
                        key={talk.id}
                        bg="#fff"
                        // boxShadow="0 0.3rem 1rem rgba(0,0,0,0.1)"
                        boxShadow="0 0 30px 1px gray"
                        borderRadius="1rem"
                        overflow="hidden"
                        _hover={{
                            transform: "scale(1.02)",
                            transition: "transform 0.3s",
                        }}
                    >
                        {/* Video Embed */}
                        <AspectRatio ratio={16 / 9}>
                            <iframe
                                src={talk.videoUrl}
                                allowFullScreen
                                title={talk.speakerName}
                                style={{ border: "none" }}
                            />
                        </AspectRatio>

                        {/* Speaker Info */}
                        <Box p={4}>
                            <Box
                                display="flex"
                                alignItems="center"
                                mb={3}
                                dir={i18n.language === 'fa' ? "rtl" : "ltr"}
                            >
                                {/* Circular speaker image */}
                                <Image
                                    src={talk.speakerImage}
                                    alt={talk.speakerName}
                                    boxSize={{ base: "60px", md: "50px", lg: "80px" }}
                                    borderRadius="full"
                                    mr={{ base: 3, lg: 5 }}
                                    ml={{ base: 3, lg: 5 }}
                                    objectFit="cover"
                                />
                                {/* Speaker name */}
                                <Text
                                    fontWeight="bold"
                                    fontSize={{
                                        base: i18n.language === 'fa' ? "1.9rem" : "1.9rem",
                                        md: i18n.language === 'fa' ? "1.4rem" : "1.4rem",
                                        lg: i18n.language === 'fa' ? "1.4rem" : "1.4rem",

                                    }}
                                    color="#000"
                                    fontFamily={i18n.language === 'fa' ? "'Rubik', sans-serif" : ""}
                                    dir={i18n.language === 'fa' ? "rtl" : "ltr"}
                                // width="70%"
                                >
                                    {t(talk.speakerName)}
                                </Text>
                            </Box>

                            {/* Description */}
                            <Text
                                fontSize={{
                                    base: i18n.language === 'fa' ? "1.3rem" : "1.3rem",
                                    md: i18n.language === 'fa' ? "1.5rem" : "1.5rem",
                                    lg: i18n.language === 'fa' ? "1.4rem" : "1.5rem",

                                }}
                                color="#000"
                                fontFamily={i18n.language === 'fa' ? "'Rubik', sans-serif" : ""}
                                dir={i18n.language === 'fa' ? "rtl" : "ltr"}
                            >
                                {t(talk.description)}
                            </Text>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default TalksSpeakers;
