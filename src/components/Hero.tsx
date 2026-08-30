import * as React from 'react';
import { Tooltip } from '@base-ui/react/tooltip';
import { Dialog } from '@base-ui/react/dialog';
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  MapPinIcon,
  BriefcaseIcon,
  CloseIcon,
} from './icons';
import styles from './Hero.module.css';
import { getCloudflareImage, getSrcSet } from '../utils';

const socials = [
  { label: 'GitHub', href: 'https://github.com/oliviertassinari', Icon: GithubIcon },
  { label: 'X / Twitter', href: 'https://x.com/olivtassinari', Icon: TwitterIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oliviertassinari/', Icon: LinkedInIcon },
];

const avatarUrl = 'https://avatars.githubusercontent.com/u/3165635';

export default function Hero() {
  return (
    <header className={styles.Hero}>
      <link
        rel="preload"
        as="image"
        href={getCloudflareImage(avatarUrl, 480)}
        imageSrcSet={getSrcSet(avatarUrl, 480)}
        fetchPriority="low"
      />
      <Dialog.Root>
        <Dialog.Trigger className={styles.heroAvatar} aria-label="Open photo of Olivier Tassinari">
          <img
            src={getCloudflareImage(avatarUrl, 80)}
            srcSet={getSrcSet(avatarUrl, 80)}
            alt=""
            width="80"
            height="80"
          />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop className={styles.avatarBackdrop} />
          <Dialog.Popup className={styles.avatarPopup} aria-label="Photo of Olivier Tassinari">
            <div className={styles.avatarImage}>
              <img
                src={getCloudflareImage(avatarUrl, 480)}
                srcSet={getSrcSet(avatarUrl, 480)}
                alt="Olivier Tassinari"
                width="480"
                height="480"
              />
            </div>
            <Dialog.Close className={styles.avatarClose} aria-label="Close">
              <CloseIcon size={18} />
            </Dialog.Close>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
      <h1 className={styles.heroName}>Olivier Tassinari</h1>
      <p className={styles.heroTagline}>Building UI tooling.</p>
      <ul className={styles.heroMeta}>
        <li>
          <BriefcaseIcon size={14} aria-hidden="true" />
          CEO & Co-founder at MUI
        </li>
        <li>
          <MapPinIcon size={14} aria-hidden="true" />
          Paris, France
        </li>
      </ul>
      <Tooltip.Provider delay={200}>
        <ul className={styles.heroSocials}>
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <Tooltip.Root>
                <Tooltip.Trigger
                  render={
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      aria-label={label}
                      className={styles.SocialLink}
                    >
                      <Icon size={18} />
                    </a>
                  }
                />
                <Tooltip.Portal>
                  <Tooltip.Positioner sideOffset={8}>
                    <Tooltip.Popup className="tooltip-popup">{label}</Tooltip.Popup>
                  </Tooltip.Positioner>
                </Tooltip.Portal>
              </Tooltip.Root>
            </li>
          ))}
        </ul>
      </Tooltip.Provider>
    </header>
  );
}
