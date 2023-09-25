import React from "react";
import { Formik, useField } from "formik";
import { Button, StyleSheet, View, Text, Alert } from "react-native";
import StyledTextInput from "../components/StyledTextInput.jsx";
import { loginValidationSchema } from "../validationSchemas/login.js";
import { redirect } from "react-router-native";

const initialValues = {
  email: "",
  password: "",
};

const Styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 15,
    marginBottom: 20,
    marginTop: -5,
  },
  form: {
    margin: 12,
  },
});

const FormikInputValues = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <Text style={Styles.error}>{meta.error}</Text>}
    </>
  );
};

const userNotValid = () =>
  Alert.alert(
    "Usuario no valido",
    "El usuario que ingresaste no está registrado",
    [
      {
        text: "Cancel",
      },
      { text: "OK" },
    ]
  );

const validateUsers = (userData) => {
  const { email, password } = userData;

  if (email.toLowerCase() === "admin" && password.toLowerCase() === "test") {
    return redirect("/userList");
  } else {
    return userNotValid();
  }
};

export default function LogInPage() {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => validateUsers(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={Styles.form}>
            <FormikInputValues name="email" placeholder="E-mail" />
            <FormikInputValues
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
}
