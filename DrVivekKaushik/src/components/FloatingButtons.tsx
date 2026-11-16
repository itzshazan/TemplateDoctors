import Icon from "./Icon";
import { SITE, tel } from "@/config/site";

export default function FloatingButtons() {
  return (
    <div className="fab">
      <a className="wa" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <Icon name="whatsapp" />
      </a>
      <a className="call" href={tel(SITE.phone)} aria-label="Call now">
        <Icon name="phone" />
      </a>
    </div>
  );
}
