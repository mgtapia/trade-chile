import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang="es">
      <Head>
	      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" defer/>
	      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
	      <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
	      <link rel="apple-touch-icon" href="/favicon.ico"/>
	    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;