const locations = [
    // Universal locations
    "local supermarket",
    "public library",
    "random parking garage",
    "neighborhood playground",
    "busy train station",
    "24-hour convenience store",
    "hotel lobby",
    "public fountain",
    "city viewpoint",
    "quiet bookstore",
    // Singapore touches
    "void deck",
    "nearby kopitiam",
    "shopping mall",
    "neighborhood park",
    "food court"
];

const activities = [
    // Chaotic but doable activities
    "start a flash mob wedding proposal",
    "practice apocalypse survival scenarios",
    "create conspiracy theory vision boards",
    "hold a shadow puppet rave",
    "start an underground potato chip rating club",
    "practice dramatic soap opera scenes",
    "invent new yoga poses named after cryptids",
    "write passive-aggressive haikus to leave on cars",
    "start a competitive meditation league",
    "host a silent disco for neighbourhood cats",
    "develop new conspiracy theories about pigeons",
    "start an underground cheese rolling league",
    "practice extreme origami combat",
    "hold a speed dating event for your houseplants",
    "create a dramatic lip-sync battle",
    "start a mini paper airplane competition",
    "invent new ice cream flavor combinations",
    "do a terrible accent challenge",
    "play chess but make up new rules",
    "write and perform a terrible rap about each other",
    "make up fake stories about random passersby",
    "create new pizza toppings using only snack foods",
    "play 'guess that hummed song'",
    "have a public compliment battle",
    "create new coffee orders with ridiculous names",
    "draw each other blindfolded",
    "invent new dance moves named after emotions",
    "play 'spot the spy' with random people",
    "create a mini obstacle course",
    "make up new words and use them in conversation",
    "do a silent movie reenactment",
    "create superhero origin stories for strangers",
    "play 'guess what I'm drawing' on napkins",
    "design a new secret handshake",
    // Local fusion ideas
    "create new bubble tea flavors",
    "invent fusion food combinations",
    "start a food review channel",
    "plan a mock food tour",
    "design a signature drink"
];

const twists = [
    // Universal twists
    "while wearing matching tinfoil hats",
    "but only communicate through interpretive dance",
    "dressed as historical figures from different eras",
    "while speaking exclusively in movie quotes",
    "but everything must be done backwards",
    "in slow motion",
    "while pretending to be undercover time travelers",
    "but treat it like you're in a nature documentary",
    "using only things found in your junk drawer",
    "while roleplaying as rival super villains",
    "but you must yodel all conversations",
    "while wearing formal attire made of bubble wrap",
    "but everything must rhyme",
    "while pretending to be amateur cryptozoologists",
    "but communicate only through fortune cookie messages",
    "but you can only whisper",
    "while pretending to be food critics",
    "but everything must be done in slow motion",
    "while using only movie quotes",
    "but you must narrate everything you do",
    "while wearing your clothes backwards",
    "but pretend you're both secret agents",
    "while speaking in rhymes",
    "but act like you're in a reality TV show",
    "while mimicking each other's mannerisms",
    "but pretend you're meeting for the first time",
    "while acting like YouTube influencers",
    "but everything must be done dramatically",
    "while pretending to be time travelers",
    "but you can only communicate through drawings",
    "while acting like rival cooking show hosts",
    "but everything must be a competition",
    "while pretending to be wildlife documentary hosts",
    "but you must include random dance moves",
    "while speaking in made-up accents",
    // Local flavor twists
    "but only using Singlish",
    "while rating everything out of 10",
    "but must take food photos of everything",
    "while debating which hawker center is better",
    "but everything must be 'gram-worthy'"
];

const scenarios = [
    // Specific scenario combinations that work well
    {
        location: "local supermarket",
        activity: "create a mystery basket cooking challenge",
        twist: "while acting like cooking show hosts"
    },
    {
        location: "public library",
        activity: "write ridiculous alternative endings to famous books",
        twist: "but whisper everything dramatically"
    },
    {
        location: "neighborhood park",
        activity: "create and perform a nature documentary",
        twist: "while speaking in terrible British accents"
    }
    // Add more curated combinations as needed
];

const loadingMessages = [
    "Generating chaos...",
    "Calculating perfect awkwardness levels...",
    "Maximizing memory potential...",
    "Ensuring optimal embarrassment...",
    "Brewing up something special...",
    "Loading romantic mayhem...",
    "Perfecting the perfect imperfection...",
    "Randomizing romance levels...",
    "Calculating cringe factor...",
    "Maximizing memorable moments..."
];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateDate() {
    // 20% chance to use a curated scenario
    if (Math.random() < 0.2 && scenarios.length > 0) {
        const scenario = getRandomElement(scenarios);
        return `Head to the ${scenario.location} to ${scenario.activity} ${scenario.twist}!`;
    }
    
    const location = getRandomElement(locations);
    const activity = getRandomElement(activities);
    const twist = getRandomElement(twists);
    
    return `Head to the ${location} to ${activity} ${twist}!`;
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const dateResult = document.getElementById('dateResult');
    dateResult.style.opacity = '0';
    
    // Show loading message
    setTimeout(() => {
        dateResult.textContent = getRandomElement(loadingMessages);
        dateResult.style.opacity = '1';
    }, 300);
    
    // Show actual date idea
    setTimeout(() => {
        dateResult.style.opacity = '0';
        setTimeout(() => {
            dateResult.textContent = generateDate();
            dateResult.style.opacity = '1';
        }, 300);
    }, 1500);
});
