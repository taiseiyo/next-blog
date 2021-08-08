import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import picCode from '../public/static/code.jpg';
import picCastle from '../public/static/castle.jpg';

export default function Home() {

  
    return (
      <>

	<header id="header" className="wrapper" style={{top:"35px",position:"relative"}}>

          <Link href={"/"}><a className="site-top">Profile</a></Link>
          
	<nav>
	  <div className="ham" id="ham">
	    <span className="ham_line ham_line1"></span>
	    <span className="ham_line ham_line2"></span>
	    <span className="ham_line ham_line3"></span>
	  </div>
	  
	  <div className="menu_wrapper">
	  <div className="menu"  id="menu_wrapper">
	    <ul>
	      <li><a href="#about">About</a></li>
	      <li><a href="#news">News</a></li>
	      <li><a href="#more">More</a></li>
	      <li><a href="#contact">Contact</a></li>
	    </ul>
	  </div>
	  </div>
          <Script strategy="lazyOnload"> 
            {`
               document.getElementById('ham').addEventListener('click', function() { 
                 document.getElementById('ham').classList.toggle('ham_clicked'); 
                 document.getElementById('menu_wrapper').classList.toggle('menu_clicked'); 
              }); 
             `}             
          </Script>
	</nav>
	</header>
	
        
	<main>     
	  <div className="bg"></div>
	  <div className="bg bg2"></div>
	  <div className="bg bg3"></div>
	  <Image src={picCode} alt="Picture of the author" />
          
	  <section id="about" className="wrapper">
	    <h2 className="section-title">About</h2>
	    <div className="content">

              <Image src={picCastle} alt="Picture of the author" />
              
              
	<p>
	  関西学院大学を卒業後、関西学院大学院に入学
	  国際学会などの学会で複数の論文発表を行う
	</p>
	    </div>
	  </section>

	  <section id="news" className="wrapper">
	    <h2 className="section-title">News</h2>
	    <ul>
	      <li>
	        <h3 className="content-title">論文投稿しました</h3>
	        <p>globecom 2021 に論文を <br/>1 件投稿しました</p>
	      </li>
	      <li>
	        <h3 className="content-title">富士通ハッカソンで最優秀賞受賞</h3>
	        <p>2020 年の 12 月に行われた富士通「hack the future」で最優秀賞を受賞しました</p>
	        
	      </li>
	      <li>
	        <h3 className="content-title">Softbank AI 人材奨学金受賞</h3>
	        <p>
	          Softbank から AI 人材育成奨学金を頂きました
	        </p>
	      </li>
	      
	    </ul>
	  </section>
	  
	  <section id="more" className="wrapper">
	    <h2 className="section-title">More</h2>
	    <ul className="more_list">
	      <li>
                <Link href={"/posts/award"}><a className="button">受賞歴</a></Link>
	        
	      </li>
	      
	      <li>
                <Link href={"/posts/skill"}><a className="button">スキル一覧</a></Link>
	        
	      </li>
	      
	      <li>
                <Link href={"/posts/hobby"}><a className="button">趣味</a></Link>
	        

	      </li>

	    </ul>
	    
	  </section>

	  <section id="contact" className="wrapper">
	    <h2 className="section-title">Contact</h2><br/>
	    <a href = "mailto: bell@taiseiyo.com" className="button">
	      bell@taiseiyo.com
	    </a>

	  </section>
          
          
	</main>
	

	<style jsx>{`
            .container {
		min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
	`}</style>

	<style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
	`}</style>
	</>
    )
}
