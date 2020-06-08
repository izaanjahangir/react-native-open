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

export async function openInstagram(rawUrl) {
  try {
    const username = extractUsernameFromSocialLink(rawUrl);

    const url =
      Platform.OS === "ios"
        ? `instagram://user?username=${username}`
        : `instagram://user?username=${username}`;

    const supported = await Linking.canOpenURL(url);

    if (!supported) throw new Error("Instagram is not available");

    return Linking.openURL(url);
  } catch (e) {
    throw e;
  }
}

export async function openYoutubeChannel(rawUrl) {
  try {
    const channel = extractChannelIdFromYoutubeLink(rawUrl);

    const url =
      Platform.OS === "ios" ? `youtube://${rawUrl}` : `youtube://${rawUrl}`;

    const supported = await Linking.canOpenURL(url);

    if (!supported) throw new Error("Youtube is not available");

    return Linking.openURL(url);
  } catch (e) {
    throw e;
  }
}

function extractChannelIdFromYoutubeLink(url = "") {
  return url.split("channel/")[1];
}

function extractUsernameFromSocialLink(url = "") {
  return url.split("com/")[1];
}
