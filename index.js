document.querySelector(".search").addEventListener("keydown", e=> {
    if (e.key=="Enter"){
        e.preventDefault();
        var x = document.querySelector(".search").value;
        if (x.toLowerCase()=='home'){
            $(".btn").attr("data-bs-slide-to","0");
        }
        else if (x.toLowerCase()=='projects'){
            $(".btn").attr("data-bs-slide-to","1");
        }
        else if (x.toLowerCase()=='skills'){
            $(".btn").attr("data-bs-slide-to","2");
        }
        else if (x.toLowerCase()=='about'){
            $(".btn").attr("data-bs-slide-to","3");
        }
        else if (x.toLowerCase()=='education'){
            $(".btn").attr("data-bs-slide-to","4");
        }
        else if (x.toLowerCase()=='contact'){
            $(".btn").attr("data-bs-slide-to","5");
        }
        else {
            window.alert("not found");
        }
    }
});

