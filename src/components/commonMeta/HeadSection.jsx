import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const CommonMeta = (props) => {
    const title = props.title?props.title + " | となりのプロテイン":"となりのプロテイン"; 
    const description = "プロテイン(プロテイン サプリメント)をお探しならとなりのプロテインへ。Amazonで人気のプロテインを厳選して紹介。健康的なライフスタイルをサポートする高品質のプロテインを見つけるならこちら！ダイエットや筋肉増強に最適なプロテインをお手頃価格で購入できます。" ;
    
    const router = useRouter();
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const fullUrl = `${window.location.protocol}//${window.location.host}${router.asPath}`;
            setCurrentUrl(fullUrl);
        }
    }, [router.asPath]);

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title}</title>
      <meta property="description" content={description} />
      <meta name="keywords" content="Amazon, プロテイン, ダイエット, 筋肉増強, 健康, 高品質, お手頃価格" />
      <meta name="robots" content="index, follow"/>

      <meta property="og:title" content={title} />
      <meta property="og:description" content='高品質・お手頃価格のプロテインを厳選紹介。健康的なライフスタイルをサポート。' />
      <meta property="og:image" content="/assets/images/ogp_image.png"/>
      <meta property="og:url" content={currentUrl}/>
      <meta property="og:type" content="website"/>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Amazonのプロテイン特集" />
      <meta name="twitter:description" content="高品質・お手頃価格のプロテインを厳選紹介。健康的なライフスタイルをサポート。" />
      <meta name="twitter:image" content="/assets/images/ogp_image.png" />

      <link rel="icon" type="image/png" sizes="16x16" href="/favicon_16x16.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon_32x32.png"></link>
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon_48x48.png"></link>
      <link rel="icon" type="image/png" sizes="64x64" href="/favicon_64x64.png"></link>

      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z1RMTCDRVJ"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Z1RMTCDRVJ');
      </script>
    </Head>
  )}


export default CommonMeta;