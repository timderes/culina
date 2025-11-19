import { Text, type TextProps } from "@mantine/core";

type DarkenedTextProps = TextProps & React.PropsWithChildren;

const DarkenedText = ({ children, ...props }: DarkenedTextProps) => {
  return (
    <Text opacity={0.9} {...props}>
      {children}
    </Text>
  );
};

export default DarkenedText;
