var encoder = async (b, c) => {
		let a = window.crypto.getRandomValues(new Uint8Array(12));
		return window.btoa(
			Array.from(a)
			.map((a) => String.fromCharCode(a))
			.join("") +
			Array.from(
				new Uint8Array(
					await window.crypto.subtle.encrypt({
							name: "AES-GCM",
							iv: a
						},
						await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(c)), {
							name: "AES-GCM"
						}, !1, ["encrypt"]),
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
			b({
				blooketBuild: a.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
				secret: a.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
			});
		} catch {
			c("Could not fetch auth details");
		}
	});

(async () => {
	Object.assign(window, await getValues())
})();
async function join(id, name, blook) {
	fetch("https://fb.blooket.com/c/firebase/join", {
		headers: {
			"X-Blooket-Build": window.blooketBuild,
			"Content-Type": "text/plain",
			Accept: "application/json, text/plain, */*",
		},
		mode: "cors",
		referrerPolicy: "no-referrer",
		credentials: "include",
		method: "put",
		body: await encoder({
				id: id.toString(),
				name: name,
			},
			window.secret
		),
	}).then((async function() {
		fetch(`https://fb.blooket.com/c/firebase/games/${id}/v`, {
			headers: {
				"X-Blooket-Build": window.blooketBuild,
				"Content-Type": "text/plain",
				Accept: "application/json, text/plain, */*",
			},
			mode: "cors",
			referrerPolicy: "no-referrer",
			method: "put",
			credentials: "include",
			body: await encoder({
					path: `c/${name}`,
					value: {
						b: blook
					},
				},
				window.secret
			),
		});
	}))
}
var blooks = ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus", "Wizard", "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Crab", "Elf", "Witch", "Fairy", "Slime Monster", "Jester", "Dragon", "Unicorn", "Queen", "King", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Gingerbread Man", "Gingerbread House", "Snowman", "Santa Claus", "Frost Wreath", "Tropical Globe", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", "Sandwich", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Werewolf", "Ghost", "Haunted Pumpkin", "Spooky Pumpkin", "Spooky Mummy", "Spooky Ghost", "Astronaut", "Red Astronaut", "Blue Astronaut", "Green Astronaut", "Pink Astronaut", "Orange Astronaut", "Yellow Astronaut", "Black Astronaut", "Purple Astronaut", "Brown Astronaut", "Cyan Astronaut", "Lime Astronaut", "Tim the Alien", "Rainbow Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", "Old Boot", "Jellyfish", "Clownfish", "Frog", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Baby Shark", "Megalodon", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Agent Owl", "Master Elf", "Phantom King", "Panda", "Sloth", "Tenrec", "Flamingo", "Zebra", "Elephant", "Lemur", "Peacock", "Chameleon", "Lion", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Amber", "Dino Egg", "Dino Fossil", "Stegosaurus", "Velociraptor", "Brontosaurus", "Triceratops", "Tyrannosaurus Rex"]

let e = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;

function randomBlook() {
  return blooks[Math.floor(Math.random() * blooks.length)]
}

function doBlookChange(player) {
  setInterval(async ()=>{
    await join(e.memoizedProps.client.hostId, player, randomBlook())
  }, 200)
}

e.memoizedProps.firebase.getDatabaseVal(e.memoizedProps.client.hostId, "c", (...o) => {
    let c = Object.keys(...o)
    c = c.filter(v => {
        return v !== e.memoizedProps.client.name
    })
    c.forEach((player) => {
        console.log(`changing ${player}`)
        doBlookChange(player)
    })
})
