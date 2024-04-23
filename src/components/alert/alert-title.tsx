import { AlertContainer } from '@/components/alert/alert-container';
import { AlertText } from '@/components/alert/alert-text';
import { ThemeStyles } from '@/constants/types';
import React from 'react';

export type AlertTitleProps = {
  /**
   * The text to display as the title.
   */
  children: string;

  /**
   * The styles for the container of the title.
   */
  containerStyle?: ThemeStyles;

  /**
   * The styles for the title text.
   */
  textStyle?: ThemeStyles;
};

/**
 * The title of the alert.
 * @param props - The properties to pass to the component.
 */
export function AlertTitle(props: AlertTitleProps) {
  return (
    <AlertContainer
      containerStyle={props.containerStyle}
      defaultContainerStyle={defaultContainerStyle}
    >
      <AlertText
        defaultTextStyle={defaultTextStyle}
        textStyle={props.textStyle}
      >
        {props.children}
      </AlertText>
    </AlertContainer>
  );
}

const defaultContainerStyle: React.CSSProperties = {};

const defaultTextStyle: React.CSSProperties = {};
