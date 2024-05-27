import React from "react";
import { Link } from "react-scroll";

import {
  HStack,
  Button,
  Image,
  Text,
  Box,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [display, changeDisplay] = React.useState("none");
  return (
    <>
      <HStack
        justifyContent="space-between"
        paddingX={{ base: 5, sm: 10, md: "15px", lg: 20 }}
        paddingY="10px"
      >
        <Image
          src="https://softbytes-assets.s3.amazonaws.com/navbar-logo.png"
          className="navbarlogo"
        />
        <Box display={{ base: "none", md: "flex" }}>
          <HStack spacing={10}>
            <Text fontSize="18px" fontWeight="300" className="navlinks">
              <Link
                to="about"
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-1}
                duration={500}
              >
                About
              </Link>
            </Text>
            <Text fontSize="18px" fontWeight="300" className="navlinks">
              <Link
                to="services"
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-40}
                duration={500}
              >
                Services
              </Link>
            </Text>

            <Button variant="custom">
              <Link
                to="contact"
                spy={true}
                activeClass="active"
                smooth={true}
                offset={10}
                duration={500}
              >
                Contact
              </Link>
            </Button>
          </HStack>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Open Menu"
            size="xl"
            onClick={() => changeDisplay("flex")}
            icon={<HamburgerIcon color="black" />}
          />
        </Box>
      </HStack>
      <Flex
        w="100vw"
        bgColor="gray.100"
        h="100vh"
        zIndex={20}
        pos="fixed"
        left="0"
        top="0"
        overflowY="auto"
        flexDir="column"
        align="center"
        display={display}
      >
        <Flex justify="flex-end" width="100%">
          <IconButton
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon color="black" />}
            mb={2}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center" m={5}>
          <Text fontSize="18px" fontWeight="300" className="navlinks">
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              offset={-1}
              duration={500}
              onClick={() => changeDisplay("none")}
            >
              About
            </Link>
          </Text>
          <Text fontSize="18px" fontWeight="300" py={5} className="navlinks">
            <Link
              to="services"
              activeClass="active"
              smooth={true}
              offset={-40}
              duration={500}
              onClick={() => changeDisplay("none")}
            >
              Services
            </Link>
          </Text>

          <Button variant="custom" w="100%">
            Contact
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
