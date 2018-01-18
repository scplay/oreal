# oreal
is that object has real property

## How to install

```
npm install --save oreal
```

## How to use
```
let oreal = require('oreal');

let obj = {a: {b: [1]}};

oreal(obj, 'a.b.0'); // true

oreal(obj, 'a.b.c'); // false

oreal(obj, 'a.b.c.d.e.f.g.h.i.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z'); // false
    
```