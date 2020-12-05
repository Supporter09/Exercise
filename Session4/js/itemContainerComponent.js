const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <style>

    </style>

    <div id='item-container' >
    <img id='image' src="https://lh3.googleusercontent.com/skmaZjS5xBS4ffkYsMXCeLfHWpYhxXoXmleECID5VhKsP6LHwy66d4fXUbjMGRCLRqEH_x7MADoo5R2BDCTO4sg2FCes6IuCpvY5td2kb0d2Vn4mIa_uXSfHU6FR5YkcMqSNZrxrdvYz0wCWYomqnxfoTaulxm5DLDm3yfGGai3VCQc7g00IvkgAs5mwKV1GQU2ghe6WkvEL86Sd9i2idHIGOpEysDLq-pwcOwwEtoIWcXOwyiIsd-kUxEuYAnnTyPRyh-jCzHeo9CyAH5v6tGiWe7brqsZq-saJWw4LCKIwwvn7KnxUs7i2_LIfy5_iLCDP1Sryy0miOUUwppQ1hq20zP1MjLs6M3kdKbeAJDl3UbI8HfOSv1SCyRyYtD2cAj12NZJWY9qrePeodSyfqFeSYetJx4mneHxXVpIPJCINM908dVkA7cacqX4eVPSJnHN8FhDqCdcK61vqmtoAs1-ERDH2gZ05gfg5MBvEwncIht5ke9meoufuPyXF-aWR6wt0oRZYf82eQCQ0rB2o18zPFR83TnrX6i4LzKakzLtJiV3IaBz8X7f6GV-S-TvbiNKywPjUtLflecha-R4aFKV4uMOg3dA16kTiz29Yb_HSmUBeAAuU3zbjPeo3RP2PUMfzISr7uC_mz4sSLr_U2AyydvbzIXTrslH7ukDDWm6-eYA9rAH6olCQUrXXaA=w319-h180-no?authuser=0" alt="Radeon">
    <div id="price" >10 &#8363</div>
    <div id = "description">MMMMMMMMMMMMASA</div>
    <div id ="address">Ha Noi</div>
    </div>
`;

export default class ItemContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true))
    }
    //định nghĩa những thuộc tính có ảnh hưởng đến nội dung

    static get observedAttributes() {
        return ["image","price","description","address"];
    }
    // Được chạy khi giá trị  thuộc tính thay đỏi
    attributeChangedCallback(attrName, oldValue, newValue){
        console.log(attrName + " = " + newValue);
        switch(attrName) {
            case 'image':
                this.shadowRoot.getElementById("image").src = newValue;
                break;
            case 'price':
                this.shadowRoot.getElementById("price").innerHTML = newValue;
                break;
            case 'description':
                this.shadowRoot.getElementById('description').innerHTML = newValue;
                break;
            case 'address':
                this.shadowRoot.getElementById("address").innerHTML= newValue;
                break;
        }
    }
};

window.customElements.define('item-container', ItemContainer);