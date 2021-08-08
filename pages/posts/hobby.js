import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    };
}

export default function Hobby() {
    
    return (
      <>
        <header id="header" className="wrapper">
          <Link href={"/"}><h1 className="site-title"><a>Profile</a></h1></Link>
        </header>
        
        <main>
	  <div className="bg"></div>
	  <div className="bg bg2"></div>
	  <div className="bg bg3"></div>
          
	  <ul className="indoor">
	    <h2>インドア系</h2>
	    <li>コーディング</li>
	    <li>漫画・アニメ鑑賞</li>
	  <li>スマホゲーム(モンスト・ CoD)</li>
	  </ul>
          
	  <ul className="outdoor">
	    <h2>アウトドア系</h2>
	    <li>バスケットボール</li>
	    <li>野球鑑賞(阪神ファン)</li>
	  </ul>
          
        </main>
        
        <footer>
	  <p>&copy; 2021 Profile</p>
        </footer>
        
      </>
    );
}
