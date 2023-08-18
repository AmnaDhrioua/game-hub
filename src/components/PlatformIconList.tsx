import React from 'react';
import { 
  FaWindows, 
  FaPlaystation, 
  FaXbox, 
  FaApple, 
  FaLinux, 
  FaAndroid } 
  from 'react-icons/fa';
  import { MdPhoneIphone } from 'react-icons/md';
  import { SiNintendo } from 'react-icons/si';
  import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks2/useGames';
import { IconType } from 'react-icons';
interface Props {
  platforms: Platform[];
}

const PlatformIcon = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType }= {
    pc:FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    // name: PlayStation
    // slag: playstation(textual id)

  }
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIcon;