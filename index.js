#!/usr/bin/env node

const rgbToHex = (r, g, b) => {
  const toHex = (num) => {
    const hex = num.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const [r, g, b] = process.argv.slice(2).map(Number);

if ([r, g, b].some((value) => isNaN(value) || value < 0 || value > 255)) {
  console.error("Invalid RGB values. Please provide values between 0 and 255.");
  console.error("Usage: r2hc <r> <g> <b>");
  console.error("Example: r2hc 255 87 51");
  process.exit(1);
}

const hexValue = rgbToHex(r, g, b);

console.log(`RGB: (${r}, ${g}, ${b})`);
console.log(`HEX: ${hexValue}`);

// 색상 미리보기 출력 (터미널 지원 필요)
console.log(`\x1b[48;2;${r};${g};${b}m   COLOR   \x1b[0m`);