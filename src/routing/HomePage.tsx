import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FooterSection from "../components/FooterSection";
import MyNavbar from "../components/MyNavbar";
import InfoSection from "../components/InfoSection";
import EventGallery from "../components/EventGallery";
import Player from '@vimeo/player';
import TalksSpeakers from "../components/TalksSpeakers";
import TeaserSection from "../components/TeaserSection";
import HeroSection from "../components/HeroSection";

const HomePage: React.FC = () => {
  const [boxLoaded, setBoxLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [vimeoPlayer, setVimeoPlayer] = useState<Player | null>(null);

  const handleBoxLoad = () => {
    setBoxLoaded(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // This callback is passed to HeroSection so that HomePage can hold the player instance
  const handlePlayerReady = (player: Player) => {
    setVimeoPlayer(player);
    player.setMuted(isMuted);
  };

  // Toggle mute/unmute via the Vimeo Player API
  const handleToggleMute = () => {
    if (vimeoPlayer) {
      if (isMuted) {
        vimeoPlayer.setMuted(false);
        setIsMuted(false);
      } else {
        vimeoPlayer.setMuted(true);
        setIsMuted(true);
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={handleBoxLoad}
      >
        <MyNavbar onToggleMute={handleToggleMute} isMuted={isMuted} />
        <HeroSection/>
        <TeaserSection />
        <InfoSection />
        <EventGallery />
        <TalksSpeakers />
        {/* <ScrollingLink /> */}
        {/* <FeatureCardGrid /> */}
        {/* <VideoGallery /> */}
        {/* <FormSection /> */}
        <FooterSection />
      </motion.div>
    </>
  );
};

export default HomePage;
