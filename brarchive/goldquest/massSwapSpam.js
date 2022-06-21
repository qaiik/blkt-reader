let e = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;

function ruinPlayer(name) {
    setInterval(() => {
        e.memoizedProps.firebase.setVal({
            id: e.memoizedProps.client.hostId,
            path: "c/" + e.memoizedProps.client.name,
            val: {
                b: e.memoizedProps.client.blook,
                g: e.stateNode.state.gold,
                tat: name + ":swap:" + 0
            }
        })
    }, 300)
}

e.memoizedProps.firebase.getDatabaseVal(e.memoizedProps.client.hostId, "c", (...o) => {
    let c = Object.keys(...o)
    c = c.filter(v => {
        return v !== e.memoizedProps.client.name
    })
    c.forEach((player) => {
        console.log(`hacking ${player}`)
        ruinPlayer(player)
    })
})
