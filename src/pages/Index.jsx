import { Box, Button, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as Tone from "tone";

const keys = [
  { note: "C4", label: "C" },
  { note: "D4", label: "D" },
  { note: "E4", label: "E" },
  { note: "F4", label: "F" },
  { note: "G4", label: "G" },
  { note: "A4", label: "A" },
  { note: "B4", label: "B" },
  { note: "C5", label: "C" },
];

const Index = () => {
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    const newSynth = new Tone.Synth().toDestination();
    setSynth(newSynth);
  }, []);

  const playNote = (note) => {
    if (synth) {
      synth.triggerAttackRelease(note, "8n");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.900" color="white">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Virtual Piano</Text>
        <Text fontSize="lg">Press the keys to play music</Text>
        <Flex>
          {keys.map((key) => (
            <Button key={key.note} onClick={() => playNote(key.note)} m={1} p={6} bg="gray.700" _hover={{ bg: "gray.600" }}>
              {key.label}
            </Button>
          ))}
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;