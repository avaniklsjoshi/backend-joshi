import { Tooltip } from "@mui/material";
import { useState } from "react";
import { Github } from "../../Assets/SVG/Github";
import { Gitlab } from "../../Assets/SVG/Gitlab";
import { LinkedIn } from "../../Assets/SVG/LinkedIn";
import { Share } from "../../Assets/SVG/Share";
import { Twitter } from "../../Assets/SVG/Twitter";
import { SOCIAL_LINKS } from "../../Configs/Constants/const";
import "./footer.scss";

export default function Social() {
  const [open, setOpen] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <div>
      <a
        href={SOCIAL_LINKS.TWITTER}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter Avani"
        className="social-links"
      >
        <Twitter />
      </a>
      <a
        href={SOCIAL_LINKS.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Avani"
        className="social-links"
      >
        <LinkedIn />
      </a>
      <a
        href={SOCIAL_LINKS.GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github Avani"
        className="social-links"
      >
        <Github />
      </a>
      <a
        href={SOCIAL_LINKS.GITLAB}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="gitlab Avani"
        className="social-links"
      >
        <Gitlab />
      </a>
      <Tooltip
        PopperProps={{
          disablePortal: true
        }}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title="🎉 Link Copied!"
      >
        <button onClick={handleShare} className="share-button">
          <Share />
        </button>
      </Tooltip>
    </div>
  );
}
