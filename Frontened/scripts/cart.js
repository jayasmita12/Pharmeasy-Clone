
    let cartitem = JSON.parse(localStorage.getItem("CART")) || [];
    console.log(cartitem);
    mycartarritems(cartitem)


    function mycartarritems(cartitem) {
        
        document.getElementById("cartitemdiv").innerHTML=null;

        cartitem.map(function (el, index) {

            let maindiv = document.createElement("div");

            let imgdiv = document.createElement("img");
            imgdiv.src = el.image;

            let titlediv = document.createElement("p");
            titlediv.textContent = el.title

            let price = document.createElement("p");
            price.textContent = `₹ ${el.price}`;

            let btn = document.createElement("button");
            btn.textContent = "Remove";
            btn.addEventListener("click", function () {
                deletebtn(index)
            })

            maindiv.append(imgdiv, titlediv, price, btn);
            document.querySelector("#cartitemdiv").append(maindiv);

        })

        total()

    }

    function deletebtn(index) {

        cartitem.splice(index, 1)
        localStorage.setItem("CART", JSON.stringify(cartitem));
        mycartarritems(cartitem);

    }

    function total() {

        let total = 0;
        for (var i = 0; i < cartitem.length; i++) {
            total += +cartitem[i].price;
        }
        console.log(total);

        cartlength_div = document.querySelector("#cartlengthspan");
        cartlength_div.textContent = cartitem.length+"  item";

        cartamount_div = document.querySelector("#cartAmountspan");
        cartamount_div.textContent = "₹  "+total;

        console.log("--->", total, cartitem.length)


        // let lenght = cartitem.lenght;
        // console.log("length is", length)

    }

    document.querySelector("#checkbtn").addEventListener("click", function(){

        window.location.href = "address.html";
    })
