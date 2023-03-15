/*
Default HTML structure should look like this

<header>
    <h1>Restaurant: For Food</h1>
    <nav>
        <button class="home">Home</button>
        <button class="menu">Menu</button>
        <button class="contact">Contact</button>
    <nav>
</header>

<main>
    <div class="subcontent">
    </div>
</main>

<footer>
    Made by imHenryMa | Photo by <a href="https://unsplash.com/@vardarious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Volkan Vardar</a> on <a href="https://unsplash.com/photos/1H30uRC1plc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</footer>

*/

export default function makePage(){
    //Selecting the content container
    const content = document.querySelector('.content');

    makeHeader(content);
    makeMain(content);
    makeFooter(content);
}

function makeHeader(parent) {

    //Making the header
    const header = document.createElement('header');
    parent.appendChild(header);

    //Making the h1
    const h1 = document.createElement('h1');
    h1.textContent='Restaurant: For Food';
    header.appendChild(h1);

    //Making the nav
    const nav = document.createElement('nav');
    header.appendChild(nav);

    //Making the buttons
    const buttons = {
        home: document.createElement('button'),
        menu: document.createElement('button'),
        contact: document.createElement('button'),
    };
    Object.keys(buttons).forEach((key) => {

        //Add the button class
        buttons[key].classList.add(key);

        //Set the button text
        let text = key;
        text = text.replace(/^./, text[0].toUpperCase());
        buttons[key].textContent = text;

        //Add the event listener for when the button is clicked
        buttons[key].addEventListener('click', () => {buttonClicked(key);});

        //Add the button to the nav
        nav.appendChild(buttons[key]);
    });
}

function makeMain(parent){
    const main = document.createElement('main');
    parent.appendChild(main);

    const subContent = document.createElement('div');
    subContent.classList.add('subcontent');
    main.appendChild(subContent);
}

function makeFooter(parent){
    const footer = document.createElement('footer');
    parent.appendChild(footer);
    footer.innerHTML = 'Made by imHenryMa | Photo by <a href="https://unsplash.com/@vardarious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Volkan Vardar</a> on <a href="https://unsplash.com/photos/1H30uRC1plc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
}
function buttonClicked(key){
    //alert(key);
    let subcontent = document.querySelector('.subcontent');
    
    //Clear the current items in the subcontent
    subcontent.childNodes.forEach((node) => {node.remove();});

    //Current keys are 'home','menu', and 'contact'
    subcontent.appendChild(makeContent(key));

}

function makeContent(key){
    //alert(`Making a ${key}!`);
    let item = document.createElement('div');

    //Fill content in later
    item.textContent = `Stuff for the ${key}  to be put here`;

    return item;
}