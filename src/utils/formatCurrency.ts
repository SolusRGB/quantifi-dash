/**
 * Format a number into a currency string.
 * @param num - The number to format.
 * @param includeDecimals - Whether to include decimals in the formatted string.
 * @returns The formatted currency string.
 *
 * Used in src/components/ProjectCard.tsx
 */

export function formatCurrency(num: number, includeDecimals = true): string {
  let formattedNumber = num;

  if (num >= 1e9) {
    formattedNumber = num / 1e9;
    return `$${
      includeDecimals ? formattedNumber.toFixed(2) : formattedNumber.toFixed(0)
    }B`;
  } else if (num >= 1e6) {
    formattedNumber = num / 1e6;
    return `$${
      includeDecimals ? formattedNumber.toFixed(2) : formattedNumber.toFixed(0)
    }M`;
  } else if (num >= 1e3) {
    formattedNumber = num / 1e3;
    return `$${
      includeDecimals ? formattedNumber.toFixed(2) : formattedNumber.toFixed(0)
    }K`;
  } else {
    return `$${includeDecimals ? num.toFixed(2) : num.toFixed(0)}`;
  }
}
