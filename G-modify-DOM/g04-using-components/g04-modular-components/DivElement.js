import { Header2 } from "./Header2.js";
import { Paragraph } from "./Paragraph.js";

export function DivElement() {
    const div = document.createElement('div');
    div.className = 'hello-wrapper'
    div.append(
        Header2('Hello World'),
        Paragraph({className: 'box', text: 'Welcome to my example'}),
        Paragraph({className: 'box', text: 'Another element...'}),
    )
    return div;
}
