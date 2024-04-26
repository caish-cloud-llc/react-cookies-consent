import { ChakraProps, Text as ChakraUiText } from '@chakra-ui/react';
import React from 'react';
import { ThemeStyles } from '../constants/types';
import { useStore } from '../services/zustand/store';

interface TextProps extends ChakraProps {
  /**
   * The text.
   */
  children: string;

  /**
   * The default styles for the text.
   */
  defaultStyle: ThemeStyles;

  /**
   * The function to call when the text is clicked.
   */
  onClick?: () => void;

  /**
   * The user-defined styles for the text.
   */
  userDefinedStyle?: ThemeStyles;
}

/**
 * A basic text component for use within the Alert or Modal components.
 * @param props - The properties to pass to the component.
 */
export function Text(props: TextProps) {
  const { defaultStyle, onClick, userDefinedStyle, ...rest } = props;

  const store = useStore();

  /**
   * Gets the styles for the text based on the theme.
   * @returns The styles for the text.
   */
  function getTextStyle(): React.CSSProperties | undefined {
    let tempStyle: React.CSSProperties = {
      ...defaultStyle[store.theme]
    };

    if (userDefinedStyle) {
      tempStyle = {
        ...tempStyle,
        ...(userDefinedStyle[store.theme] ?? {})
      };
    }

    return tempStyle;
  }

  return (
    <ChakraUiText {...rest} onClick={onClick} style={getTextStyle()}>
      {props.children}
    </ChakraUiText>
  );
}
