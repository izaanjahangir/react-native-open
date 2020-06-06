import { Linking } from "react-native";

export async function openFacebook(url) {
  try {
    const url = `fb://facewebmodal/f?href=${url}`;
    const supported = await Linking.canOpenURL(url);

    if (!supported) throw new Error("Facebook is not available");

    return Linking.openURL(url);
  } catch (e) {
    throw e;
  }
}

export async function openLinkedin(url) {
  try {
    const supported = await Linking.canOpenURL(url);

    if (!supported) throw new Error("Linkedin is not available");

    return Linking.openURL(url);
  } catch (e) {
    throw e;
  }
}

export async function openTwitter(rawUrl = "") {
  try {
    const username = rawUrl.split("com/")[1];
    const url = `twitter://user?screen_name=${username}`;
    const supported = await Linking.canOpenURL(url);

    if (!supported) throw new Error("Twitter is not available");

    return Linking.openURL(url);
  } catch (e) {
    throw e;
  }
}
