/*
 * @LastEditors: John
 * @Date: 2024-01-22 15:55:09
 * @LastEditTime: 2024-01-22 16:22:41
 * @Author: John
 */
module.exports = {
  name: "expo-app",
  version: process.env.MY_CUSTOM_PROJECT_VERSION || "1.0.0",
  // All values in extra will be passed to your app.
  slug: "expo-app",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.johnzeng2gmail.expotest2",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: ["expo-font"],
};