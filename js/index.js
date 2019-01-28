const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headImg = document.getElementById("cta-img");
headImg.setAttribute('src', siteContent["cta"]["img-src"]);

let midPageAccent = document.getElementById("middle-img");
midPageAccent.src = siteContent["main-content"]["middle-img-src"]


const anchors = document.querySelectorAll('a');
//anchors.forEach(element => element.textContent = siteContent["nav"][0])
anchors[0].textContent = siteContent["nav"]["nav-item-1"];
anchors[1].textContent = siteContent["nav"]["nav-item-2"];
anchors[2].textContent = siteContent["nav"]["nav-item-3"];
anchors[3].textContent = siteContent["nav"]["nav-item-4"];
anchors[4].textContent = siteContent["nav"]["nav-item-5"];
anchors[5].textContent = siteContent["nav"]["nav-item-6"];

const mainHeader = document.querySelector('h1');
mainHeader.textContent = siteContent["cta"]["h1"];

const onlyButton = document.querySelector('button');
onlyButton.textContent = siteContent["cta"]["button"];

const topContentTitles = document.querySelectorAll('.top-content .text-content h4');
topContentTitles[0].textContent = siteContent["main-content"]["features-h4"];
topContentTitles[1].textContent = siteContent["main-content"]["about-h4"];

const topContentBody = document.querySelectorAll('.top-content .text-content p');
topContentBody[0].textContent = siteContent["main-content"]["features-content"];
topContentBody[1].textContent = siteContent["main-content"]["about-content"];

const bottonContentTitles = document.querySelectorAll('.bottom-content .text-content h4');
bottonContentTitles[0].textContent = siteContent["main-content"]["services-h4"];
bottonContentTitles[1].textContent = siteContent["main-content"]["product-h4"];
bottonContentTitles[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomContentBody = document.querySelectorAll('.bottom-content .text-content p');
bottomContentBody[0].textContent = siteContent["main-content"]["services-content"];
bottomContentBody[1].textContent = siteContent["main-content"]["product-content"];
bottomContentBody[2].textContent = siteContent["main-content"]["vision-content"];

const contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent.contact["contact-h4"];

const contactInfo = document.querySelectorAll('.contact p');
contactArr = Array.from(contactInfo)

contactArr[0].textContent = siteContent.contact.address;
contactArr[1].textContent = siteContent.contact.phone;
contactArr[2].textContent = siteContent.contact.email;

const footerInfo = document.querySelector('footer');
footerInfo.textContent = siteContent.footer.copyright;