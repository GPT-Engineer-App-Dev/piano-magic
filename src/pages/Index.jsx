import { Box, Button, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as Tone from "tone";

const keys = [
  { note: "C4", label: "C", key: "a" },
  { note: "D4", label: "D", key: "s" },
  { note: "E4", label: "E", key: "d" },
  { note: "F4", label: "F", key: "f" },
  { note: "G4", label: "G", key: "g" },
  { note: "A4", label: "A", key: "h" },
  { note: "B4", label: "B", key: "j" },
  { note: "C5", label: "C", key: "k" },
];

const Index = () => {
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    const newSynth = new Tone.Synth().toDestination();
    setSynth(newSynth);

    const handleKeyDown = (event) => {
      console.log(`Key pressed: ${event.key}`);
      const key = keys.find(k => k.key === event.key);
      if (key) {
        console.log(`Playing note: ${key.note}`);
        playNote(key.note);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const playNote = (note) => {
    if (synth) {
      synth.triggerAttackRelease(note, "8n");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="background.100" color="text.900">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Virtual Piano</Text>
        <Text fontSize="lg">Press the keys to play music</Text>
        <Flex>
          {keys.map((key) => (
            <Button key={key.note} onClick={() => playNote(key.note)} m={1} p={6} bg="background.300" _hover={{ bg: "background.400" }}>
              {key.label} ({key.key.toUpperCase()})
            </Button>
          ))}
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;