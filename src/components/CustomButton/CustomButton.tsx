import {Button, Icon} from 'native-base';
import {ColorType} from 'native-base/lib/typescript/components/types';
import React, {ReactNode} from 'react';
import {GestureResponderEvent} from 'react-native';
import {IMarginTypes} from '../../types/sharedTypes';

type ICustomButtonPropsType = IMarginTypes & {
  icon?: ReactNode;
  title: string;
  buttonColor: ColorType;
  pressedButtonColor?: ColorType;
  onPress?: ((event: GestureResponderEvent) => void) | null;
};

export const CustomButton = ({
  icon,
  title,
  buttonColor,
  pressedButtonColor,
  marginX,
  marginY,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  margin,
  onPress,
}: ICustomButtonPropsType) => {
  return (
    <Button
      onPress={onPress}
      margin={margin}
      marginX={marginX}
      marginBottom={marginBottom}
      marginY={marginY}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      _pressed={{bg: pressedButtonColor}}
      bg={buttonColor}
      w="full"
      h={12}
      fontSize={14}>
      {icon && <Icon marginX={2} as={icon} size={5} />}
      {title}
    </Button>
  );
};
