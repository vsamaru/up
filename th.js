const Telegraph = require('telegra.ph')
const client = new Telegraph('c9835e8eb80455a0d9865fe9e3df0e1a51d902e44aab2e86653bccb3c88d')
async function tgph(x) {
  var arr = []
   await client.getPage("9-09-16",true).then((pages) => {

//arr = pages.content || arr
})
var v = []
  x.map( e => {
v.push(e.pic)
arr.push(
{                                                                                                                                                                                                        
         "tag": "figure",                                                                                                                                                                                      
        "children": [                                                                                                                                                                                        
            {                                                                                                                                                                                                
                "tag": "img",                                                                                                                                                                                
                "attrs": {                                                                                                                                                                                   
                    "src": e.raw                                                                                                                                          
                }                                                                                                                                                                                            
            },   

        
      // ,                                                                                                                                                                                            
      //       {                                                                                                                                                                                                
      //           "tag": "a",                                                                                                                                                                                  
      //           "attrs": {                                                                                                                                                                                   
      //               "href": e[0],                                                                                                                                         
      //               "target": "_blank"                                                                                                                                                                       
      //           },                                                                                                                                                                                           
      //           "children": [                                                                                                                                                                                
      //               e[0]                                                                                                                                                                                   
      //           ]                                                                                                                                                                                            
      //       }

        ]                                                                                                                                                                                                    
    }    )
//console.warn(JSON.stringify(arr,null,4))
 })
//     o.unshift(rr)
 
// arr = [                                                                                                                                                                                                            
//     {                                                                                                                                                                                                        
//         "tag": "p",                                                                                                                                                                                          
//         "children": [                                                                                                                                                                                        
//                  " "                                                                                                                                                                         
//         ]                                                                                                                                                                                                    
//     }                                                                                                                                                                                                        
// ]    
  // x.map(e=> arr.unshift(
  //          {
  //           "tag": "p",
  //           "children": [


                
  //         {
  //           "tag": "a",
  //           "attrs": {
  //             "href": e,
  //             "target": "_blank"
  //           },
  //           "children": [
  //             "1234"
  //           ]
          
        
  //     }]}
        
  //     ))
// var o 
                                                                                                                                                                                                        
                   arr[0].children.push(                      {
            "tag": "figcaption",
            "children": [
             v.join("\n")
            ]
          })                                                                                                                                                                                  
                           arr[0].children.push(           {                                                                                                                                                                                                        
        "tag": "figure",                                                                                                                                                                                     
        "children": [                                                                                                                                                                                        
            {                                                                                                                                                                                                
                "tag": "img",                                                                                                                                                                                
                "attrs": {                                                                                                                                                                                   
                    "src": "https://i.ibb.co/whfQZbG/file-193.jpg"                                                                                                                                                  
                }                                                                                                                                                                                            
            }                                                                                                                                                                                                
        ]                                                                                                                                                                                                    
    })
                           console.log(JSON.stringify(arr,null,4))
return await client.editPage('9-09-16','9',arr, "SLOMA", "https://sloma.1i.workers.dev",true)
 .then(pages => pages.url)
      .then(pages => {
          if (pages){
           
          
              return pages 
            }
     
      })
    
}
      module.exports = tgph





// ph.createAccount('hi', {short_name: 'WhiteWhidow', author_name: 'LB'}).then((result) => {
//  console.log(result)
// })
// // const { TG } = require("./tg")
// // let e = TG('author_name','50.5655435,33.8975464546')
// // return 
// const telegraph = require('telegraph-node')
// const ph = new telegraph()

// function o() {
//     var se = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //["🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉"]
//     return se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))];
// }


      
    




// [
// { tag: "a", attrs: { href: 'https://www.google.com/maps?q=50.399712,30.646697'  },children: ["📍 "+ 'https://www.google.com/maps?q=50.399712,30.646697'] },

// { tag: "img", attrs: { src: geourl } },
// { tag: "blockquote", children: ["БОКОВУШКА"] },
// { tag: "img", attrs: { src: 'https://i.ibb.co/rdFrrT5/50-440598-30-610747-iiiiiiii.jpg' } },

// //{ tag: "img", attrs: { src: geourl } },


// ]

//var V = v.map( e => (
     


    //  ))
 // console.log(V)
 // var geourl = "https://www.mapquestapi.com/staticmap/v5/map?locations=50.399712,30.646697|marker-lg-04fd6c&banner=M.%20%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%3E%3ESKUNK%3C|505050-04fd6c-md-top&zoom=17&size=960,960@2x&key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb";
 // var d = dateFormat(new Date(), "-HH-mm-ss")
