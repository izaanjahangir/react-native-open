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
