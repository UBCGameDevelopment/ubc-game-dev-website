const fallbackDecodeHtmlEntities = (value: string) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");

let decoderNode: HTMLTextAreaElement | null = null;

export const decodeTypewriterText = (value: string) => {
  if (!value.includes("&")) {
    return value;
  }

  if (typeof document === "undefined") {
    return fallbackDecodeHtmlEntities(value);
  }

  decoderNode ??= document.createElement("textarea");
  decoderNode.innerHTML = value;
  return decoderNode.value;
};

export const splitTypewriterText = (value: string) => Array.from(decodeTypewriterText(value));
