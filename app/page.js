import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: "Prabal's Dev Porfolio",
  description: "Hi this is my demo website",
}

export default function Home() {
  return (
    <>
        <header>
        <nav>
            <div className="left">Prabal's Portfolio</div>
            <div className="right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section className="firstSection">
            <div className="leftSection">
                <div>Hi , I am <span className="purple">Prabal</span> </div>
                <div> I am a </div>
                <div><span id="element"></span></div>
                <div className="buttons">
                    <button className="btn">Download Resume</button>
                    <button className="btn">Visit Github</button>
                </div>
            </div>
            <div className="rightSection">
                <img src="images/bg.png" alt=""/>
            </div>
        </section>
        <hr/>
        <section className="secondSection">
            <span className="text-gray">What I have done so far</span>
            <h1>Past Experience</h1>
            <div className="box">
                <div className="vertical">
                    <img className="image-top" src="images/html.png" alt=""/>
                    <div className="vertical-title">
                        HTML Developer(2010-2012)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod quasi ducimus esse
                        accusantium id quas saepe perferendis deserunt, suscipit reiciendis incidunt, eos tempora
                        dignissimos voluptatum rerum dolor asperiores fugiat!
                    </div>
                </div>
                <div className="vertical">
                    <img className="image-top" src="images/nodejs.png" alt=""/>
                    <div className="vertical-title">
                        Node.js Developer (2012-2014)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod quasi ducimus esse
                        accusantium id quas saepe perferendis deserunt, suscipit reiciendis incidunt, eos tempora
                        dignissimos voluptatum rerum dolor asperiores fugiat!
                    </div>
                </div>
                <div className="vertical">
                    <img className="image-top" src="images/instagram.png" alt=""/>
                    <div className="vertical-title">
                        Instagram Developer(2012-2014)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod quasi ducimus esse
                        accusantium id quas saepe perferendis deserunt, suscipit reiciendis incidunt, eos tempora
                        dignissimos voluptatum rerum dolor asperiores fugiat!
                    </div>
                </div>
                <div className="vertical">
                    <img className="image-top" src="images/whatsapp.png" alt=""/>
                    <div className="vertical-title">
                        Whatsapp Developer(2014-2016)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod quasi ducimus esse
                        accusantium id quas saepe perferendis deserunt, suscipit reiciendis incidunt, eos tempora
                        dignissimos voluptatum rerum dolor asperiores fugiat!
                    </div>
                </div>
                <div className="vertical">
                    <img className="image-top" src="images/youtube.png" alt=""/>
                    <div className="vertical-title">
                        Youtube Developer(2016-2018)
                    </div>
                    <div className="vertical-desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quod quasi ducimus esse
                        accusantium id quas saepe perferendis deserunt, suscipit reiciendis incidunt, eos tempora
                        dignissimos voluptatum rerum dolor asperiores fugiat!
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div className="footer">
            <div className="footer-first">
                <h3>Prabal's Developer Portfolio</h3>
            </div>
            <div className="footer-second">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className="footer-third">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className="footer-fourth">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>FAQs</li>
                </ul>
            </div>
        </div>

        <div className="footer-rights">
            Cpyright &#169; www.prabalsportfolio.com || All rights reserved
        </div>
    </footer>
    </>
  )
}