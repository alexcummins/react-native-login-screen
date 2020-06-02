import { StyleSheet } from "react-native";
import {
  ScreenWidth,
  ScreenHeight,
  isIPhoneXFamily
} from "@freakycoder/react-native-helpers";

export const container = loginButtonBackgroundColor => {
  return {
    marginBottom: 32,
    width: ScreenWidth,
    height: ScreenHeight,
    backgroundColor: loginButtonBackgroundColor
  };
};

export default {
  spinnerStyle: {
    left: 0,
    right: 0,
    zIndex: 9,
    height: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: isIPhoneXFamily() ? 24 : 12
  },
  loginButtonStyle: {
    left: 0,
    right: 0,
    zIndex: 9,
    height: 100,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: isIPhoneXFamily() ? 24 : 12
  },
  loginButtonTextStyle: {
    color: "white",
    fontSize: 15
  },
  imagebackgroundStyle: {
    flex: 1,
    zIndex: -1,
    width: ScreenWidth,
    height: ScreenHeight,
    ...StyleSheet.absoluteFillObject
  },
  blackoverlay: {
    width: ScreenWidth,
    height: ScreenHeight,
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  safeAreaViewStyle: {
    flex: 1
  },
  loginContainer: {
    marginTop: 24
  }
};
