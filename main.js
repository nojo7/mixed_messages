// Themed messages stored in an object to call on in the message generator function
const messagesObj = {
    encourage: [
        'Look, you have one shot. One opportunity at this life.',
        'Yesterday is the past. Seize everything you ever wanted.',
        'Your moment is now. Capture it. Don\'t let it slip.',
        'The world is yours for the taking.',
        'This opportunity comes once in a lifetime.',
        'Success is your only option. Failure is not.'
    ],
    inspire: [
        'Believe in the power of your dreams and the strength of your determination.',
        'With every step forward, you rewrite the story of your success.',
        'Embrace challenges as stepping stones to greatness, and let your resilience be your guiding light.',
        'You possess within you the untapped potential to achieve extraordinary things. Unleash it with unwavering faith.',
        'In the realm of possibility, your dreams have no limits. So dare to dream big and chase them fearlessly.',
        'The fire within you burns brighter than any obstacle you face. Let it ignite your passion and propel you towards greatness.'
    ],
    quote: [
        'Every day is a new opportunity to reach that goal. - Rick Ross',
        'We can\'t change the world unless we change ourselves. - Biggie Smalls',
        'If it\'s flipping hamburgers at McDonald\'s, be the best hamburger flipper in the world. Whatever it is you do, you have to master your craft. - Snoop Dogg',
        'The more time you spend contemplating what you should have done... you lose valuable time planning what you can and will do. - Lil Wayne',
        'Sometimes a loss is the best thing that can happen. It teaches you what you should have done next time. - Snoop Dogg',
        'A goal is just a dream with a deadline. - Drake'
    ],
};

// Gets random indexes for each property of the messagesObj and prints a dose of motivation
const messageGenerator = () => {
    const encourage = Math.floor(Math.random() * messagesObj.encourage.length);
    const inspire = Math.floor(Math.random() * messagesObj.inspire.length);
    const quote = Math.floor(Math.random() * messagesObj.quote.length);
    console.log(`Here's your daily dose of motivation:\n${messagesObj.encourage[encourage]}\n${messagesObj.inspire[inspire]}\n${messagesObj.quote[quote]}`);
}

// Calls messageGenerator to print a random message of motivation to the console
messageGenerator();