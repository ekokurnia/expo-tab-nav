import { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import { COLORS } from "../../constants/theme";
import { Button, globalStyles } from "../../components";

interface LoginFormValues {
   username: string;
   password: string;
}
const Login = () => {
   const [showPassword, setShowPassword] = useState(false);

   const initialValues: LoginFormValues = { username: "", password: "" };
   const validationSchema = Yup.object({
      username: Yup.string()
         .min(1, "Must be 1 character or more")
         .max(15, "Must be 15 characters or less")
         .required("Required"),
      password: Yup.string()
         .min(8, "Must be 8 character or more")
         .max(15, "Must be 15 characters or less")
         .required("Required"),
   });
   return (
      <SafeAreaView style={globalStyles.container}>
         <View>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.titleDescription}>Please login to your account</Text>
         </View>
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
               console.log(values);
            }}
         >
            {({ values, errors, touched, isValid, handleChange, handleSubmit }) => (
               <View style={styles.formWrapper}>
                  <View style={styles.inputWrapper}>
                     <View>
                        <TextInput
                           style={styles.input}
                           value={values.username}
                           onChangeText={handleChange("username")}
                           placeholder="username"
                           autoCapitalize="none"
                        />
                        <Text style={styles.inputError}>{errors.username}</Text>
                     </View>
                  </View>
                  <View style={styles.inputWrapper}>
                     <View>
                        <TextInput
                           style={styles.input}
                           value={values.password}
                           onChangeText={handleChange("password")}
                           placeholder="password"
                           secureTextEntry={showPassword ? false : true}
                           autoCapitalize="none"
                        />
                        <Text style={styles.inputError}>{errors.password}</Text>
                     </View>
                     <TouchableOpacity
                        style={styles.showPassword}
                        onPress={() => {
                           setShowPassword(!showPassword);
                        }}
                     >
                        <Ionicons name={showPassword ? "eye-off" : "eye"} size={25} />
                     </TouchableOpacity>
                  </View>
                  <View style={styles.inputButton}>
                     <Button text="Login" onPress={() => handleSubmit()} />
                  </View>
               </View>
            )}
         </Formik>
      </SafeAreaView>
   );
};

export default Login;

const styles = StyleSheet.create({
   title: {
      fontSize: 18,
      fontWeight: "700",
   },
   titleDescription: {
      fontSize: 14,
      marginTop: 5,
      color: COLORS.textMuted,
   },
   formWrapper: {
      marginTop: 30,
   },
   inputWrapper: {
      position: "relative",
   },
   showPassword: {
      position: "absolute",
      top: 10,
      right: 15,
   },
   inputButton: {
      marginTop: 15,
   },
   input: {
      fontSize: 16,
      paddingHorizontal: 15,
      height: 50,
      borderRadius: 10,
      borderColor: "#7a42f4",
      borderWidth: 2,
   },
   inputError: {
      paddingTop: 5,
      paddingLeft: 5,
      paddingBottom: 10,
      fontSize: 12,
      color: "red",
   },
});
