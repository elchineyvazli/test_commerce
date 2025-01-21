const tabs = document.getElementsByClassName("tab");
tabs_arr = Array.from(tabs)

products_url = "http://127.0.0.1:8000/api/categories/"
tabs_arr.forEach(async (el, ind) => {
    // try {
    const response = await fetch(products_url);
    const data = await response.json();
    console.log(data[0].name);
    el.innerText = data[ind].name;

    // } catch (error) {
    //     console.error("Hata oluştu:", error);
    // }
});