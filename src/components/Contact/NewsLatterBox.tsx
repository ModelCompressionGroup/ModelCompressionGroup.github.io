"use client";

import { useTheme } from "next-themes";
import MailerLiteForm from "../Common/MailerLiteForm";

const NewsletterBox = () => {
  const { theme } = useTheme();

  return (
    <div>
      <MailerLiteForm />
    </div>
  );
};

export default NewsletterBox;
