var encoder = async (b, c) => {
        let a = window.crypto.getRandomValues(new Uint8Array(12));
        return window.btoa(
            Array.from(a)
                .map((a) => String.fromCharCode(a))
                .join("") +
                Array.from(
                    new Uint8Array(
                        await window.crypto.subtle.encrypt(
                            { name: "AES-GCM", iv: a },
                            await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(c)), { name: "AES-GCM" }, !1, ["encrypt"]),
                            new TextEncoder().encode(JSON.stringify(b))
                        )
                    )
                )
                    .map((a) => String.fromCharCode(a))
                    .join("")
        );
    },
    getValues = () =>
        new Promise((b, c) => {
            try {
                let a = window.webpackJsonp
                    .map((a) => Object.keys(a[1]).map((b) => a[1][b]))
                    .reduce((a, b) => [...a, ...b], [])
                    .find((a) => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(a.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(a.toString()))
                    .toString();
                b({ blooketBuild: a.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0], secret: a.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1] });
            } catch {
                c("Could not fetch auth details");
            }
        });
async function encfetch(c, a) {
    let b = await getValues();
    return (
        (a.credentials = "include"),
        (a.body = await encoder(a.body, b.secret)),
        a.headers || (a.headers = {}),
        a.headers["content-type"] || (a.headers["content-type"] = "application/json"),
        a.headers["X-Blooket-Build"] || (a.headers["X-Blooket-Build"] = b.blooketBuild),
        fetch(c, a)
    );
}
