import type { Locale } from "./types";

/**
 * Returns the base content, with French display-text overrides applied when
 * the locale is "fr". Identifiers and structural fields are never touched:
 * only the fields explicitly listed in `fr` are replaced.
 */
export function localized<T extends object>(
  locale: Locale,
  base: T,
  fr?: Partial<T>
): T {
  return locale === "fr" && fr ? { ...base, ...fr } : base;
}
