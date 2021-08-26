const Router = ({ base = '', routes = [] } = {}) => ({
  __proto__: new Proxy({}, {
    get: (t, k, c) => (p, ...H) =>
      routes.push([
        k.toUpperCase(),
        RegExp(`^${(base + p)
          .replace(/(\/?)\*/g, '($1.*)?')
          .replace(/\/$/, '')
          .replace(/:(\w+)(\?)?(\.)?/g, '$2(?<$1>[^/]+)$2$3')
          .replace(/\.(?=[\w(])/, '\\.')
        }/*$`),
        H,
      ]) && c
  }),
  routes,
  async handle (q, ...a) {
    let s, m,
        u = new URL(q.url)
    q.query = Object.fromEntries(u.searchParams)
    for (let [M, p, H] of routes) {
      if ((M === q.method || M === 'ALL') && (m = u.pathname.match(p))) {
        q.params = m.groups
        for (let h of H) {
          if ((s = await h(q.proxy || q, ...a)) !== undefined) return s
        }
      }
    }
  }
})

module.exports = { Router }