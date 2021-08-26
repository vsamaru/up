require('isomorphic-unfetch')
// const tgph = require('./6cc/th')
// import db from './6cc/db'
function o6() {
    var se = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //["🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉"]
    return se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))];
} 

var All = async x => {
    return await fetch("https://api.upstash.com/v1/database/5726c53f-0748-4f43-b6f5-83907af83155", {
  headers: {
    Authorization: "Basic ZGFkMnZhZEBnbWFpbC5jb206OGY4MTkyM2EtOWU0MS00MTIwLWE0ZTUtZGE0NmRjZDY4ZDVj"
  }
})
        .then(r => r.json())
        // .then(data => data.resources)
        // .then(data => data.map(({
        //     public_id,
        //     url
        // }) => public_id))
}
async function t(x) {
    await All().then(r => console.log(r))
    // x = await tgph(["50.4825,30.4887", "FEEE FUUU", "https://i.ibb.co/whfQZbG/file-193.jpg"])
    // await fetch(`https://api.cloudinary.com/v1_1/o6/image/upload?timestamp=true&api_key=151134495153184&signature=MTUxMTM0NDk1MTUzMTg0OkJuV0RGYmFUbkljeGtHbVRTZDF3NW5SYnNNaw==&overwrite=true&public_id=undefined&upload_preset=ml_default&file=https://i.ibb.co/whfQZbG/file-193.jpg`, {
    //         headers: {
    //             'Authorization': 'Basic MTUxMTM0NDk1MTUzMTg0OkJuV0RGYmFUbkljeGtHbVRTZDF3NW5SYnNNaw=='
    //         }
    //     }).then(r => r.json()).then(r => {
    //         console.log(r)
    //                 return "https://res.cloudinary.com/o6/"+r.public_id
    //             })
    
}
t()