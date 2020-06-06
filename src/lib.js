import { openFacebook } from "./helper";

export function openExternalApp(name, url) {
  if (name === "facebook") return openFacebook(url);
}
