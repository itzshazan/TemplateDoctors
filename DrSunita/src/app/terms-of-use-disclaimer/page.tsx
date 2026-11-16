import type { Metadata } from "next";
import { Breadcrumb, InnerBanner } from "@/components/InnerBanner";
import { doctor, images } from "@/data/site";

export const metadata: Metadata = { title: "Terms of Use/Disclaimer" };

// Plain-language terms. Have these reviewed by the practice's legal adviser
// before publishing.
const sections: { title: string; paras: string[] }[] = [
  {
    title: "General",
    paras: [
      `This website is operated by ${doctor.name}. By using it you agree to these terms. If you do not agree, please do not use the site. These terms may be updated from time to time, and continued use of the site means you accept the current version.`,
    ],
  },
  {
    title: "Content",
    paras: [
      "Information on this website is provided for general educational purposes only. It is not medical advice and is not a substitute for an in-person consultation, diagnosis or treatment by a qualified doctor. Always seek professional advice about your health, and in an emergency contact the nearest hospital immediately.",
      "While we try to keep content accurate and up to date, we make no guarantee that it is complete or current. Text, images and other material on the site belong to the practice and may not be reproduced without permission.",
    ],
  },
  {
    title: "Cookies",
    paras: [
      "The site may use cookies and similar technologies, including those set by embedded third-party services such as maps, to function properly and to understand how visitors use it. You can control cookies through your browser settings.",
    ],
  },
  {
    title: "User Submission",
    paras: [
      "Information you send through our forms or by email is used only to respond to your enquiry or arrange an appointment. Please do not send urgent medical information through the website. Forms are not monitored around the clock.",
    ],
  },
  {
    title: "Prohibited Uses",
    paras: [
      "You agree not to use the site for any unlawful purpose; to attempt to gain unauthorised access to it or its systems; to introduce malicious code; or to copy, scrape or republish its content without written permission.",
    ],
  },
  {
    title: "Limitation of Liability",
    paras: [
      "To the fullest extent permitted by law, the practice is not liable for any loss or damage arising from use of, or reliance on, this website or any linked third-party website. Links to external sites are provided for convenience and do not imply endorsement.",
    ],
  },
  {
    title: "Indemnity",
    paras: [
      "You agree to indemnify the practice against any claims, losses or expenses resulting from your breach of these terms or misuse of the website.",
    ],
  },
  {
    title: "Applicable Law and Jurisdiction",
    paras: [
      "These terms are governed by the laws of India. Any dispute is subject to the exclusive jurisdiction of the courts at Gurugram, Haryana.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <InnerBanner image={images.innerBanners.services} />
      <Breadcrumb trail={[{ label: "Terms of Use/Disclaimer" }]} />
      <div className="inner-cont terms">
        <div className="lay-width">
          <h4>{doctor.name}</h4>
          <h2>Terms of Use/Disclaimer</h2>
          {sections.map((s, i) => (
            <section key={s.title}>
              <h3>
                {i + 1}. {s.title}:
              </h3>
              {s.paras.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
