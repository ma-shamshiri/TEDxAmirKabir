// AmirKabirInfoSection.tsx

import React from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    Image,
    useBreakpointValue,
} from "@chakra-ui/react";
import { amirKabirInfoItems } from "./data";
import { useTranslation } from "react-i18next";
import Typed from "react-typed";

const InfoSection: React.FC = () => {
    const { t, i18n } = useTranslation();

    // On mobile, always stack vertically; on md and above, use row direction.
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box
            as="section"
            width="100%"
            bg="#fff"
            py={{ base: 12, md: 20 }}
            px={{ base: 4, md: 8 }}
            overflow="hidden"
        >
            <Container maxW="1400px">
                <Heading
                    as="h2"
                    textAlign="center"
                    marginBottom={{ base: 12, lg: "6rem" }}
                    fontSize={{ base: "3xl", md: "3rem" }}
                    color="#000"
                    fontFamily={i18n.language === 'fa' ? "'Rubik', sans-serif" : ""}
                    dir={i18n.language === 'fa' ? "rtl" : "ltr"}
                >
                    {t("infoSectionTitle")}
                </Heading>

                {amirKabirInfoItems.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <Flex
                            key={item.id}
                            direction={{ base: "column", md: "row" }}
                            align="center"
                            justify="center"
                            mb={16}
                        // On desktop: alternate order; on mobile: stack naturally
                        >
                            {/* For even-indexed items, image on left; for odd-indexed, image on right */}
                            <Box
                                flex="1"
                                mr={{ base: 0, md: isEven ? 8 : 0 }}
                                ml={{ base: 0, md: isEven ? 0 : 8 }}
                                mb={{ base: 6, md: 0 }}
                                order={{ base: 0, md: isEven ? 0 : 1 }}
                                textAlign={{ base: "center", md: i18n.language === 'fa' ? "right" : "left" }}
                            >
                                <Heading
                                    as="h3"
                                    mb={4}
                                    fontSize={{ base: "2xl", md: "4rem" }}
                                    fontFamily={i18n.language === 'fa' ? "'Rubik', sans-serif" : ""}
                                    dir={i18n.language === 'fa' ? "rtl" : "ltr"}
                                    color="#CB0000"
                                    fontWeight={i18n.language === 'fa' ? "" : "1000"}
                                >
                                    {t(item.title)}
                                    {/* 
                                    <Typed
                                        strings={[t(item.title)]}
                                        typeSpeed={50}
                                        backSpeed={20}
                                        loop
                                        backDelay={3000}
                                    /> */}
                                </Heading>
                                <Text
                                    fontSize={{ base: "lg", md: "1.8rem" }}
                                    color="#000"
                                    fontFamily={i18n.language === 'fa' ? "'Rubik', sans-serif" : ""}
                                    dir={i18n.language === 'fa' ? "rtl" : "ltr"}
                                    lineHeight="1.8"
                                >
                                    {t(item.description)}
                                </Text>
                            </Box>

                            <Box
                                display="flex"
                                flex="1"
                                justifyContent={i18n.language === 'fa' ? "center" : "center"}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    boxSize={{ base: "120px", md: "200px" }}
                                    objectFit="cover"
                                    borderRadius="full"
                                    border="4px solid #000"
                                />
                            </Box>
                        </Flex>
                    );
                })}
            </Container>
        </Box>
    );
};

export default InfoSection;
