import { openFacebook, openLinkedin, openTwitter } from "./helper";

export function openExternalApp(name, url) {
  if (name === "facebook") return openFacebook(url);
  if (name === "linkedin") return openLinkedin(url);
  if (name === "twitter") return openTwitter(url);
}
