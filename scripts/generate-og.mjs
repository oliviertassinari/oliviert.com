// Generates public/og.png, the social share card. Re-run manually (`pnpm generate:og`)
// whenever the name/tagline/avatar changes — this is not part of the site build.
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/3165635?s=400';
const WIDTH = 1200;
const HEIGHT = 630;

async function loadGoogleFont(family, weight) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`,
    {
      headers: {
        // An old UA gets served .woff (satori can't parse .woff2).
        'User-Agent':
          'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
      },
    },
  ).then((res) => res.text());

  const match = css.match(/\/\* latin \*\/\s*@font-face\s*{[^}]*src: url\(([^)]+)\)/);
  if (!match) throw new Error(`Could not find latin font URL for ${family} ${weight}`);
  return fetch(match[1]).then((res) => res.arrayBuffer());
}

async function loadAvatar() {
  const buffer = await fetch(AVATAR_URL).then((res) => res.arrayBuffer());
  return `data:image/jpeg;base64,${Buffer.from(buffer).toString('base64')}`;
}

const [regular, semibold, avatarDataUri] = await Promise.all([
  loadGoogleFont('Inter', 400),
  loadGoogleFont('Inter', 600),
  loadAvatar(),
]);

const markup = {
  type: 'div',
  props: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      padding: '80px',
      background: '#ffffff',
      fontFamily: 'Inter',
    },
    children: [
      {
        type: 'img',
        props: {
          src: avatarDataUri,
          width: 140,
          height: 140,
          style: { borderRadius: '999px' },
        },
      },
      {
        type: 'div',
        props: {
          style: {
            marginTop: '32px',
            fontSize: '56px',
            fontWeight: 600,
            color: '#09090b',
            letterSpacing: '-0.01em',
          },
          children: 'Olivier Tassinari',
        },
      },
      {
        type: 'div',
        props: {
          style: {
            marginTop: '12px',
            fontSize: '30px',
            fontWeight: 400,
            color: '#71717a',
          },
          children: 'Building UI tooling — CEO & Co-founder at MUI',
        },
      },
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            marginTop: 'auto',
            paddingTop: '48px',
            fontSize: '24px',
            fontWeight: 600,
            color: '#a1a1aa',
            letterSpacing: '0.02em',
          },
          children: 'oliviert.com',
        },
      },
    ],
  },
};

const svg = await satori(markup, {
  width: WIDTH,
  height: HEIGHT,
  fonts: [
    { name: 'Inter', data: regular, weight: 400, style: 'normal' },
    { name: 'Inter', data: semibold, weight: 600, style: 'normal' },
  ],
});

const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng();

const outPath = fileURLToPath(new URL('../public/og.png', import.meta.url));
await writeFile(outPath, png);
console.log(`Wrote ${outPath}`);
