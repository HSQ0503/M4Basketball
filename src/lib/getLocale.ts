import { cookies } from "next/headers";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const raw = cookieStore.get("locale")?.value;
  if (raw && (locales as readonly string[]).includes(raw)) {
    return raw as Locale;
  }
  return defaultLocale;
}
