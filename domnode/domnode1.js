const body = document.getElementsByTagName("body")[0];
console.log(body);

const ptagname = document.createElement("p");
ptagname.innerHTML = "This is a paragraph createed by JS";
body.appendChild(ptagname);

var names = ["raj","parth","pratik","vijay"]

for(let i =0;i<names.length;i++){

    const h3Tag = document.createElement("h3");
    h3Tag.innerHTML = names[i];
    body.appendChild(h3Tag);    

}
