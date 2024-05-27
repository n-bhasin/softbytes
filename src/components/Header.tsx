import {
  Heading,
  SimpleGrid,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-scroll";

import Dashboardimage from "../assets/dashboard1.jpeg";
const Header = () => {
  return (
    <>
      <Box p={{ base: 5, sm: 10, md: "15px", lg: 20 }}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={5}>
          <Box paddingTop="45px">
            <Heading
              fontWeight={400}
              noOfLines={3}
              fontSize={{
                base: "23px !important",
                sm: "28px !important",
                md: "30px !important",
                lg: "35px !important",
                xl: "46px !important",
              }}
            >
              Tech that takes you higher -{" "}
              <span style={{ color: "#f07f2f", fontWeight: "600" }}>
                Innovation tailored to your business goals.
              </span>
            </Heading>
            <Text
              my={{ base: "10px", md: "20px" }}
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "17px" }}
            >
              At Softbytes, we design and develop software that takes your
              business to the next level. Streamline processes, delight
              customers, and get a leg up on the competition — we make it
              happen.
            </Text>
            <Text
              my={{ base: "10px", md: "20px" }}
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "17px" }}
            >
              We drive digital transformation and product development leveraging
              core expertise across custom software development, design,
              marketing, design, and web3.
            </Text>
            <Button mt="10px" variant="custom" size="xl">
              <Link
                to="contact"
                spy={true}
                activeClass="active"
                smooth={true}
                offset={10}
                duration={500}
              >
                Let's Talk
              </Link>
            </Button>
          </Box>

          {/* <Image src="https://softbytes.s3.amazonaws.com/dashboard1.jpeg" /> */}
          <Image src={Dashboardimage} />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Header;
