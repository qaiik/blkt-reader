// in progress - blooket hacking library
let kit = {};

kit._$krh = function _$kitreacthandler() {
    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
}

function unalloc(name) {
    delete kit[name]
}

[kit.react, kit.hack, kit.handler, kit.reactHandler] = Array(4).fill(kit._$krh);
unalloc("_$krh");

kit.mode = () => location.pathname.split("/").at(-1);


