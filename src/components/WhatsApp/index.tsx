import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

const WhatsAppIcon = () => {
  return (
    <Link className="fixed bottom-8 left-8" href="#">
      <IconBrandWhatsapp />
    </Link>
  );
};

export default WhatsAppIcon;
