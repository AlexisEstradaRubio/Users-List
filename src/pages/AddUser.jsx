import React from "react";
import { Formik, useField } from "formik";
import { Button, StyleSheet, View, Text, Alert } from "react-native";
import StyledTextInput from "../components/StyledTextInput.jsx";
import { addUserValidationSchema } from "../validationSchemas/addUser.js";

const initialValues = {
  name: "",
  user: "",
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

const userValid = () => {
  Alert.alert("Usuario valio", "El usuario se registro con exito", [
    {
      text: "Cancel",
    },
    { text: "OK" },
  ]);
};

export default function AddUser() {
  return (
    <Formik
      validationSchema={addUserValidationSchema}
      initialValues={initialValues}
      onSubmit={() => userValid()}
    >
      {({ handleSubmit }) => {
        return (
          <View style={Styles.form}>
            <FormikInputValues name="name" placeholder="Nombre" />
            <FormikInputValues name="user" placeholder="Usuario" />
            <FormikInputValues name="password" placeholder="Password" />
            <Button onPress={handleSubmit} title="Agregar Usuario" />
          </View>
        );
      }}
    </Formik>
  );
}
