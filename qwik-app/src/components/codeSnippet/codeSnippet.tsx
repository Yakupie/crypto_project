import { component$ } from "@builder.io/qwik";
import './codeSnippet.css';

interface CodeSnippetProps{
    text: string;
    icon: any;
}

export const CodeSnippet = component$<CodeSnippetProps>(({ text, icon }) => {
    return (
        <div class="codeSnippet">
            <div class="iconArea">
                {icon}
            </div>

            <span class="snippetText">
                {text}
            </span>
        </div>
    )
})