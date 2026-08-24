import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy of Kazak Mining Hub — how your data is handled when you use this website.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
