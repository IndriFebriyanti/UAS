function pay() {
    p = parseFloat(document.getElementById("price").value);
    t = parseFloat(document.getElementById("total").value);
    subT = p * t

    if (subT >= 250000) {
        discount = 25
        tDiscount = (subT * 0.25) 
    } else if (subT >= 200000) {
        discount = 20
        tDiscount = (subT * 0.2)
    } else if (subT >= 150000) {
        discount = 15
        tDiscount = (subT * 0.15) 
    } else if (subT >= 100000) {
        discount = 20
        tDiscount = (subT * 0.1)
    } else if (subT >= 50000) {
        discount = 5
        tDiscount = (subT * 0.05)
    } else {
        discount = 0
        tDiscount = 0
    }

    tPay = subT - tDiscount
    document.getElementById("sub").value = `Rp ${subT},-`
    document.getElementById("discount").value = `Rp${tDiscount},-`
    document.getElementById("nDiscount").value = ` ${discount}%` 
    document.getElementById("pay").value = `Rp ${tPay},-`
}


function payment() {
    c = document.getElementById("code").value;
    n = document.getElementById("nama").value;
    p = document.getElementById("price").value;
    t = document.getElementById("total").value;  

    let validation = []

    if (c == "") {
        text = document.getElementsByClassName("kode")
        text[0].style.color = "red"
        text = document.getElementsByName("textboxc")
        text[0].style.boxShadow = "inset 2px 2px 2px red, 1px 1px 1px red"
        validation.push(`Kode Barang Harus Diisi\n`)
    }else {
        text = document.getElementsByClassName("textboxc")
        text[0].style.boxShadow = "inset 2px 2px 2px lightblue, 2px 2px 5px lightblue"
        text = document.getElementsByClassName("kode")
        text[0].style.color = "black"
    }
    if (n == "") {
        text = 
        text = document.getElementsByClassName("nama")
        text[0].style.color = "red"
        text = document.getElementsByClassName("textboxn")
        text[0].style.boxShadow = "inset 2px 2px 2px red, 1px 1px 1px red"
        validation.push(`Nama Barang Harus Diisi\n`)
    }else {
        text = document.getElementsByClassName("textboxn")
        text[0].style.boxShadow = "inset 2px 2px 2px lightblue, 2px 2px 5px lightblue"
        text = document.getElementsByClassName("nama")
        text[0].style.color = "black"
    }
    if (p == 0 | p == "") {
        text = document.getElementsByClassName("harga")
        text[0].style.color = "red"
        text = document.getElementsByClassName("textboxp")
        validation.push(`Harga Tidak Boleh Nol\n`)
    }else {
        text = document.getElementsByClassName("textboxp")
        text[0].style.boxShadow = "inset 2px 2px 2px lightblue, 2px 2px 5px lightblue"
        text = document.getElementsByClassName("harga")
        text[0].style.color = "black"
    }
    if (t == 0 | t == "") {
        text = document.getElementsByClassName("jumlah")
        text[0].style.color = "red"
        text = document.getElementsByClassName("textboxt")
        text[0].style.boxShadow = "inset 2px 2px 2px red, 1px 1px 1px red"
        validation.push(`Jumlah Tidak Boleh Nol\n`)
    } else {
        text = document.getElementsByClassName("textboxt")
        text[0].style.boxShadow = "inset 2px 2px 2px lightblue, 2px 2px 5px lightblue"
        text = document.getElementsByClassName("jumlah")
        text[0].style.color = "black"
    }

    if (validation.length == 0) {
        pay()
    } else {
        alert(validation.join(""))
   }
}