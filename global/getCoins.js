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


(async ()=>{
  let e = await getValues();
  fetch("https://api.blooket.com/api/users/add-rewards", {
        method: "PUT",
        credentials: "include",
        body: await encodeValues({
            addedTokens: 500,
            addedXp: 300,
            name: await getName()
        }, e.secret),
        headers: {
            "content-type": "application/json",
            "X-Blooket-Build": e.blooketBuild
        }
    }).then((res)=>{
        if (res.ok) {
            restoreFunction("alert")("Max coins and max xp added to your account.")
            location.reload()
        } else {
            restoreFunction("alert")("There was an error adding coins and xp.")
        }
    })
})();
