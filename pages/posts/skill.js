import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    };
}

export default function Skill() {
    
    return (
	<>
          <header id="header" className="wrapper">
            <Link href={"/"}><h1 className="site-title"><a>Profile</a></h1></Link>
          </header>
          
          <main>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>

            <ul className="skill">
	      <h2>プログラミングスキル</h2>
	      <li>Python</li>
	      <li>Shell Script(bash)</li>
	      <li>JavaScript</li>
	      <li>Google Apps Script</li>
	      <li>Emacs Lisp</li>
	      <li>C++</li>
	      <li>HTML,CSS</li>
            </ul>

            <ul className="server">
	      <h2>サーバー知識</h2>
	      <li>Linux 系統の OS 知識</li>
	      <li>AWS(EC2)</li>
	      <li>Docker</li>
            </ul>
            
          </main>

          <footer>
            <p>&copy; 2021 Profile</p>
          </footer>

	</>
    );
}
