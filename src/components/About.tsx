import { Box, Text, Container, SimpleGrid, Image } from "@chakra-ui/react";

import Aboutimage from "../assets/about8.png";

const About = () => {
  return (
    <Box
      marginBottom={{ base: 5, sm: 10, md: "45px" }}
      bg="gray.10"
      pt={10}
      id="about"
    >
      <Container maxW="1200px">
        <Text
          fontSize={{ base: "12px", sm: "sm", md: "md", lg: "lg" }}
          mb={3}
          className="reach-us"
        >
          About
        </Text>
        <SimpleGrid
          columns={{ sm: 1, md: 1, lg: 2 }}
          py={10}
          spacing={{ base: 10, sm: 10, md: 15 }}
        >
          <Box>
            <Image src={Aboutimage} objectFit="cover" />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "17px" }}
            >
              At <span style={{ fontWeight: "700" }}>Softbytes</span>, we are on
              a mission to drive innovation and simplify complex technologies to
              empower organizations. Our vision is to be the top software
              engineering partner for enterprises and startups seeking to
              reimagine their digital potential.
            </Text>
            <Text
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "17px" }}
              mt="5"
            >
              We provide services spanning web development, mobile engineering,
              cloud solutions, UI/UX design, and blockchain integration. With
              expertise in both established and emerging tech ecosystems,
              Softbytes helps companies craft cutting-edge products, transform
              customer experiences, unlock new revenue streams, and build agile
              architectures scaled for the future.
            </Text>
            <Text
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "17px" }}
              mt="5"
            >
              Our philosophy is that technology should enable - not inhibit. We
              turn imagination into reality.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default About;
