function restoreFunction(name) {
  let ifrof = document.createElement("iframe")
  ifrof.style.visibility = "hidden"
  ifrof.style.width = "0px"
  ifrof.style.height = "0px"
  ifrof.scrolling = "no"
  document.body.appendChild(ifrof)
  let fnc = ifrof.contentWindow[name];
  return fnc
}



var getValues = () => new Promise((e, t) => {
    try {
        let n = window.webpackJsonp.map(e => Object.keys(e[1]).map(t => e[1][t])).reduce((e, t) => [...e, ...t], []).find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString())).toString();
        e({
            blooketBuild: n.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
            secret: n.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
        })
    } catch {
        t("Could not fetch auth details")
    }
});

var encodeValues = async (e, t) => {
    let d = window.crypto.getRandomValues(new Uint8Array(12));
    return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: d
    }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t)), {
        name: "AES-GCM"
    }, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e))))).map(e => String.fromCharCode(e)).join(""))
};
async function getName() {
  let r = await fetch("https://api.blooket.com/api/users", {
      credentials: "include"
  })
  return (await r.json()).name
}

async function getBlooks() {
  let r = await fetch("https://api.blooket.com/api/users", { credentials: "include" })
  return (await r.json()).unlocks
}

async function sellBlook(name,qty,d) {
    return await fetch("https://api.blooket.com/api/users/sellblook", {
        method: "PUT",
        credentials: "include",
        headers: {
            "content-type": "application/json",
            "X-Blooket-Build": d.blooketBuild
        },
        body: await encodeValues({
            name: await getName(),
            blook: name,
            numSold: qty //quantity
        }, d.secret)
    })
}

(async ()=>{
  let e = await getValues();
  let bv = await getBlooks(); //blook values
  for (const key in bv) {
    if (bv[key]>1) {
      console.log(`Selling ${bv[key]-1} ${key.toUpperCase()}`)
      let rsp = await sellBlook(key, (bv[key]-1), e)
      if (!rsp.ok) console.log(`something went wrong selling ${key.toUpperCase()}`)
    }
  }
  restoreFunction("alert")("Done!")
  location.reload()
})();
    
