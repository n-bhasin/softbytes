import {
  Box,
  Divider,
  HStack,
  Text,
  Center,
  SimpleGrid,
  Heading,
  List,
  ListItem,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { LiaCopyrightSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <Box bg="black" mt={20}>
      <SimpleGrid
        columns={{ sm: 1, md: 4, lg: 4, xl: 4 }}
        paddingY="5"
        paddingX="10"
      >
        <Box m="5">
          <Image
            src="https://softbytes-assets.s3.amazonaws.com/footer-logo.png"
            className="footerlogo footerdisplayondesktop"
          />
          <Image
            src="https://softbytes-assets.s3.amazonaws.com/navbar-logo-white.png"
            className="navbarlogo footerdisplayonmobile"
          />

          {/* <HStack>
            <FaLinkedin size={24} color="white" />
            <FaXTwitter size={24} color="white" />
          </HStack> */}
        </Box>
        <Box m="5">
          <Heading size="md" color="white" mb={4}>
            Services
          </Heading>

          <List color="white" fontSize={14} spacing={2}>
            <ListItem>Web Development</ListItem>
            <ListItem>Mobile Development</ListItem>
            <ListItem>Enterprise Software Development</ListItem>
            <ListItem>AWS Cloud Services</ListItem>
            <ListItem>Custom Software Development</ListItem>
            <ListItem>Blockchain Development</ListItem>
          </List>
        </Box>
        <Box m="5">
          <Heading size="md" color="white" mb={4}>
            About
          </Heading>
          <List color="white" fontSize={13} spacing={2}>
            <ListItem>
              <Link
                to="about"
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-1}
                className="navlinks"
                duration={500}
              >
                About Softbytes
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box m="5">
          <Heading size="md" color="white" mb={4}>
            Contact Us
          </Heading>
          <List color="white" fontSize={13} spacing={2}>
            <ListItem>Careers</ListItem>
            {/* <ListItem>Book a consultation</ListItem> */}
          </List>
        </Box>
      </SimpleGrid>
      <Divider orientation="horizontal" />
      <Center p="5">
        <HStack>
          <LiaCopyrightSolid size={24} color="white" />
          <Text color="white" fontSize="14px" fontWeight="600">
            {" "}
            Copyright owned by Softbytes 2024
          </Text>
        </HStack>
      </Center>
    </Box>
  );
};

export default Footer;
