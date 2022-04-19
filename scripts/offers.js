let mainDiv = document.getElementById("offers");
let offers = [
  {
    img: "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg",
    code: "SURP20",
    title: "Flat 20% off + up to Rs.1000 cashback",
    desc: "Get Flat 20% off + up to Rs.1000 surprise cashback on <br> 1st medicine order. Minimum order value is Rs.999",
  },
  {
    img: "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg",
    code: "SURP20",
    title: "Flat 20% off + up to Rs.1000 cashback",
    desc: "Get Flat 20% off + up to Rs.1000 surprise cashback on <br> 1st medicine order. Minimum order value is Rs.999",
  },
  {
    img: "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg",
    code: "SURP20",
    title: "Flat 20% off + up to Rs.1000 cashback",
    desc: "Get a discount on your next purchase",
  },
  {
    img: "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg",
    code: "SURP20",
    title: "Flat 20% off + up to Rs.1000 cashback",
    desc: "Get a discount on your next purchase",
  },
  {
    img: "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg",
    code: "SURP20",
    title: "Flat 20% off + up to Rs.1000 cashback",
    desc: "Get a discount on your next purchase",
  },
  {
    img: "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg",
    code: "SURP20",
    title: "Flat 20% off + up to Rs.1000 cashback",
    desc: "Get a discount on your next purchase",
  },
  {
    img: "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg",
    code: "SURP20",
    title: "Flat 20% off + up to Rs.1000 cashback",
    desc: "Get a discount on your next purchase",
  },
  {
    img: "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg",
    code: "SURP20",
    title: "Flat 20% off + up to Rs.1000 cashback",
    desc: "Get a discount on your next purchase",
  },
  {
    img: "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg",
    code: "SURP20",
    title: "Flat 20% off + up to Rs.1000 cashback",
    desc: "Get a discount on your next purchase",
  },
  {
    img: "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg",
    code: "SURP20",
    title: "Flat 20% off + up to Rs.1000 cashback",
    desc: "Get a discount on your next purchase",
  },
];
if (localStorage.getItem("off") == null) {
  localStorage.setItem("off", JSON.stringify(offers));
}
function showOffers() {
  let data = JSON.parse(localStorage.getItem("off"));
  data.forEach(function (offer) {
    let div = document.createElement("div");
    let topDiv = document.createElement("div");
    let botDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = offer.img;
    let inDiv = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.innerHTML = offer.title;
    let p = document.createElement("p");
    p.innerHTML = offer.desc;
    inDiv.append(h4, p);
    topDiv.append(img, inDiv);
    let code = document.createElement("p");
    code.innerHTML = offer.code;
    let a = document.createElement("a");
    a.href = "https://www.amazon.com/gp/product/B071ZR2Z3C";
    a.innerHTML = "Copy Code & Proceed";
    botDiv.append(code, a);
    div.append(topDiv, botDiv);
    mainDiv.append(div);

    // CSS Styling
    img.style.float = "left";
    botDiv.style.borderTop = "1px dashed #ccc";
    topDiv.style.padding = "10px";
    inDiv.style.float = "left";
    img.style.marginTop = "10px";
    inDiv.style.padding = "0px 10px";
    botDiv.style.clear = "both";
    botDiv.style.width = "100%";
    code.style.float = "left";
    code.style.marginTop = "5px";
    code.style.padding = "0 10px";
    a.style.marginTop = "5px";
    a.style.float = "right";
    a.style.padding = "0 10px";
    topDiv.style.width = "100%";
    div.style.width = "400px";
    div.style.margin = "1% 1%";
    div.style.border = "1px solid #ccc";
    div.style.borderRadius = "5px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    img.style.width = "75px";
    mainDiv.style.display = "flex";
    mainDiv.style.flexWrap = "wrap";
    div.style.flexBasis = "47%";
    mainDiv.style.margin = "0 10%";
    topDiv.style.height = "125px";
    botDiv.style.height = "50px";
    img.style.padding = "3%";
    h4.style.margin = "9% 1%";
    p.style.margin = "17% 1%";
    p.style.fontSize = "0.75rem";
    inDiv.style.width = "300px";
    h4.style.fontSize = "0.9rem";
    div.style.font = "inherit";
    a.style.textDecoration = "none";
    a.style.color = "#37857E";
    code.style.marginTop = "3%";
    a.style.marginTop = "3%";
  });
}
showOffers();

let offDiv = document.getElementById("off-details");
function showOffDetails() {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let oneh5 = document.createElement("h5");
  oneh5.innerHTML = "Total No. of Offers";
  let oneh4 = document.createElement("h4");
  oneh4.innerHTML = "10";
  div1.append(oneh5, oneh4);
  let twoh5 = document.createElement("h5");
  twoh5.innerHTML = "Discount for New Users";
  let twoh4 = document.createElement("h4");
  twoh4.innerHTML = "18% OFF";
  div2.append(twoh5, twoh4);
  let threeh5 = document.createElement("h5");
  threeh5.innerHTML = "Discount for All Users";
  let threeh4 = document.createElement("h4");
  threeh4.innerHTML = "15% OFF";
  div3.append(threeh5, threeh4);
  let fourh5 = document.createElement("h5");
  fourh5.innerHTML = "Additional Offers";
  let fourh4 = document.createElement("h4");
  fourh4.innerHTML = "Cashbacks & shopping <br> Vouchers";
  div4.append(fourh5, fourh4);
  offDiv.append(div1, div2, div3, div4);
  offDiv.style.display = "flex";
  offDiv.style.padding = "1% 10%";
  offDiv.style.color = "#37857E";
  div1.style.margin = "5%";
  div2.style.margin = "5%";
  div3.style.margin = "5%";
  div4.style.margin = "5%";
}
showOffDetails();
