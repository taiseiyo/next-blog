import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import picCode from "../public/static/code.jpg";
import picCastle from "../public/static/castle.jpg";
import React, {useState, useRef} from "react";

export default function Home() {
  let [flag, setFlag] = useState(false);
  let hamRef = useRef(null);
  let menuRef = useRef(null);

  let ham_action = () => {
    if (flag) {
      hamRef.current.className = "ham";
      menuRef.current.className = "menu";
      setFlag(false);
    } else {
      hamRef.current.className = "ham ham_clicked";
      menuRef.current.className = "menu menu_clicked";
      setFlag(true);
    }
  };

  return (
    <>
      <header
        id="header"
        className="wrapper"
        style={{top: "20px", position: "relative", height: "65px"}}
      >
        <div className="popout">
          <span className="animation1">P</span>
          <span className="animation2">r</span>
          <span className="animation3">o</span>
          <span className="animation4">f</span>
          <span className="animation5">i</span>
          <span className="animation6">l</span>
          <span className="animation7">e</span>
        </div>

        <nav>
          <div
            className="ham"
            ref={hamRef}
            onClick={() => {
              ham_action();
            }}
          >
            <span className="ham_line ham_line1"></span>
            <span className="ham_line ham_line2"></span>
            <span className="ham_line ham_line3"></span>
          </div>

          <div className="menu_wrapper">
            <div className="menu" ref={menuRef}>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#news">News</a>
                </li>
                <li>
                  <a href="#more">More</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        {/* <img */}
        {/*   src={picCode.src} */}
        {/*   alt="Picture of the author" */}
        {/*   /\* loading={"eager"} *\/ */}
        {/*   width="300" */}
        {/*   height="100" */}
        {/* /> */}

        <section id="about" className="wrapper">
          <h2 className="section-title">About</h2>
          <div className="content">
            {/* <img */}
            {/*   src={picCastle.src} */}
            {/*   alt="Picture of the author" */}
            {/*   loading={"eager"} */}
            {/* /> */}

            <p>
              ???????????????????????????????????????????????????????????????
              ????????????????????????????????????????????????????????????
            </p>
          </div>
        </section>

        <section id="news" className="wrapper">
          <h2 className="section-title">News</h2>
          <ul>
            <li>
              <h3 className="content-title">????????????????????????</h3>
              <p>
                ICOIN 2022 ???????????? <br />1 ?????????????????????
              </p>
            </li>
            <li>
              <h3 className="content-title">?????????????????????????????????????????????</h3>
              <p>
                2020 ?????? 12 ??????????????????????????????hack the
                future???????????????????????????????????????
              </p>
            </li>
            <li>
              <h3 className="content-title">Softbank AI ?????????????????????</h3>
              <p>Softbank ?????? AI ???????????????????????????????????????</p>
            </li>
          </ul>
        </section>

        <section id="more" className="wrapper">
          <h2 className="section-title">More</h2>
          <ul className="more_list">
            <li>
              <Link href={"/posts/award"}>
                <a className="button">?????????</a>
              </Link>
            </li>

            <li>
              <Link href={"/posts/skill"}>
                <a className="button">???????????????</a>
              </Link>
            </li>

            <li>
              <Link href={"/posts/hobby"}>
                <a className="button">??????</a>
              </Link>
            </li>

            <li>
              <Link href="https://github.com/taiseiyo/">
                <a className="button">GitHub</a>
              </Link>
            </li>
          </ul>
        </section>

        <section id="contact" className="wrapper">
          <h2 className="section-title">Contact</h2>
          <br />
          <a href="mailto: taiseiyo11@gmail.com" className="button">
            taiseiyo11@gmail.com
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
  );
}
