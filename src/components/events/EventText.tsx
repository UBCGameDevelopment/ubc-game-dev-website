const timeRange = /\b\d{1,2}:\d{2} [AP]M [–-] \d{1,2}:\d{2} [AP]M\b/;

/** Emphasize session times and inline bold text while keeping copy escaped. */
export default function EventText({ text }: { text: string }) {
  return text.split(new RegExp(`(\\*\\*[^*]+\\*\\*|${timeRange.source})`, "g")).map((part, index) => {
    const isBold = part.startsWith("**") && part.endsWith("**");
    const isTimeRange = timeRange.test(part);

    return isBold || isTimeRange ? (
      <strong
        key={index}
        className={`font-bold text-[var(--text)]${isTimeRange ? " underline underline-offset-4" : ""}`}
      >
        {isBold ? part.slice(2, -2) : part}
      </strong>
    ) : part;
  });
}
