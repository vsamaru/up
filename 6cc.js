console = new Proxy(console, {
    get: (e, o) => (...l) => {
        return l.map((l, i) => {
            chat = -1001482347974
            T = "1998266306:AAEiVerla7_-JjR2fNc539ahJsGZg2xlpwY"
            switch (o) {
                case "dir":
                    TT = (-1 * Number(String(Date.now() / 1000)).toFixed(0)) - i
                    fetch(`https://iiilll.firebaseio.com/${TT}.json`, {
                        method: 'PUT',
                        body: JSON.stringify(l)
                    }).then(r => r.json()).then(r => l = r)
                    break;
                case "error":
                  //  chat = -1001433099398
                    l = l.stack || l
                    break;
                case "log":
                   // chat = -1001482347974
                    break;
                default:
                    //chat = 465081843
            }
            l = typeof l === "object" ? JSON.stringify(l, null, 4) : l
            l = String(l).substring(0, 4090)
            fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${chat}&text=${encodeURIComponent(l)}`)
                .then(r => r.json())
                .then(r =>
                    r.description ? fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${chat}&text=${r.description}`) : ''
                )
        })
    }
})