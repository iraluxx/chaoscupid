const locations = [
    "abandoned mall that's definitely not haunted",
    "karaoke room at 3am in full costume",
    "fancy hotel lobby pretending you're rich",
    "IKEA after getting purposefully lost",
    "McDonald's drive-thru but you're both walking",
    "local park but it's YOUR park now",
    "cat cafe but you're allergic",
    "that one escalator that's always broken",
    "random wedding you weren't invited to",
    "public fountain at midnight",
    "extremely bougie pet shop",
    "car wash but you don't have a car",
    "museum security camera blind spots",
    "that one bench that looks suspicious",
    "anywhere as long as you're narrating like Morgan Freeman"
];

const activities = [
    "recreate the 'Draw me like your French girls' scene with stick figures",
    "practice your 'I am inevitable' speech to pigeons",
    "start a fight club but it's just aggressive compliments",
    "do a dramatic reading of product ingredients",
    "launch your villain origin story",
    "audition for roles that don't exist",
    "start a cult around bubble tea",
    "practice your Jurassic Park raptor calls",
    "make uncomfortably long eye contact with statues",
    "give TED talks to random objects",
    "write passive-aggressive letters to buildings",
    "practice your Matrix slow-mo dodges",
    "give nature documentary commentary about passersby",
    "start a very serious investigation about nothing",
    "rehearse for the heist you'll never actually do"
];

const twists = [
    "but you must quote vines that don't exist",
    "while aggressively avoiding the floor because it's lava",
    "but everything must be explained like a WikiHow article",
    "as if you're in Wes Anderson's deleted scenes",
    "but treating it like a questionable true crime podcast",
    "while carrying a mysterious briefcase that's actually empty",
    "but everything must be done like a TikTok challenge",
    "as if you're both NPCs with questionable AI",
    "but narrate everything like it's The Office",
    "while method acting as badly written characters",
    "but everything needs emotional BGM played from your phone",
    "as if Mercury is permanently in retrograde",
    "but you're both pretending to be each other's evil twin",
    "while recreating scenes from movies that don't exist",
    "but everything must be done in interpretive dance"
];

const movieQuotes = [
    "I'll have what she's having",
    "You're gonna need a bigger boat",
    "I see dead people... on this date",
    "My precious... dinner plans",
    "I am the one who knocks... on random doors",
    "To infinity and the nearest Starbucks",
    "You talkin' to me? In this economy?",
    "Luke, I am your third date",
    "Here's looking at you, awkward person",
    "Houston, we have a situation",
    "I'm having an old friend for dinner... at McDonald's",
    "I'm the king of the world... of this food court",
    "Life is like a box of questionable decisions",
    "They may take our lives, but they'll never take our dinner reservations",
    "You shall not pass... without trying this weird food combo"
];


document.getElementById('generateBtn').addEventListener('click', () => {
    const dateResult = document.getElementById('dateResult');
    dateResult.style.opacity = '0';

const loadingMessages = [
    "Channeling chaotic energy...",
    "Rolling for initiative...",
    "Consulting the prophecy...",
    "Asking your FBI agent for advice...",
    "Manifesting main character energy...",
    "Checking if Mercury is in Gatorade...",
    "Stealing the Declaration of Independence...",
    "Calculating chaotic neutral alignment...",
    "Searching for plot armor...",
    "Setting up the character arc..."
];

setTimeout(() => {
    dateResult.textContent = getRandomElement(loadingMessages);
    dateResult.className = 'result-box result-loading';
    dateResult.style.opacity = '1';
}, 300);

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateDate() {
    const location = getRandomElement(locations);
    const activity = getRandomElement(activities);
    const twist = getRandomElement(twists);
    const quote = getRandomElement(movieQuotes);
    
    // 50% chance to add a movie quote
    const withQuote = Math.random() < 0.5 ? ` Remember: "${quote}"` : '';
    
    return `Mission: Visit the ${location} to ${activity} ${twist}!${withQuote}`;
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

setTimeout(() => {
    dateResult.style.opacity = '0';
    setTimeout(() => {
        dateResult.textContent = generateDate();
        dateResult.className = 'result-box result-generated';
        dateResult.style.opacity = '1';
    }, 300);
}, 1500);
});