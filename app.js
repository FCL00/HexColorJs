
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const container = document.getElementById("color-container");
const heading = document.getElementById("heading");

btn.addEventListener("click", function(){
    const letters = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) 
    {
        hexColor += letters[Math.floor(Math.random() * 16)];
    }

    let colorIsDark = checkLuminance(hexColor);
    container.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    heading.style.color = hexColor;
    
    if (colorIsDark) {
        console.log("Color is too dark.");
        container.style.color = "#FFFFFF";
        btn.classList.remove("border-black");
        btn.classList.add("border-white");
       
        
    } else {

        console.log("Color is not too dark.");
        container.style.color = "#181818";
        btn.classList.remove("border-white");
        btn.classList.add("border-black");
    }

});


function checkLuminance(hexColor){

    // source : https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color

    // convert the hex color to rgb values
    let red = parseInt(hexColor.slice(1,3), 16);
    let green = parseInt(hexColor.slice(3,5), 16); 
    let blue = parseInt(hexColor.slice(5,6), 16);
    
    // Calculate luminance
    let luminance = 0.299 * red + 0.587 * green + 0.114 * blue;

    // Define a threshold 255/2 = 127.5 
    let threshold = 128;

    // Check if the luminance is below the threshold
    return luminance < threshold;

}
