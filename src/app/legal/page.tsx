import type { Metadata } from "next";
import LegalNoticeContent from "@/components/LegalNoticeContent";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Legal notice and company information for Kazak Mining Hub, a division of Kazak Ltd., Madagascar.",
};

export default function LegalNoticePage() {
  return <LegalNoticeContent />;
}
