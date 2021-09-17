require('isomorphic-unfetch')
const tgph = require('./th')
  const db = require('./db')
// import db from './6cc/db'
function o6() {
    var se = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //["🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉"]
    return se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))];
} 
const goo = `https://sheets.googleapis.com/v4/spreadsheets/1dgBSmDk8wEnQLTMWfKM2464G62jQuZyHo-AC7cK3SPs/values/B!A1:D502?key=AIzaSyB-kuHOgs6nTbxq6hmOKYRHDKoEu-wMo0E`;

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
    //await All().then(r => console.log(r))
    x = await db.list("-")
    console.log(x)
 x = await tgph(x)
   console.log(x)
    // await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1dgBSmDk8wEnQLTMWfKM2464G62jQuZyHo-AC7cK3SPs/values/B!A1:D502?key=AIzaSyB-kuHOgs6nTbxq6hmOKYRHDKoEu-wMo0E`

    //     ).then(r => r.json()).then(r => console.log(r.values))
    //                 return "https://res.cloudinary.com/o6/"+r.public_id
    //             })
    

}
t( [                                                                                                                                                                                                            
  [ 'https://i.ibb.co/8dSWZ6b/l.jpg', 'https://ibb.co/X3vhRSD' ],                                                                                                                                            
  [ 'https://i.ibb.co/7t9mCYX/l.jpg', 'https://ibb.co/RB92BS3' ],                                                                                                                                            
  [ 'https://i.ibb.co/djTSGqs/l.jpg', 'https://ibb.co/nRyzVmd' ],                                                                                                                                            
  [ 'https://i.ibb.co/gP3yP7S/l.jpg', 'https://ibb.co/2k0hZz1' ],                                                                                                                                            
  [ 'https://i.ibb.co/5hDVb1h/l.jpg', 'https://ibb.co/tpn9kdT' ],                                                                                                                                            
  [ 'https://i.ibb.co/MVmbz8v/l.jpg', 'https://ibb.co/6ZCKh8b' ],                                                                                                                                            
  [ 'https://i.ibb.co/S36s593/l.jpg', 'https://ibb.co/LpTCgwL' ],                                                                                                                                            
  [ 'https://i.ibb.co/Qv79xYS/l.jpg', 'https://ibb.co/gFHCqkf' ],                                                                                                                                            
  [ 'https://i.ibb.co/ftQSr4H/l.jpg', 'https://ibb.co/2tXDxKT' ],                                                                                                                                            
  [ 'https://i.ibb.co/2vL7Q5q/l.jpg', 'https://ibb.co/mqYmQJb' ],                                                                                                                                            
  [ 'https://i.ibb.co/cFqjj08/l.jpg', 'https://ibb.co/hHgY4FN' ],                                                                                                                                            
  [ 'https://i.ibb.co/CnmV6wm/l.jpg', 'https://ibb.co/n7VsvRr' ],                                                                                                                                            
  [ 'https://i.ibb.co/wzZgcnF/l.jpg', 'https://ibb.co/ZddsGRV' ],                                                                                                                                            
  [ 'https://i.ibb.co/hFrShqJ/l.jpg', 'https://ibb.co/xXkyJ0K' ],                                                                                                                                            
  [ 'https://i.ibb.co/g68zX9q/l.jpg', 'https://ibb.co/FxRnb3x' ],                                                                                                                                            
  // [ 'https://i.ibb.co/GJSZw9k/l.jpg', 'https://ibb.co/K7KHCjQ' ],                                                                                                                                            
  // [ 'https://i.ibb.co/Wc6yztJ/l.jpg', 'https://ibb.co/Y3fg27S' ],                                                                                                                                            
  // [ 'https://i.ibb.co/5cQ5jDN/l.jpg', 'https://ibb.co/9qcyhpc' ],                                                                                                                                            
  // [ 'https://i.ibb.co/J2c3GjT/l.jpg', 'https://ibb.co/FKJb0Tf' ],                                                                                                                                            
  // [ 'https://i.ibb.co/9nfPpmX/l.jpg', 'https://ibb.co/F6fphkv' ],                                                                                                                                            
  // [ 'https://i.ibb.co/JnnLmWK/l.jpg', 'https://ibb.co/k0MyqQX' ],                                                                                                                                            
  // [ 'https://i.ibb.co/mGhpJCK/l.jpg', 'https://ibb.co/xXCdZRs' ],                                                                                                                                            
  // [ 'https://i.ibb.co/0Zs3PjW/l.jpg', 'https://ibb.co/dpsPMwY' ],                                                                                                                                            
  // [ 'https://i.ibb.co/0V834H6/l.jpg', 'https://ibb.co/6Pk2KvM' ],                                                                                                                                            
  // [ 'https://i.ibb.co/Bz0wV3z/l.jpg', 'https://ibb.co/60dCwnm' ],                                                                                                                                            
  // [ 'https://i.ibb.co/qd9MWQ4/l.jpg', 'https://ibb.co/7WhqqPp' ],                                                                                                                                            
  // [ 'https://i.ibb.co/1XYrQtW/l.jpg', 'https://ibb.co/8j05xcZ' ],                                                                                                                                            
  // [ 'https://i.ibb.co/FmxCpjW/l.jpg', 'https://ibb.co/jk9hj30' ],                                                                                                                                            
  // [ 'https://i.ibb.co/0MPgTJx/l.jpg', 'https://ibb.co/yFTJHNF' ],                                                                                                                                            
  // [ 'https://i.ibb.co/BZ7m8Lc/l.jpg', 'https://ibb.co/0GnDmdG' ]                                                                                                                                             
] )