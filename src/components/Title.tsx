import { Heading } from "@chakra-ui/react";

const Title = ({ title }: { title: string }) => {
  return (
    <Heading as="h1" variant="custom">
      {title}
    </Heading>
  );
};

export default Title;
