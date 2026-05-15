import { component$} from "@builder.io/qwik";
import './mainPageStatComponent.css';

interface StatProps{
    text: string;
    number: number | string;
    icon: any;
}

export const StatCard = component$<StatProps>(
({text, number, icon}) => {

    return(
        <div class="statCard">

            <div class="statCardIcon">
                {icon}
            </div>

            <div class="statCardText">
                {text}
            </div>
            
            <div class="statCardNumber">
                {number}
            </div>

        </div>
    )
});