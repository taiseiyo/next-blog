import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    };
}
  
export default function Award() {
  return (
    <>
      <header id="header" className="wrapper">
	<Link href={"/"}><h1 className="site-title"><a>Profile</a></h1></Link>
	
      </header>
      
      <main>

	<div className="bg"></div>
	<div className="bg bg2"></div>
	<div className="bg bg3"></div>

	<ul className="paper">
	  <h2>論文投稿</h2>
	  <li>2021 年 電子情報通信学会 ソサイエティ大会(シンポジウムセッション)</li>
	  <li>2021 年 電子情報通信学会 ソサイエティ大会</li>
	  <li>The 34th International Conference on Information Networking (ICOIN 2020)</li>
	  <li>2020 International Conference on Emerging Technologies for Communications</li>
	  <li>2020 Technical Committee on Internet Architecture (IA)</li>
	  <li>2020 年 電子情報通信学会 ソサイエティ大会</li>
	  <li>2020 年 電子情報通信学会総合大会</li>
	  <li>2019 年 電子情報通信学会 ソサイエティ大会</li>
	  <li>2019 年 インターネットアーキテクチャ研究会</li>
	</ul>
	
	<ul className="award">
	  <h2>受賞歴</h2>
	  <li>富士通 Hack the Future 最優秀賞受賞</li>
	  <li>International Conference on Emerging Technologies for Communications(共著)<br/>Student Presentation Award 受賞</li>
	  <li>ソフトバンク AI 人材育成スカラーシップ奨学金受賞</li>
	  <li>インターネットアーキテクチャ研究会学生研究奨励賞受賞</li>
	</ul>
	
      </main>
      
      <footer>
	<p>&copy; 2021 Profile</p>
      </footer>

    </>
  );
}
