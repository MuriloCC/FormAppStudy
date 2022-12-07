import {FormControl, Icon, Input, Pressable} from 'native-base';
import React, {ReactNode, useState} from 'react';
import {KeyboardTypeOptions} from 'react-native';
import {AlertCircle, Eye, EyeOff} from 'react-native-feather';
import {IMarginTypes} from '../../types/sharedTypes';

type ICustomInputPropsType = IMarginTypes & {
  icon?: ReactNode;
  placeholder?: string;
  label?: string;
  isPasswordInput?: boolean;
  keyboardType?: KeyboardTypeOptions;
  errorMessage?: string;
  onChangeText?: (text: string) => void;
};

export const CustomInput = ({
  icon,
  label,
  placeholder,
  isPasswordInput,
  marginX,
  marginY,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  margin,
  keyboardType,
  errorMessage,
  onChangeText,
}: ICustomInputPropsType) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl
      isInvalid={!!errorMessage}
      margin={margin}
      marginX={marginX}
      marginBottom={marginBottom}
      marginY={marginY}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        variant="filled"
        bg="gray.200"
        onChangeText={onChangeText}
        _focus={{
          borderWidth: 2,
          borderColor: 'blue.400',
        }}
        placeholder={placeholder && placeholder}
        h={12}
        fontSize={14}
        keyboardType={keyboardType}
        InputLeftElement={<Icon marginX={2} as={icon && icon} size={5} />}
        type={!showPassword && isPasswordInput ? 'password' : 'text'}
        InputRightElement={
          isPasswordInput ? (
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Icon
                marginX={2}
                as={showPassword ? <EyeOff /> : <Eye />}
                size={5}
              />
            </Pressable>
          ) : undefined
        }
      />
      <FormControl.ErrorMessage
        leftIcon={<Icon as={<AlertCircle width={16} />} />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
