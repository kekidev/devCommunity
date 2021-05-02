import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/tooltip";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={colorMode === "light" ? "다크모드" : "라이트 모드"}>
      <IconButton
        aria-label="컬러 바꾸기"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        width="72"
      />
    </Tooltip>
  );
};

export default ColorMode;
