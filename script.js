let inp1 = document.querySelector(".email input")
let bu1 = document.getElementById("submit")
let errhandle = document.querySelector(".section2 .sec21 .handle1")
let inp2 = document.querySelector(".section4 .sec42 input")
let bu2 = document.getElementById("submit2")
let errhandle2 = document.querySelector(".section4 .sec42 .handle2")
bu1.addEventListener("click",(e)=>{
    console.log(inp1.value)
    e.preventDefault()
    if (inp1.value==''){
        errhandle.style.display="block";
        errhandle.innerHTML="Must Provide Email...";
        errhandle.style.color="red";
        console.log("Must Provide Email...")
    }
    else if(!inp1.value.includes("@")){
        errhandle.style.display="block";
        errhandle.innerHTML="Email Without @ Sign";
        errhandle.style.color="red";
        console.log("Email Without @ Sign");
     }
     else if(inp1.value.length<=6){
         errhandle.style.display="block";
         errhandle.style.color="red";
         errhandle.innerHTML="Must More Than 6 Characters";
         console.log("Must More Than 6 Characters")
     }
     else{
        errhandle.style.display="block";
        errhandle.style.color="green";
        errhandle.innerHTML="Please Check Your Email";
        bu1.disabled=true;
     }
    inp1.value=''
})

inp1.addEventListener("input", () => {
    if (inp1.value !== '' && !inp1.value.includes("@")) {
        errhandle.style.display = "block";
        errhandle.style.color = "red";
        errhandle.innerHTML = "Email without @ sign";
    }else if(inp1.value==''){
        errhandle.style.display = "block";
        errhandle.style.color = "red";
        errhandle.innerHTML = "Must Provide Email...";
    } else if(inp1.value.length<=6){
        errhandle.style.display = "block";
        errhandle.style.color = "red";
        errhandle.innerHTML = "Must More Than 6 Characters";
    } 
    else {
        errhandle.style.display = "none";
    }
});
//////////////////////////////////////////////////////////////////////////////////
bu2.addEventListener("click",(e)=>{
    console.log(inp2.value)
    e.preventDefault()
    if (inp2.value==''){
        errhandle2.style.display="block";
        errhandle2.innerHTML="Must Provide Email...";
        errhandle2.style.color="black";
        console.log("Must Provide Email...")
    }
    else if(!inp2.value.includes("@")){
        errhandle2.style.display="block";
        errhandle2.innerHTML="Email Without @ Sign";
        errhandle2.style.color="black";
        console.log("Email Without @ Sign");
     }
     else if(inp2.value.length<=6){
         errhandle2style.display="block";
         errhandle2.style.color="black";
         errhandle2.innerHTML="Must More Than 6 Characters";
         console.log("Must More Than 6 Characters")
     }
     else{
        errhandle2.style.display="block";
        errhandle2.style.color="white";
        errhandle2.innerHTML="Please Check Your Email";
        bu2.disabled=true;
     }
    inp2.value=''
})

inp2.addEventListener("input", () => {
    if (inp2.value !== '' && !inp2.value.includes("@")) {
        errhandle2.style.display = "block";
        errhandle2.style.color = "black";
        errhandle2.innerHTML = "Email without @ sign";
    }else if(inp2.value==''){
        errhandle2.style.display = "block";
        errhandle2.style.color = "black";
        errhandle2.innerHTML = "Must Provide Email...";
    } else if(inp2.value.length<=6){
        errhandle2.style.display = "block";
        errhandle2.style.color = "black";
        errhandle2.innerHTML = "Must More Than 6 Characters";
    } 
    else {
        errhandle2.style.display = "none";
    }
});
