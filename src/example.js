import React from "react";
import Select, { CreatableSelect } from "./chakra-react-select";
import {
  Container,
  Text,
  Link,
  FormControl,
  FormLabel,
  Code,
  FormErrorMessage
} from "@chakra-ui/react";
import { groupedOptions, colourOptions } from "./docs/data";

const mappedColourOptions = colourOptions.map((option) => ({
  ...option,
  colorScheme: option.value
}));

export default () => (
  <Container mb={12}>
    <Text p={4} fontSize="lg">
      This wrapper now has its own NPM package:{" "}
      <Link
        isExternal
        color="blue.500"
        fontWeight="bold"
        href="https://www.npmjs.com/package/chakra-react-select"
      >
        https://www.npmjs.com/package/chakra-react-select
      </Link>
    </Text>
    <FormControl p={4}>
      <FormLabel>
        Select Colors and Flavours <Code>size="sm"</Code>
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        size="sm"
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Select Colors and Flavours <Code>size="md" (default)</Code>
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Select Colors and Flavours <Code>size="lg"</Code>
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
        size="lg"
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Select Colors and Flavours (With global <Code>colorScheme</Code>)
      </FormLabel>
      <Select
        isMulti
        name="colors"
        colorScheme="purple"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Select Colors and Flavours (With <Code>colorScheme</Code> in each
        option)
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={mappedColourOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>Select with creatable options</FormLabel>
      <CreatableSelect
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4} isDisabled>
      <FormLabel>
        Disabled select from the <Code>FormControl</Code>
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Disabled select from the <Code>Select</Code> element itself
      </FormLabel>
      <Select
        isDisabled
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4} isInvalid>
      <FormLabel>
        Invalid select from the <Code>FormControl</Code>
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
      <FormErrorMessage>
        This error message shows because of an invalid FormControl
      </FormErrorMessage>
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Invalid select from the <Code>Select</Code> element itself
      </FormLabel>
      <Select
        isInvalid
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
      <FormErrorMessage>
        You can't see this error message because the isInvalid prop is set on
        the select element instead of the form control
      </FormErrorMessage>
    </FormControl>
  </Container>
);
