const tabs = document.getElementsByClassName("tab");
tabs_arr = Array.from(tabs)

product_url = "http://127.0.0.1:8000/product/"
tabs_arr.forEach(async el => {
    // try {
    const response = await fetch(product_url);
    const data = await response.json();
    console.log(data);
    // el.innerText = "e";
    
    // } catch (error) {
    //     console.error("Hata oluştu:", error);
    // }
});