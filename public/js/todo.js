//const { stat } = require("fs");

var name = "JHT";

console.log(window.name);

const todo=[
    
];


function ubah(index){
    alert(`ini adalah data ubah dengan index ke ${index}`);
}


function hapus(index){
    alert(`ini adalah data hapus dengan index ke ${index}`);


}

function tambah(){
    const title = prompt("Input todo title");
    const status = prompt("Input todo status");
    //console.log(title,status);
    const databaru = {title:title, status:status};
    todo.push(databaru);

    //update HTML
    document.getElementById("data").innerHTML = '';
    todo.map((value,index)=>{
        console.log(value,"ini index", index);
        document.getElementById("data").innerHTML +=template(value.title,value.status,value.index);
    })
}

function template(title,status,index){
    const elementHTML =`
    <li>${title} | ${status} | @{NOW.format("yyyy-MM-dd")} | 
        <button onclick="hapus(${index})">Delete</button>
        <button onclick="ubah(${index})">Edit</button>
    </li>
    `;
    return elementHTML;
}
