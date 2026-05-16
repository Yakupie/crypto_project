export function formatNumber(num?: number) {
  if (num == null) return "-";

  const abs = Math.abs(num);

  if (abs >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + "B";
  }

  if (abs >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  }

  if (abs >= 1_000) {
    return (num / 1_000).toFixed(1) + "K";
  }

  return num.toString();
}