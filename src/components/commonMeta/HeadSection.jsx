import Head from 'next/head'

const CommonMeta = (props) => {
    const title = "となりのプロテイン"; 
    const description = "【VALX公式】山本義徳監修の高品質のこだわり抜いたプロテインとサプリメントを販売するバルクス公式オンラインストア。VALXはアスリートだけでなく、誰にでもおすすめのサプリメントを提供します。「本物」を追求し、時代の最先端を行くフィットネスブランドです。" ;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.SITE_URL}/ogp_large.png`} />
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
  )}


export default CommonMeta;