import { component$ } from "@builder.io/qwik";
import Navbar from "~/components/navbar/navbar";
import { CodeSnippet } from "~/components/codeSnippet/codeSnippet";
import { DocumentHead } from "@builder.io/qwik-city";
import './index.css';

export const head: DocumentHead = {
    title : "Hakkımda",
    meta : [
        {
            name: "description",
            content: "About Me Page",
        },
    ]
}

export default component$(() => {
    return (
        <main class="aboutContainer">
            <Navbar/>
            <div class="aboutWrapper">
                <div class="aboutMe">
                    <div class="aboutMeLeft">
                        <div class="aboutMeLeftTop">
                            <div class="photoArea">
                                <img src="/images/pp.webp" alt="profileIcon"></img>
                            </div>
                            <div class="photoHeader">Yakup Döğer</div>
                            <div class="photoText">Full-Stack Web Developer</div>
                        </div>
                        <div class="aboutMeLeftBottom">
                            <CodeSnippet text="HTML" icon="/images/html.webp"/>
                            <CodeSnippet text="CSS" icon="/images/css.webp"/>
                            <CodeSnippet text="JavaScript" icon="/images/js.webp"/>
                            <CodeSnippet text="PHP" icon="/images/php.webp"/>
                            <CodeSnippet text="Svelte" icon="/images/svelte.webp"/>
                            <CodeSnippet text="Qwik" icon="/images/qwik.webp"/>
                            <CodeSnippet text="Python" icon="/images/python.webp"/>
                            <CodeSnippet text="C" icon="/images/C.png"/>
                        </div>
                    </div>
                    <div class="aboutMeRight">
    <div class="aboutCard">
        <div class="aboutTitle">
            About Me
        </div>

        <div class="aboutDescription">I am a Full-Stack Web Developer and a Statistics student at Fırat University who is passionate about creating modern, scalable, and visually engaging digital experiences. Since my early years, I have been deeply interested in computers, web technologies, and software development. What started as curiosity gradually became a long-term passion that continues to shape both my academic and professional journey today.
I enjoy building responsive user interfaces, developing backend systems, and constantly learning new technologies to improve my skills. Beyond web development, I have a strong interest in mathematics, data analysis, and artificial intelligence. My goal is to combine software engineering with AI-driven systems and analytical thinking to create impactful, innovative, and intelligent applications that solve real-world problems.
        </div>
    </div>
    <div class="banner"></div>
</div>
                </div>
            </div>
        </main>
    )
})