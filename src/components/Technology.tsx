import { Box, Center, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Title from "./Title";

const Technology = () => {
  const techstack = [
    {
      title: "Node JS",
      image: "https://softbytes-assets.s3.amazonaws.com/node-js.webp",
    },
    {
      title: "express js",
      image: "https://softbytes-assets.s3.amazonaws.com/express-js.webp",
    },
    {
      title: "react js",
      image: "https://softbytes-assets.s3.amazonaws.com/react.webp",
    },
    {
      title: "next js",
      image: "https://softbytes-assets.s3.amazonaws.com/next-js.webp",
    },
    {
      title: ".net",
      image: "https://softbytes-assets.s3.amazonaws.com/net.webp",
    },
    {
      title: "php",
      image: "https://softbytes-assets.s3.amazonaws.com/php.webp",
    },
    {
      title: "laravel",
      image: "https://softbytes-assets.s3.amazonaws.com/laravel.webp",
    },
    {
      title: "ruby on rails",
      image: "https://softbytes-assets.s3.amazonaws.com/ruby-on-rails.webp",
    },
    {
      title: "rust",
      image: "https://softbytes-assets.s3.amazonaws.com/rust.webp",
    },
    {
      title: "go",
      image: "https://softbytes-assets.s3.amazonaws.com/go.webp",
    },

    {
      title: "angular",
      image: "https://softbytes-assets.s3.amazonaws.com/angular.webp",
    },
    {
      title: "vue",
      image: "https://softbytes-assets.s3.amazonaws.com/vue.webp",
    },
    {
      title: "ember",
      image: "https://softbytes-assets.s3.amazonaws.com/ember.webp",
    },
    {
      title: "electron",
      image: "https://softbytes-assets.s3.amazonaws.com/electron.webp",
    },
    {
      title: "react native",
      image: "https://softbytes-assets.s3.amazonaws.com/react.webp",
    },
    {
      title: "flutter",
      image: "https://softbytes-assets.s3.amazonaws.com/flutter.webp",
    },
    {
      title: "postgre",
      image: "https://softbytes-assets.s3.amazonaws.com/postgresql.webp",
    },
    {
      title: "mysql",
      image: "https://softbytes-assets.s3.amazonaws.com/mysql.webp",
    },
    {
      title: "mongodb",
      image: "https://softbytes-assets.s3.amazonaws.com/mongodb.webp",
    },
    {
      title: "bigquery",
      image: "https://softbytes-assets.s3.amazonaws.com/bigquery.webp",
    },
    {
      title: "cassandra",
      image: "https://softbytes-assets.s3.amazonaws.com/cassandra.webp",
    },
    {
      title: "ethereum",
      image: "https://softbytes-assets.s3.amazonaws.com/ethereum.png",
    },
    {
      title: "hyperledger fabric",
      image:
        "https://softbytes-assets.s3.amazonaws.com/hyberledger-fabric.webp",
    },
    {
      title: "stripe",
      image: "https://softbytes-assets.s3.amazonaws.com/stripe.webp",
    },
  ];
  return (
    <Box>
      <Text
        fontSize={{ base: "12px", sm: "sm", md: "md", lg: "lg" }}
        mb={3}
        className="reach-us"
      >
        Our Technology Stack
      </Text>
      {/* <Heading as="h1">Industry Leading Tech Stack</Heading> */}
      <Title title="Industry Leading Tech Stack" />
      <Box w={{ sm: "100%", md: "75%" }} mb={5}>
        <Text fontSize={{ base: "14px", sm: "14px", md: "16px" }}>
          We utilize cutting-edge tech tailored to level up your product and
          take your business higher. Our proven solutions are designed to
          maximize scalability and performance for industry-leading excellence.
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 3, sm: 3, md: 4, lg: 6, xl: 6 }}
        paddingY="5"
        spacingY={5}
      >
        {techstack.map((ts, index) => (
          <Center key={index}>
            <Box key={index}>
              <Image src={ts.image} className="techimages" />
              <Text mt={2} className="technames">
                {ts.title}
              </Text>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Technology;
