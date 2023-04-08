import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.png" />
        <meta property="og:title" content="The Game - Premium Gaming Lounge" />
        <meta property="og:site_name" content="the-game.vercel.app" />
        <meta property="og:url" content="https://dev-the-game-qertyu.vercel.app/" />
        <meta property="og:description" content="The Game is a premium gaming lounge that offers an unparalleled level of comfort, service, and equipment for an exceptional gaming experience. Relax and have a good time while playing games on the world's most powerful gaming computer or stream live from the Streaming Room. Invite your friends for a buddy championship and enjoy snacks, drinks, and live TV in the lounge area. For a romantic date, the lounge also features a state-of-the-art cinema that can accommodate both intimate and large groups. The Game has everything you need for a fun and comfortable time with your friends, partners, or lovers." />
        <meta property="og:image" content="https://drive.google.com/uc?export=view&id=1DUTThENskj50rsMBqcDxZ24ZeLmPdW6h" />
        <meta property="og:image:width" content="968" />
        <meta property="og:image:height" content="504" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}