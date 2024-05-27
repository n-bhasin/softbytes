import {
  Box,
  Text,
  Center,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  Image,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Title from "./Title";
import WebDevelopment from "../assets/web-development.png";
import MobileDevelopment from "../assets/mobile-development.png";
import CloudComputing from "../assets/cloud-computing.png";
import Blockchain from "../assets/blockchain.png";
import UserExperience from "../assets/user-experience.png";
import DataIntegration from "../assets/data-integration.png";

const Services = () => {
  const tabs = [
    {
      title: "Web Development",
      image: WebDevelopment,
    },
    {
      title: "Mobile Development",
      image: MobileDevelopment,
    },
    {
      title: "UI/UX",
      image: UserExperience,
    },
    {
      title: "Cloud Engineering",
      image: CloudComputing,
    },
    {
      title: "Integrated Solutions",
      image: DataIntegration,
    },
    {
      title: "Blockchain",
      image: Blockchain,
    },
  ];
  return (
    <Box marginBottom={{ base: 5, sm: 10, md: "45px" }}>
      <Text
        fontSize={{ base: "12px", sm: "sm", md: "md", lg: "lg" }}
        mb={3}
        className="reach-us"
        id="services"
      >
        Services
      </Text>
      <Title title="Innovating Every Step of the way" />
      <Box w={{ sm: "100%", md: "75%" }} mb={5}>
        <Text fontSize={{ base: "14px", sm: "14px", md: "16px" }}>
          We guide your product from concept to launch with forward-thinking
          solutions that ensure success.
        </Text>
      </Box>

      <Tabs
        position="relative"
        variant="unstyled"
        paddingX="10px"
        style={{ overflowX: "scroll" }}
      >
        <Center>
          <TabList
            sx={{
              overflowX: "auto", // Make the TabList scrollable horizontally
              whiteSpace: "nowrap", // Ensure that tabs stay in a single line
              scrollbarWidth: "thin", // For Firefox support
              "@media (min-width: 48em)": {
                overflowX: "visible", // Remove scroll on larger screens
                whiteSpace: "normal", // Reset whiteSpace on larger screens
              },
            }}
          >
            {tabs.map((item, index) => (
              <Tab key={index}>
                <VStack spacing={5}>
                  <Image
                    src={item.image}
                    boxSize={{ base: "40px", sm: "40px", md: "48px" }}
                  />

                  <Text
                    fontSize={{ base: "12px", sm: "15px", md: "15px" }}
                    // fontWeight={isSelected ? "bold" : "normal"}
                  >
                    {item.title}
                  </Text>
                </VStack>
              </Tab>
            ))}
          </TabList>
        </Center>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
          borderColor="themeColor.100"
          width="150px"
        />

        <TabPanels
          marginTop={3}
          style={{ overflow: "hidden" }}
          sx={{ overflow: "hidden" }}
        >
          <TabPanel>
            <TabPanelTitle title=" Innovate Online with Custom-Built Connectivity" />
            <TabPanelDescription>
              Take your web presence to the next level with our robust
              custom-engineered solutions for enhanced connectivity and seamless
              user experiences. We architect stunning web apps from the ground
              up, maximizing engagement through intuitive interfaces,
              streamlining operations with automated workflows, and elevating
              interactivity with next-gen designs.
            </TabPanelDescription>
            <UnorderedList
              fontWeight="600"
              spacing={1}
              fontSize={{ base: "12px", sm: "14px", md: "18px" }}
            >
              <ListItem>Custom build web apps & dashboards</ListItem>
              <ListItem>Content management systems</ListItem>
              <ListItem>UI/UX Design</ListItem>
              <ListItem>Multi lingual websites</ListItem>
            </UnorderedList>
          </TabPanel>
          <TabPanel>
            <TabPanelTitle title="Innovate with Impacting Apps" />
            <TabPanelDescription>
              Our robust mobile presence delivers the ultimate in connectivity
              and convenience through custom-built apps designed to streamline,
              engage, and elevate. With your vision in mind, we engineer mobile
              experiences that seamlessly connect processes, build connections
              through intuitive interfaces, and create next-level user
              experiences that wow.
            </TabPanelDescription>
            <UnorderedList
              fontWeight="600"
              spacing={1}
              fontSize={{ base: "12px", sm: "14px", md: "18px" }}
            >
              <ListItem>React Native App Development</ListItem>
              <ListItem>Flutter App Development</ListItem>
              <ListItem>UI/UX Design</ListItem>
              <ListItem>Login and business strategy</ListItem>
            </UnorderedList>
          </TabPanel>
          <TabPanel>
            <TabPanelTitle title="Where Innovation Meets Design" />
            <TabPanelDescription>
              Through skillful UI craftsmanship, we build captivating user
              interfaces that blend strategic utility with stunning aesthetics.
              Leveraging visual narratives and cognitive psychology, we design
              interfaces that intuitively guide users, creating seamless
              experiences.
            </TabPanelDescription>
          </TabPanel>
          <TabPanel>
            <TabPanelTitle title="Innovate in the Cloud" />
            <TabPanelDescription>
              Take your product to the next level with our tailored cloud
              solutions for secure, seamless modernization. Our experts
              architect robust infrastructure, engineer cloud-ready
              architectures, and develop future-proof systems - unlocking
              transformation through the power of the cloud.
            </TabPanelDescription>
            <UnorderedList
              fontWeight="600"
              spacing={1}
              fontSize={{ base: "12px", sm: "14px", md: "18px" }}
            >
              <ListItem>Amazon Web Services</ListItem>
              <ListItem>Google Cloud Platform</ListItem>
              <ListItem>Software as a Service</ListItem>
            </UnorderedList>
          </TabPanel>
          <TabPanel>
            <TabPanelTitle title="Uniting Systems for Seamlessness" />
            <TabPanelDescription>
              We're the experts in seamlessly integrating services to enhance
              user experiences and streamline processes - innovating
              functionality tailored to your needs. Through strategic
              integration craftsmanship, we connect platforms and data to create
              seamless journeys optimized for efficiency and impact.
            </TabPanelDescription>
          </TabPanel>
          <TabPanel>
            <TabPanelTitle title="Unlocking the Potential of Web3" />
            <TabPanelDescription>
              We craft ingenious blockchain solutions to revolutionize your
              systems and business. With robust architecture and strategic
              design, we engineer trustworthy decentralized networks optimized
              for transparency, security, and efficiency. Our experts seamlessly
              integrate blockchain technology to enhance data value, reinvent
              processes, and enable innovative peer-to-peer interactions.
            </TabPanelDescription>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const TabPanelTitle = ({ title }: { title: string }) => {
  return (
    <Text
      fontWeight="600"
      fontSize={{ base: "14px", sm: "14px", md: "18px" }}
      mb={2}
    >
      {title}
    </Text>
  );
};
const TabPanelDescription = ({ children }: { children: string }) => {
  return (
    <Text fontSize={{ base: "12px", sm: "12px", md: "16px" }} mb={4}>
      {children}
    </Text>
  );
};
export default Services;
