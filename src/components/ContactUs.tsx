import {
  Box,
  Divider,
  SimpleGrid,
  Text,
  HStack,
  Image,
  VStack,
  Link,
} from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import Title from "./Title";

import Telegram from "../assets/telegram.png";
import Whatsapp from "../assets/whatsapp.png";

const ContactUs = () => {
  return (
    <Box
      marginTop={{ base: 5, sm: 10, md: "45px" }}
      className="contactUs"
      id="contact"
    >
      <Divider />
      <SimpleGrid
        columns={{ sm: 1, md: 2 }}
        spacing={5}
        marginTop={{ base: 10, sm: 10, md: 20 }}
      >
        <Box>
          <Title title="Got a brilliant idea?" />

          <Text fontSize={{ base: "15px", sm: "16px", md: "16px" }}>
            Tell us about it - we'll chat within 24 hours.
          </Text>
          <Text
            fontSize={{ base: "15px", sm: "16px", md: "16px" }}
            className="realistic-marker-highlight"
          >
            Don't keep that spark to yourself!
          </Text>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="svg-filters"
            style={{ display: "none" }}
          >
            <defs>
              <filter id="marker-shape">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0 0.15"
                  numOctaves="1"
                  result="warp"
                />
                <feDisplacementMap
                  xChannelSelector="R"
                  yChannelSelector="G"
                  scale="30"
                  in="SourceGraphic"
                  in2="warp"
                />
              </filter>
            </defs>
          </svg>
          <Box mt={14}>
            <Text fontSize={{ base: "12px", sm: "sm" }} className="reach-us">
              Reach us at
            </Text>
            <HStack mt={10} mb={4}>
              <Link href="https://telegram.me/softbytes">
                <Image src={Telegram} boxSize="50px" objectFit="cover" />
              </Link>
              <Link href="https://wa.me/+128942235263">
                <Image src={Whatsapp} objectFit="cover" boxSize="50px" />
              </Link>
            </HStack>
            <VStack align="left" gap={0}>
              <Text fontSize={{ base: "lg", sm: "lg", md: "2xl" }} as="b">
                <Link href="mailto:hello@softbytes.ca">hello@softbytes.ca</Link>
              </Text>
              <Text fontSize={{ base: "lg", sm: "lg", md: "2xl" }} as="b">
                <Link href="tel:+12894415263">+1(289) 442 5263</Link>
              </Text>
            </VStack>
          </Box>
        </Box>
        <Box mt={3}>
          <ContactForm />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ContactUs;
