import {
  openFacebook,
  openLinkedin,
  openTwitter,
  openInstagram,
} from "./helper";

export function openExternalApp(name, url) {
  if (name === "facebook") return openFacebook(url);
  if (name === "linkedin") return openLinkedin(url);
  if (name === "twitter") return openTwitter(url);
  if (name === "instagram") return openInstagram(url);
}
