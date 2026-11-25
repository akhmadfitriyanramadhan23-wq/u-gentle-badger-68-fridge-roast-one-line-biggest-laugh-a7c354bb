import { mkdirSync, writeFileSync } from "node:fs";

// A one-line roast of a smart fridge, 200 characters at most:
// rule -> literal violation -> flat consequence. The fridge has
// a camera, an app and opinions about the owner's milk, yet its
// ice maker has quit and the app's only fix is a notification
// telling the owner to go and buy ice instead.
const lines = [
  "This fridge has a camera, an app, and opinions about my milk — yet the ice maker retired, and the app just notified me: 'Have you tried buying ice?'",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-200 characters and exactly one line.
// Character count is measured on the line itself, without the newline.
const lineChars = [...lines[0]].length;
if (lineChars < 1 || lineChars > 199) {
  throw new Error(`entry must be 1-199 characters, got ${lineChars}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
