// import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
import './6cc'
// import './handler'
import { render } from 'posthtml-render'
// import { bot } from '../bot'

var t = {"c":"1925673169:AAFHmM0G3lEaL8js_At76cciFk4VRXq62MU","o":"706378399:AAFMlm63OEqDOU6GvLI-m1msD8fUqJ4XMkA","q":"1453699653:AAHDfkzpMIR1omFnz5ha1FtzYY4f47TDLSk","r":"898353069:AAGp5H7zHEdhjOjMF7oOQLU03DF3tYGFx0o","k":"871266562:AAFjM1YBCgOk64ajgm5n8JIjEVQNGVkOUBs"}

// async function handleEvent(event) {
//   try {
//     const page = await getAssetFromKV(event, {})
    
//     const response = new Response(page.body, page)
//     response.headers.set("Cache-Control", "max-age=1500")
//     response.headers.set('Access-Control-Allow-Origin', '*')
//     return response
//   } catch (e) {
//     console.error(e)
//     return new Response({ status: 200 })
//   }
// }
// const config = /** @type {ConfigDef} */ require('../config.json')
// const { handleEvent } = require('./handler')
// /*global addEventListener*/
// addEventListener('fetch', async (event) => {
//   handleEvent(event, config)
// })
const Router = (o = {}) =>
  new Proxy(o, {
    get: (t, k, c) => k === 'handle'
      ? async (r, ...a) => {
       // r = r.request
          for (let [p, hs] of t.r.filter(i => i[2] === r.method || i[2] === 'ALL')) {
            let m, s, u
            if (m = (u = new URL(r.url)).pathname.match(p)) {
              r.params = m.groups
              r.query = r.query || Object.fromEntries(u.searchParams.entries())
              for (let h of hs) {
                if ((s = await h(r.proxy || r, ...a)) !== undefined) return s
              }
            }
          }
        }
      : (p, ...hs) =>
          (t.r = t.r || []).push([
            `^${((t.base || '') + p)
              .replace(/(\/?)\*/g, '($1.*)?')
              .replace(/\/$/, '')
              .replace(/:(\w+)(\?)?(\.)?/g, '$2(?<$1>[^/$3]+)$2$3')
              .replace(/\.\(/g, '\\.(')
            }\/*$`,
            hs,
            k.toUpperCase(),
          ]) && c
  })

// now let's create a router (note the lack of "new")
const router = Router()
// GET collection index
router.get('/x', async re =>  {
  TOKEN = re.query.t

                  re.photo = await fetch('https://api.telegram.org/bot' + TOKEN + '/getFile?file_id=' + re.query.id)
                    .then(r => r.json())
                    .then(async r => {
                        re.file = r.result.file_path.split("file_")[1].split(".")[0]
                        // X.file = re.file
                        return 'https://api.telegram.org/file/bot' + TOKEN + '/' + r.result.file_path
                    })
                  
                // if (re.caption) {
                //     re.caption = re.caption.toUpperCase()
                // } else {
                //     re.caption = "ПО-СТРЕЛКЕ"
                // }
                var i = "-" + Date.now()
                re.photo = `https://res.cloudinary.com/o6/image/upload/c_scale,w_1280/b_aquamarine,co_black,l_text:Yanone%20Kaffeesatz_42_bold_center:%20${re.query.ll.replace(/,/g, "%20") + "%20" + re.query.ref}%20${re.query.cap.replace(/ /g, "%20")}%20,fl_relative,w_1,y_1.01,g_south/l_i:${re.query.n}${re.file},fl_relative,w_1,y_1.01,g_south/${re.query.geo}`
 
          re.photo = await fetch(`https://api.cloudinary.com/v1_1/o6/image/upload?public_id=${re.query.n}${re.file}&upload_preset=o6oooo&file=${encodeURIComponent(re.photo)}`).then(r => r.json()).then(r => {
                    return "https://res.cloudinary.com/o6/"+r.public_id
                })
     return new Response(
     JSON.stringify(re.photo, null, 4), {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }
    )
})
// router.get('/:x', async ({ params }) =>  {

//     //var h = ``
//     // var v = await OV.get(String(params.id))
//              const image = await fetch(`https://api.telegram.org/file/bot901631976:AAEZ92ShN9zMswAG2or2VlGmJrxJaEsgP_8/photos/file_${params.id}.jpg`)
          
//             const {
//                 readable,
//                 writable
//             } = new TransformStream()
//             image.body.pipeTo(writable)
//             const r = new Response(readable, image)
//             r.headers.set('Cache-Control', 'max-age=1500')
//             return r
// })

router.get('/i/:id', async ({ params }) =>  {

    var e = params.id.slice(0,1)
     var c = params.id.slice(1)
    
    const image = await fetch(`https://api.telegram.org/file/bot${t[e]}/photos/file_${c}.jpg`)
          
            const {
                readable,
                writable
            } = new TransformStream()
            image.body.pipeTo(writable)
            const r = new Response(readable, image)
            r.headers.set('Cache-Control', 'max-age=1500')
            return r
})
// GET item
// router.put('/', async re => {
//    // console.warn(request)
//     return await E.upd( await re.json()).then( r => new Response( { status: 200 }) )
// })
// POST to the collection (we'll use async here)
// router.post('/', async req => {
//     const req2 = req.clone()
  
  
//   //_posts = await OV.get("X").then(r=>pa(r))
  
    
//   // await E.set(re)

  
//   try {

//  await E.upd(await req.json())



  


//   } catch (error) {
//     console.error(error)
 
//   }
//     finally {

//  await bot(await req2.json())
 

  


//   } 
 

  //  _posts.unshift(  _p[Math.floor(Math.random() * _p.length)])

//console.log(_posts)   

// function getUniqueListBy(arr, key) {
//     return [...new Map(arr.map(item => [item[key], item])).values()]
// }

// _posts = getUniqueListBy(_posts, 'pic')
//
//await OV.put("X",JSON.stringify(_posts))
//   return new Response({
//       status: 200})
//     //  return new Response(
//     //  JSON.stringify(B, null, 4), {
//     //     headers: {
//     //         'Content-Type': 'application/json;charset=UTF-8'
//     //     }
//     // }
//     // )
// })
async function handleinline(d) {
    let inline_query_id = d.id
    let query = d.query || ""
    let offset = d.offset || ""
    offset = offset.split('|')
    let res_data = []
    if (offset.length < 2) {
        offset = [inline_query_id, 0]
    }
    offset[1] = parseInt(offset[1])
    let hh = await db.list(d)
    console.warn(hh)
    //hh = Object.values(hh).filter(e=>e.is)
    // hh = hh.filter(h=>{
    //     return h.slug.toLowerCase().indexOf(query.toLowerCase()) > -1 || h.img.indexOf(query) > -1
    // })
    for (let i = 0; i < 49; i++) {
        let h = hh[offset[1] * 49 + i]
        if (h !== undefined)
            res_data.push({
                id: h.id,
                title: h.id + " #" + (String(i).padStart(3, '0')),
                caption: [h.pic,"www.google.com/maps?q="+h.geo,h.cap].join("\n"),
                thumb_url: h.th,
                photo_url: h.url,
                type: 'photo',
        //         reply_markup: {
        //     "inline_keyboard": [
        //         [{
        //             "text": "L",
        //             "callback_data": "LLLL"
        //         },{
        //             "text": ":RE",
        //             "callback_data": "re"
        //         }]
        //     ]
        // }
                // input_message_content: {
                //     message_text: h.thumb_url
                // }
            })
    }
    offset[1]++
    if (res_data.length < 49) // 一次会返回 49 条 如果结果小于 49 说明翻完了，那么就不用给新的 offset 了
        offset = []
    return {
        chat_id: d.chat,
        method: "answerInlineQuery",
        inline_query_id: inline_query_id,
       cache_time: 0,
        results: res_data,
        next_offset: offset.join('|')
    }
}
var H = (x,y,z,f) => `<!DOCTYPE html>
<head>

    <meta property="og:site_name" content="${y}">
    <meta property="og:title" content="${f}">
    <meta property="og:description" content="${Date.now()}">
    <meta property="og:image" content="${z}">
 <meta data-rh="true" property="al:android:app_name" content="Medium" />
    <meta property="article:published_time" content="2020-02-03T23:10:04.654Z">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Yanone+Kaffeesatz" />
<style>
* {
      clear: both; 
    text-align: center; 
    margin-left: auto; 
    margin-right: auto;
  background-color: #222;

}

figure {

      
 
 
    padding-bottom: 13%; 
    padding-top: 2%;    
    box-sizing: border-box; 
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;

min-height: 100%; 
    width: auto;
    display: flex;
    flex-flow: column;
    margin: auto;
    align: center;
}

img {
     width: 960px;
}

figcaption {
  
    color: #fff;
    font-family: "Yanone Kaffeesatz";
    text-align: center;
}
</style>
</head>
<body>
    <div class="article">
           <article class="article__content">
         
${x}


</article>
    </div>
</body>
</html>`
// 404 for everything else
router.all('*', async () => {

function getRandomInt(max) {
max = max || 10000
  return Math.floor(Math.random() * max);
}
var geo = () => `50.4${getRandomInt()},30.6${getRandomInt()}`
geo = geo()
  var lll = await fetch("https://www.mapquestapi.com/geocoding/v1/reverse?key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&location="+geo)
    .then( r => r.json() )
  .then( r => r.results[0].locations[0].street.replace(/вулиця/gi,'').replace(/проспект/gi,'').trim())
  lll = await lll
var rr = () => `https://www.mapquestapi.com/staticmap/v5/map?banner=%20${geo}%20${lll}%20|000000-7effd4-sm-top&locations=${geo}|marker-lg-black-${"aquamarine"}-${"A"}&zoom=18&size=640,170@2x&key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=sat`

var v = await fetch(`https://i----i.firebaseio.com/*/.json`).then(r => r.json()).then(r => Object.values(r || []))
var w = await v[0].url
//console.log(w)
v = await v.map(e=>`<img src="${e.url}"><figcaption>${e.id}</figcaption>`)
const tree = []

const node = {}

node.tag = 'figure'
// node.attrs = { class: 'article__content' }
node.content = v.map((content) => ( {tag:"div",content} ))



tree.push(node)

const html = render(tree, {})

return new Response(H(html,v.length,w,lll), {
        headers: {
             'Content-Type': 'text/html;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            "Cache-Control": "max-age=0"
        }
    })
})
// attach the router "handle" to the event handler
addEventListener('fetch', event =>{
    var { pathname } = new URL(event.request.url)
    pathname = pathname.replace("/", "")
//if (event.request.method === 'GET' && !pathname) return event.respondWith(handleEvent(event).catch(err => console.error(err)))
// console.log(event)
//   L=L.length>0?L:"one"
//   LL=LL.length>0?LL:"two"
//   console.log(L,LL)
// var request = event.request
//   request.ev = event
  event.respondWith(router.handle(event.request).catch(err => console.error(err)))
}
)

// var str = (j=[]) => { try { j = JSON.stringify(JSON.parse(j), null, 4) } catch (err) { j = JSON.stringify(j, null, 4)} return j }

// var pa = j => { 
//   try { return JSON.parse(JSON.stringify(j)) } 
//   catch (err) { return j } 
   
// }
var pa = j => 
{
    try { j = JSON.parse(j) } catch (err) {} return j || []
}
var str = (j=[]) => {
    try {
        j = JSON.stringify(JSON.parse(j), null, 4)
    } catch (err) {
        j = JSON.stringify(j, null, 4)
    }
    return j
}