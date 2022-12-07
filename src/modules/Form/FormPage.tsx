import {Center, Heading, KeyboardAvoidingView, VStack} from 'native-base';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';
import {Lock, Mail, User} from 'react-native-feather';
import {CustomButton} from '../../components/CustomButton/CustomButton';
import {CustomInput} from '../../components/CustomInput/CustomInput';

type FormType = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const FormPage = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormType>();

  const handleSignup = (formData: FormType) => {
    console.log(formData);
  };
  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <VStack alignItems="center" paddingX={6} flex={1} paddingY={8}>
          <Heading>Create account</Heading>

          <Center flex={1} w="full">
            <Controller
              rules={{
                required: 'O campo é obrigatório',
              }}
              control={control}
              name="name"
              render={({field: {onChange}}) => (
                <CustomInput
                  marginBottom={3}
                  placeholder="Digite seu nome"
                  icon={<User />}
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({field: {onChange}}) => (
                <CustomInput
                  marginBottom={3}
                  placeholder="Digite seu email"
                  keyboardType="email-address"
                  icon={<Mail />}
                  onChangeText={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({field: {onChange}}) => (
                <CustomInput
                  marginBottom={3}
                  placeholder="Digite sua senha"
                  icon={<Lock />}
                  isPasswordInput
                  onChangeText={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="confirm_password"
              render={({field: {onChange}}) => (
                <CustomInput
                  marginBottom={3}
                  placeholder="Confirme sua senha"
                  icon={<Lock />}
                  isPasswordInput
                  onChangeText={onChange}
                />
              )}
            />
            <CustomButton
              marginTop={3}
              pressedButtonColor="green.900"
              buttonColor="green.700"
              title="Cadastrar"
              marginBottom={2}
              onPress={handleSubmit(handleSignup)}
            />
          </Center>
        </VStack>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default FormPage;
