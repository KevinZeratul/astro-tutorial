/**
 * Estimate reading time from text content.
 * Chinese text: ~300 characters per minute
 * English text: ~200 words per minute
 */
export function getReadingTime(text: string): number {
  if (!text) return 1;
  const chineseChars = (text.match(/[一-鿿㐀-䶿]/g) || []).length;
  if (chineseChars > text.length * 0.3) {
    return Math.max(1, Math.ceil(chineseChars / 300));
  }
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Estimate reading time from post description (rough: desc is ~1/7 of full post) */
export function estimateReadingTime(description?: string): number {
  if (!description) return 2;
  const descWords = description.trim().split(/\s+/).filter(Boolean).length;
  const descChinese = (description.match(/[一-鿿㐀-䶿]/g) || []).length;
  const totalWords = descWords * 7;
  const totalChinese = descChinese * 7;
  if (totalChinese > totalWords * 1.5) {
    return Math.max(1, Math.ceil(totalChinese / 300));
  }
  return Math.max(1, Math.ceil(totalWords / 200));
}
