import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/tooltip";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={colorMode === "light" ? "Dark Mode" : "Light Mode"}>
      <IconButton
        aria-label="Toggle Dark Switch"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        width="72"
      />
    </Tooltip>
  );
};

export default ColorMode;
