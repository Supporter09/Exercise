//HTML Template
const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <style>
    #side-menu{
        margin:0;
        padding:0;
        width:200px;
        background-color:#b7b7a4
    }

    #side-menu li {
        list-style:none;
        height :40px;
        line-height:40px;
        padding:5px;
    }

    #side-menu a {
        text-decoration:
    }
    </style>
    <ul id='side-menu'>
        <li><a href ="./index.html">Index</a></li>
        <li><a href ="./about.html">About</a></li>
        <li><a href ="./ContactUs.html">Contact Us</a></li>
        <li><a href ="./LMAO.html">LMAO</a></li>
    </ul>
`;

export default class SideMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('side-menu',SideMenu);