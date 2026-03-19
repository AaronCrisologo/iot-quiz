// Flashcard data extracted from IoT PDF
const flashcards = [
    {
        front: "What is IoT?",
        back: "Internet of Things is the network of smart physical objects: physical objects (devices, vehicles, buildings) embedded with sensors, computation unit, memory unit, power source, and network connectivity, which enables them to collect and exchange data, analyze the collected data to extract new insight and respond accordingly."
    },
    {
        front: "Goal of IoT",
        back: "To 'connect the unconnected' - Things or objects that were not supposed to be connected to the Internet. IoT did the technology transition in traditional computer networks."
    },
    {
        front: "IoT is the unification of which technologies?",
        back: "Embedded Systems, Low Power and Low Rate Network, Internet, Cloud Computing, Data Analytics, Big Data, Edge Intelligence, Network Security and Data Security, Software Defined Networks"
    },
    {
        front: "Alternate Definition of IoT",
        back: "The Internet of Things (IoT) is the network of physical objects that contain embedded technology to communicate and sense or interact with their internal states or the external environment."
    },
    {
        front: "Who coined the term 'Internet of Things'?",
        back: "Kevin Ashton of Procter & Gamble, later MIT's Auto-ID Center, in 1999. He said: 'In 20th century, computers were brains without senses — they only knew what we told them. Now in 21st century, computers are sensing things for themselves!'"
    },
    {
        front: "Early IoT example (1980s)",
        back: "Carnegie Mellon University students connected a Coca-Cola vending machine to the network to report its contents, saving treks if it was out of Coke."
    },
    {
        front: "First internet-connected toaster",
        back: "John Romkey connected a toaster to the internet in 1990. He developed the first TCP/IP stack for IBM PC in 1983."
    },
    {
        front: "Cambridge coffee pot camera",
        back: "In 1991, University of Cambridge students used a web camera to report on coffee availability in their computer labs."
    },
    {
        front: "First internet-connected refrigerator",
        back: "LG Electronics introduced the world's first refrigerator connected to the internet at the beginning of the 21st Century."
    },
    {
        front: "When did IoT reach mass market?",
        back: "Popularity accelerated in 2010/2011 and reached mass market from 2013-14."
    },
    {
        front: "Benefits: Real-Time Monitoring",
        back: "IoT sensors can monitor equipment and processes in real-time, providing valuable sensed data that can be used to streamline operations, reduce waste, and increase output."
    },
    {
        front: "Benefits: Automation of Processes",
        back: "Machines can assemble parts with more precision and speed, resulting in fewer errors during assembly. Robots can very rapidly detect faults that may not be detected by the human eye."
    },
    {
        front: "Benefits: Improved Efficiency or Productivity",
        back: "IoT helps to enhance productivity by streamlining processes, automating tasks, and providing real-time data insights."
    },
    {
        front: "Benefits: Predictive Maintenance",
        back: "Continuous monitoring of systems and processes to identify key indicators of problems before they result in downtime or system failure."
    },
    {
        front: "Benefits: Improved or New Insights",
        back: "IoT generates vast amounts of data that can be analyzed to identify trends, inefficiencies, and areas for improvement. Organizations can leverage these insights to enhance productivity and operational effectiveness."
    },
    {
        front: "Benefits: Cost Reduction",
        back: "When an organization can improve system uptime, automate processes, reduce the risk of failure and gain insights that support better decision making, and reduce resource usage, the result is efficiency and cost savings."
    },
    {
        front: "Benefits: Optimized Work Environments",
        back: "IoT technology can help create more comfortable and efficient workspaces."
    },
    {
        front: "Benefits: Adaptability",
        back: "The ability to adapt to new business requirements, customer needs, and changing conditions, or scale the deployment in response to business growth or customer requirements."
    },
    {
        front: "What are the 5 layers of IoT Architecture?",
        back: "1) Perception/Sensing Layer, 2) Network/Transport Layer, 3) Edge Processing Layer, 4) Cloud Processing Layer, and 5) Application Layer"
    },
    {
        front: "What is a Sensor?",
        back: "A device that detects and measures a physical property from its environment and converts it into a signal, typically an electrical one, that can be read by an observer or an instrument."
    },
    {
        front: "Types of Sensors: Environmental",
        back: "Temperature, humidity, air quality, and gas sensors."
    },
    {
        front: "Types of Sensors: Biometric & Wearable",
        back: "Heart rate, SpO2, electrodermal activity sensors."
    },
    {
        front: "Types of Sensors: Positioning",
        back: "GPS, indoor positioning beacons."
    },
    {
        front: "What is an Actuator?",
        back: "Devices that convert electrical signals from IoT systems into physical action. They are the output mechanism that allows IoT systems to interact with and control the physical world based on sensor data and intelligent decisions."
    },
    {
        front: "Types of Actuators: Electrical Motors",
        back: "DC motors (smart home, personal mobility), Servo motors (robotics, pet feeder), Stepper motors (3D printing, robotics)."
    },
    {
        front: "Types of Actuators: Solenoid",
        back: "Used in security systems, automotive applications, and vending machines."
    },
    {
        front: "Types of Actuators: Hydraulic",
        back: "Used in construction equipment, manufacturing, and marine applications."
    },
    {
        front: "Types of Actuators: Electroactive Polymer",
        back: "Used in biomedical devices and microfluidics."
    },
    {
        front: "Types of Actuators: Voice Coil",
        back: "Used in audio systems and medical imaging."
    },
    {
        front: "What is Arduino?",
        back: "An open-source electronics platform based on easy-to-use hardware and software. With Arduino, you can control almost everything around you be it simple LED or giant robots."
    }
];

// DOM elements
let currentCardIndex = 0;
const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const flipBtn = document.getElementById('flipBtn');
const currentCardSpan = document.getElementById('currentCard');
const totalCardsSpan = document.getElementById('totalCards');
const progressFill = document.getElementById('progressFill');

// Initialize
function init() {
    totalCardsSpan.textContent = flashcards.length;
    updateProgress();
    displayCard(currentCardIndex);
}

// Display a card
function displayCard(index) {
    const card = flashcards[index];
    cardFront.innerHTML = `<h2>${card.front}</h2>`;
    cardBack.innerHTML = `<h2>Answer</h2><div class='answer-content'>${formatBackContent(card.back)}</div>`;
    currentCardSpan.textContent = index + 1;
}

// Format back content with proper line breaks and bullet points
function formatBackContent(content) {
    // Convert bullet points to list items
    let formatted = content
        .replace(/\n/g, '<br>')
        .replace(//g, '•')
        .replace(//g, '•')
        .replace(//g, '•')
        .replace(//g, '→');
    return formatted;
}

// Flip card
function flipCard() {
    flashcard.classList.toggle('flipped');
}

// Navigate to next card
function nextCard() {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        displayCard(currentCardIndex);
        updateProgress();
        // Reset flip state
        flashcard.classList.remove('flipped');
    }
}

// Navigate to previous card
function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        displayCard(currentCardIndex);
        updateProgress();
        // Reset flip state
        flashcard.classList.remove('flipped');
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentCardIndex + 1) / flashcards.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Event listeners
flipBtn.addEventListener('click', flipCard);
flashcard.addEventListener('click', flipCard);
nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case ' ':
        case 'Enter':
            e.preventDefault();
            flipCard();
            break;
        case 'ArrowRight':
            e.preventDefault();
            nextCard();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            prevCard();
            break;
    }
});

// Initialize on page load
init();
