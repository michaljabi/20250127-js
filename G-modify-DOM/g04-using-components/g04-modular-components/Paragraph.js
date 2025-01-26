export function Paragraph({className, text}) {
    const p = document.createElement('p');
    p.className = className;
    p.textContent = text;
    return p;
}
