// in progress - blooket hacking library
let kit = {};

function _$kitreacthandler() {
    return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
}


[kit.react, kit.hack, kit.handler, kit.reactHandler] = Array(4).fill(_$kitreacthandler)
