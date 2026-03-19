// IoT Quiz Data - Questions and Answers extracted from IoT1_.pdf
const quizData = [
    // Original 15 questions
    {
        question: "What is the primary goal of IoT?",
        correct: "Connect the unconnected",
        wrong: [
            "Replace all human workers",
            "Create artificial intelligence",
            "Eliminate cloud computing",
            "Build faster networks"
        ]
    },
    {
        question: "Who is credited with coining the term 'Internet of Things'?",
        correct: "Kevin Ashton",
        wrong: [
            "John Romkey",
            "Bill Gates",
            "Steve Jobs",
            "Tim Berners-Lee"
        ]
    },
    {
        question: "In what year was the term 'Internet of Things' likely coined?",
        correct: "1999",
        wrong: [
            "1983",
            "1990",
            "2001",
            "2010"
        ]
    },
    {
        question: "What was connected to the internet for the first time in 1990?",
        correct: "A toaster",
        wrong: [
            "A refrigerator",
            "A coffee pot",
            "A vending machine",
            "A car"
        ]
    },
    {
        question: "Which university created the first internet-connected Coca-Cola vending machine?",
        correct: "Carnegie Mellon University",
        wrong: [
            "MIT",
            "Stanford",
            "University of Cambridge",
            "Harvard"
        ]
    },
    {
        question: "What is IoT NOT a unification of?",
        correct: "Blockchain Technology",
        wrong: [
            "Embedded Systems",
            "Low Power and Low Rate Network",
            "Cloud Computing",
            "Data Analytics"
        ]
    },
    {
        question: "What is a sensor?",
        correct: "A device that detects and measures physical properties and converts them into signals",
        wrong: [
            "A device that converts electrical signals into physical action",
            "A device that only connects to the internet",
            "A device that stores data in the cloud",
            "A device that analyzes big data"
        ]
    },
    {
        question: "Which of these is NOT a type of environmental sensor?",
        correct: "Heart rate",
        wrong: [
            "Temperature",
            "Humidity",
            "Air quality",
            "Gas"
        ]
    },
    {
        question: "What is the function of an actuator in IoT systems?",
        correct: "Converts electrical signals into physical action",
        wrong: [
            "Collects data from the environment",
            "Analyzes data patterns",
            "Stores information in the cloud",
            "Connects devices to the internet"
        ]
    },
    {
        question: "Which of these is a type of actuator?",
        correct: "DC Motor",
        wrong: [
            "Temperature sensor",
            "GPS",
            "Heart rate monitor",
            "Humidity sensor"
        ]
    },
    {
        question: "What is Arduino?",
        correct: "An open-source electronics platform based on easy-to-use hardware and software",
        wrong: [
            "A type of sensor",
            "A cloud computing service",
            "A network protocol",
            "A programming language"
        ]
    },
    {
        question: "Which Arduino board is commonly used for IoT projects?",
        correct: "Arduino Uno",
        wrong: [
            "Arduino Mega 2560",
            "Arduino LilyPad",
            "All of the above",
            "None of the above"
        ]
    },
    {
        question: "What are the 5 layers of IoT Architecture?",
        correct: "Perception/Sensing, Network/Transport, Edge Processing, Cloud Processing, Application",
        wrong: [
            "Physical, Data Link, Network, Transport, Application",
            "Sensors, Actuators, Cloud, Edge, Application",
            "Input, Processing, Output, Storage, Communication",
            "Hardware, Software, Network, Security, Application"
        ]
    },
    {
        question: "Which layer is responsible for sensing and collecting data from the physical world?",
        correct: "Perception/Sensing Layer",
        wrong: [
            "Network/Transport Layer",
            "Edge Processing Layer",
            "Cloud Processing Layer",
            "Application Layer"
        ]
    },
    {
        question: "What is NOT a benefit of IoT?",
        correct: "Increased manual labor requirements",
        wrong: [
            "Real-time monitoring",
            "Automation of processes",
            "Predictive maintenance",
            "Cost reduction"
        ]
    },
    // Additional 25 questions to reach 40 total
    {
        question: "Which benefit of IoT involves monitoring equipment and processes as they happen?",
        correct: "Real-Time Monitoring",
        wrong: [
            "Predictive Maintenance",
            "Cost Reduction",
            "Improved Efficiency",
            "Adaptability"
        ]
    },
    {
        question: "What IoT benefit allows machines to assemble parts with more precision and speed?",
        correct: "Automation of Processes",
        wrong: [
            "Real-Time Monitoring",
            "Improved or New Insights",
            "Optimized Work Environments",
            "Cost Reduction"
        ]
    },
    {
        question: "Which IoT benefit helps identify trends and inefficiencies by analyzing data?",
        correct: "Improved or New Insights",
        wrong: [
            "Predictive Maintenance",
            "Real-Time Monitoring",
            "Automation of Processes",
            "Adaptability"
        ]
    },
    {
        question: "What IoT benefit involves identifying problems before they cause downtime?",
        correct: "Predictive Maintenance",
        wrong: [
            "Cost Reduction",
            "Improved Efficiency",
            "Real-Time Monitoring",
            "Optimized Work Environments"
        ]
    },
    {
        question: "Which of these is an environmental sensor type?",
        correct: "Temperature",
        wrong: [
            "Heart rate",
            "GPS",
            "SpO2",
            "Electrodermal activity"
        ]
    },
    {
        question: "Which sensor type would be used to measure a person's pulse?",
        correct: "Biometric & Wearable",
        wrong: [
            "Environmental",
            "Positioning",
            "All of the above",
            "None of the above"
        ]
    },
    {
        question: "Which of these is a positioning sensor?",
        correct: "GPS",
        wrong: [
            "Temperature",
            "Humidity",
            "Heart rate",
            "Gas"
        ]
    },
    {
        question: "What does SpO2 measure?",
        correct: "Blood oxygen saturation",
        wrong: [
            "Heart rate variability",
            "Skin conductance",
            "Body temperature",
            "Air quality"
        ]
    },
    {
        question: "Which actuator type is commonly used in robotics?",
        correct: "Servo",
        wrong: [
            "Solenoid",
            "Hydraulic",
            "Voice coil",
            "Electroactive polymer"
        ]
    },
    {
        question: "Which actuator would be used in a vending machine?",
        correct: "Solenoid",
        wrong: [
            "DC Motor",
            "Servo",
            "Stepper",
            "Voice coil"
        ]
    },
    {
        question: "Which actuator type is used in 3D printing?",
        correct: "Stepper",
        wrong: [
            "DC",
            "Servo",
            "Solenoid",
            "Hydraulic"
        ]
    },
    {
        question: "Which actuator is used in construction equipment?",
        correct: "Hydraulic Actuators",
        wrong: [
            "Electrical motors",
            "Solenoid",
            "Voice coil",
            "Electroactive polymer"
        ]
    },
    {
        question: "Which actuator type is used in biomedical applications?",
        correct: "Electroactive Polymer",
        wrong: [
            "DC Motor",
            "Solenoid",
            "Stepper",
            "Hydraulic"
        ]
    },
    {
        question: "Which actuator is found in audio systems?",
        correct: "Voice Coil Actuators",
        wrong: [
            "Servo",
            "Stepper",
            "Solenoid",
            "Electroactive polymer"
        ]
    },
    {
        question: "Which Arduino board is designed for wearable electronics?",
        correct: "Arduino LilyPad",
        wrong: [
            "Arduino Uno",
            "Arduino Mega 2560",
            "All are suitable for wearables",
            "None are suitable for wearables"
        ]
    },
    {
        question: "Which Arduino board has the most pins and processing power?",
        correct: "Arduino Mega 2560",
        wrong: [
            "Arduino Uno",
            "Arduino LilyPad",
            "They all have the same",
            "Arduino Leonardo"
        ]
    },
    {
        question: "What can Arduino control according to the text?",
        correct: "Almost everything from simple LEDs to giant robots",
        wrong: [
            "Only sensors",
            "Only cloud services",
            "Only network protocols",
            "Only other Arduinos"
        ]
    },
    {
        question: "Which of these is a Smart City IoT application?",
        correct: "Smart traffic management",
        wrong: [
            "Smartphone",
            "Laptop computer",
            "Desktop computer",
            "Television"
        ]
    },
    {
        question: "Which of these is a Smart Home IoT application?",
        correct: "Smart thermostat",
        wrong: [
            "Industrial robot",
            "Connected car",
            "Livestock tracker",
            "Smart factory sensor"
        ]
    },
    {
        question: "Which is an example of Industrial IoT?",
        correct: "Predictive maintenance in manufacturing",
        wrong: [
            "Smart refrigerator",
            "Connected car navigation",
            "Smartphone",
            "Smart watch"
        ]
    },
    {
        question: "Which IoT application involves tracking livestock?",
        correct: "Livestock Management",
        wrong: [
            "Smart City",
            "Smart Home",
            "Industrial IoT",
            "Connected Cars"
        ]
    },
    {
        question: "What does IoT stand for?",
        correct: "Internet of Things",
        wrong: [
            "Internet of Technology",
            "Interconnected Objects Technology",
            "Input Output Transfer",
            "Internal Operational Terminal"
        ]
    },
    {
        question: "Which technology from the list is NOT part of IoT unification?",
        correct: "Virtual Reality",
        wrong: [
            "Embedded Systems",
            "Cloud Computing",
            "Data Analytics",
            "Network Security"
        ]
    },
    {
        question: "What is the main purpose of the Edge Processing Layer?",
        correct: "Process data closer to the source to reduce latency",
        wrong: [
            "Store all data permanently",
            "Connect devices to the internet",
            "Provide user interfaces",
            "Analyze big data in the cloud"
        ]
    },
    {
        question: "What is the main purpose of the Cloud Processing Layer?",
        correct: "Store and analyze large amounts of data",
        wrong: [
            "Collect data from sensors",
            "Transmit data over networks",
            "Control actuators directly",
            "Provide real-time responses only"
        ]
    },
    {
        question: "Which is a main challenge in IoT implementation?",
        correct: "Security and privacy concerns",
        wrong: [
            "Too few devices available",
            "Lack of internet connectivity",
            "No benefits exist",
            "All devices are already connected"
        ]
    },
    {
        question: "What is the IoT Ecosystem?",
        correct: "An interconnected network of devices, infrastructure, computing resources, applications, data, and stakeholders",
        wrong: [
            "Just sensors and actuators",
            "Only cloud computing services",
            "A single type of device",
            "A standalone application"
        ]
    },
    {
        question: "Which layer connects devices to the internet or other networks?",
        correct: "Network/Transport Layer",
        wrong: [
            "Perception/Sensing Layer",
            "Edge Processing Layer",
            "Cloud Processing Layer",
            "Application Layer"
        ]
    },
    {
        question: "What type of data do IoT sensors provide?",
        correct: "Real-time sensed data",
        wrong: [
            "Historical data only",
            "No data at all",
            "Only after manual entry",
            "Random guesses"
        ]
    },
    {
        question: "Which of these is an example of an actuator's output?",
        correct: "Turning on a motor",
        wrong: [
            "Reading a temperature",
            "Sending an email",
            "Storing in database",
            "Displaying on screen"
        ]
    },
    {
        question: "What enables IoT devices to communicate and exchange data?",
        correct: "Network connectivity",
        wrong: [
            "Large size",
            "High power consumption",
            "Manual operation",
            "No connectivity"
        ]
    },
    {
        question: "Which of these is a characteristic of IoT objects?",
        correct: "Embedded with sensors and computation units",
        wrong: [
            "Completely isolated",
            "No power source needed",
            "Cannot connect to networks",
            "Only used in laboratories"
        ]
    },
    // Questions from IoT2_.pdf - IoT Protocols (Chapter 2)
    {
        question: "Why is traditional TCP/IP not automatically the fundamental standard in IoT?",
        correct: "IoT devices are constrained with limited computing power, battery-powered, and communicate over lossy networks",
        wrong: [
            "TCP/IP is too old and outdated",
            "IoT devices don't need networking",
            "TCP/IP is too expensive",
            "IoT requires only wireless technologies"
        ]
    },
    {
        question: "What is a main building block of IoT networks?",
        correct: "Wireless Sensor Network (WSN) or Wireless Sensor and Actuator Network (WSAN)",
        wrong: [
            "Wired Ethernet networks",
            "Bluetooth only",
            "Satellite communication",
            "Fiber optic cables"
        ]
    },
    {
        question: "What is the typical range of short range networks?",
        correct: "A few centimeters up to hundreds of meters",
        wrong: [
            "1-10 kilometers",
            "Only up to 1 meter",
            "Unlimited global range",
            "Only line-of-sight"
        ]
    },
    {
        question: "Which technology is NOT a short range network technology?",
        correct: "Satellite communication",
        wrong: [
            "RFID",
            "NFC",
            "BLE",
            "WLAN"
        ]
    },
    {
        question: "What does RFID stand for?",
        correct: "Radio Frequency Identification",
        wrong: [
            "Remote Frequency Input Device",
            "Radio Frequency Information Data",
            "Rapid Frequency Identification",
            "Readable Frequency Indicator"
        ]
    },
    {
        question: "What is the typical frequency range for RFID?",
        correct: "Low/High/Ultra-high frequencies",
        wrong: [
            "Only 2.4 GHz",
            "Only 13.56 MHz",
            "Only 5 GHz",
            "Only 900 MHz"
        ]
    },
    {
        question: "What is the typical range of RFID?",
        correct: "1cm - 100m",
        wrong: [
            "0.2m only",
            "10-100m only",
            "1-10 km",
            "Unlimited"
        ]
    },
    {
        question: "What is the typical data rate of RFID?",
        correct: "1-100 kbps",
        wrong: [
            "424 kbps",
            "1 Mbps",
            "10 Mbps",
            "1 Gbps"
        ]
    },
    {
        question: "What is the battery life of active RFID tags?",
        correct: "3-5 years",
        wrong: [
            "Months to years",
            "Passive (no battery)",
            "Only a few days",
            "Indefinitely"
        ]
    },
    {
        question: "What is a key role of RFID according to the text?",
        correct: "Foundation of IoT concept (Ashton, 1999)",
        wrong: [
            "Only for payment systems",
            "Only for tracking humans",
            "Only for military applications",
            "Only for internet connectivity"
        ]
    },
    {
        question: "Which of these is NOT an RFID application?",
        correct: "Video streaming",
        wrong: [
            "Tracking",
            "Supply chain",
            "Inventory",
            "Asset management"
        ]
    },
    {
        question: "What does NFC stand for?",
        correct: "Near Field Communication",
        wrong: [
            "Near Frequency Connection",
            "Network Field Communication",
            "Near Field Control",
            "New Frequency Communication"
        ]
    },
    {
        question: "What is the frequency of NFC?",
        correct: "13.56 MHz",
        wrong: [
            "2.4 GHz",
            "900 MHz",
            "5 GHz",
            "60 GHz"
        ]
    },
    {
        question: "What is the typical range of NFC?",
        correct: "~0.2m",
        wrong: [
            "1-100m",
            "10-100m",
            "1-10 km",
            "Unlimited"
        ]
    },
    {
        question: "What is the data rate of NFC?",
        correct: "424 kbps",
        wrong: [
            "1-100 kbps",
            "1 Mbps",
            "10 Mbps",
            "100 Mbps"
        ]
    },
    {
        question: "Which of these is NOT an NFC mode?",
        correct: "Broadcast mode",
        wrong: [
            "Card emulation",
            "Reader/Writer",
            "P2P",
            "All of the above are modes"
        ]
    },
    {
        question: "Which of these is an NFC application?",
        correct: "Payments",
        wrong: [
            "Long-range communication",
            "High-speed data transfer",
            "Satellite linking",
            "Cable replacement"
        ]
    },
    {
        question: "What does BLE stand for?",
        correct: "Bluetooth Low Energy",
        wrong: [
            "Basic Link Encryption",
            "Broadband Low Energy",
            "Bluetooth Light Edition",
            "Binary Link Exchange"
        ]
    },
    {
        question: "What is the frequency of BLE?",
        correct: "2.4 GHz",
        wrong: [
            "13.56 MHz",
            "900 MHz",
            "5 GHz",
            "60 GHz"
        ]
    },
    {
        question: "What is the typical range of BLE?",
        correct: "10-100m",
        wrong: [
            "0.2m",
            "1-10m",
            "1-10 km",
            "Global"
        ]
    },
    {
        question: "What is the data rate of BLE?",
        correct: "1 Mbps",
        wrong: [
            "424 kbps",
            "10 Mbps",
            "100 kbps",
            "10 kbps"
        ]
    },
    {
        question: "What is the battery life of BLE devices?",
        correct: "Months to years",
        wrong: [
            "3-5 years only",
            "Passive (no battery)",
            "Only a few hours",
            "Continuous replacement needed"
        ]
    },
    {
        question: "What is the key feature of BLE?",
        correct: "Ultra-low power design",
        wrong: [
            "High-speed data transfer",
            "Long-range communication",
            "High power consumption",
            "No encryption"
        ]
    },
    {
        question: "What is the topology of BLE?",
        correct: "P2P / Star",
        wrong: [
            "Only Mesh",
            "Only Bus",
            "Only Ring",
            "Only Tree"
        ]
    },
    {
        question: "Which organization standardizes BLE?",
        correct: "Bluetooth SIG",
        wrong: [
            "IEEE",
            "IETF",
            "ISO/IEC",
            "ITU"
        ]
    },
    {
        question: "What is 6LoWPAN?",
        correct: "IETF Low Power Lossy Network",
        wrong: [
            "IPv6 over Low Power Wide Area Network",
            "Six Layer Wireless Personal Area Network",
            "IEEE 802.15.4 standard",
            "Bluetooth protocol variant"
        ]
    },
    {
        question: "What does RPL stand for?",
        correct: "Routing Protocol for Low-Power and Lossy Networks",
        wrong: [
            "Remote Protocol for Link Layer",
            "Routing Protocol for LANs",
            "Radio Protocol for Low power",
            "Reliable Protocol for Lossy networks"
        ]
    },
    {
        question: "What is CoAP?",
        correct: "Constrained Application Protocol",
        wrong: [
            "Control Application Protocol",
            "Common Application Protocol",
            "Compressed Application Protocol",
            "Client Application Protocol"
        ]
    },
    {
        question: "What is CoAP designed for?",
        correct: "Constrained IP networks and devices",
        wrong: [
            "High-speed networks",
            "Wired networks only",
            "Cloud computing only",
            "Video streaming"
        ]
    },
    {
        question: "How does CoAP compare to HTTP?",
        correct: "CoAP is lightweight and designed for constrained devices",
        wrong: [
            "CoAP is faster than HTTP on all networks",
            "CoAP replaces HTTP entirely",
            "CoAP is only for IPv4",
            "CoAP is more feature-rich than HTTP"
        ]
    },
    {
        question: "What type of applications does CoAP support?",
        correct: "RESTful applications",
        wrong: [
            "Only real-time streaming",
            "Only file transfers",
            "Only email",
            "Only database queries"
        ]
    },
    {
        question: "What is a main use case for IPv6 in IoT?",
        correct: "Providing vast address space for billions of devices",
        wrong: [
            "Making networks faster",
            "Reducing power consumption",
            "Improving security only",
            "Replacing all IPv4 immediately"
        ]
    },
    {
        question: "What is a key difference between IPv4 and IPv6?",
        correct: "IPv6 has a much larger address space",
        wrong: [
            "IPv6 is slower",
            "IPv4 has more addresses",
            "IPv6 is only for wireless",
            "They are identical"
        ]
    },
    {
        question: "Which protocol is used for proxying and caching in CoAP?",
        correct: "CoAP proxy servers",
        wrong: [
            "HTTP proxies only",
            "No proxying is possible",
            "Only BLE can proxy",
            "Only IPv6 proxies"
        ]
    }
];

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let currentAnswers = [];
let selectedAnswer = null;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const progressFill = document.getElementById('progress');
const finalScore = document.getElementById('final-score');
const scoreMessage = document.getElementById('score-message');

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize quiz
function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = 'Score: 0';

    // Shuffle questions
    shuffledQuestions = shuffleArray(quizData);

    // For each question, shuffle the answer options
    shuffledQuestions.forEach(q => {
        const allAnswers = [q.correct, ...q.wrong];
        const shuffledAnswers = shuffleArray(allAnswers);
        currentAnswers.push({
            question: q.question,
            answers: shuffledAnswers,
            correct: q.correct
        });
    });
}

// Display current question
function displayQuestion() {
    const currentQ = currentAnswers[currentQuestionIndex];
    questionText.textContent = currentQ.question;

    // Clear previous answers
    answersContainer.innerHTML = '';

    // Create answer buttons
    currentQ.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.dataset.answer = answer;
        button.addEventListener('click', () => selectAnswer(button, answer));
        answersContainer.appendChild(button);
    });

    // Update progress
    questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${currentAnswers.length}`;
    const progressPercent = ((currentQuestionIndex) / currentAnswers.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    // Reset selected answer
    selectedAnswer = null;
    nextBtn.disabled = true;
}

// Handle answer selection
function selectAnswer(button, answer) {
    // Remove previous selection
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Mark selected
    button.classList.add('selected');
    selectedAnswer = answer;
    nextBtn.disabled = false;
}

// Show correct/incorrect feedback
function showFeedback(isCorrect, selectedBtn, correctBtn) {
    if (isCorrect) {
        selectedBtn.classList.add('correct');
    } else {
        selectedBtn.classList.add('incorrect');
        correctBtn.classList.add('correct');
    }
}

// Move to next question or show results
function nextQuestion() {
    const currentQ = currentAnswers[currentQuestionIndex];
    const selectedBtn = document.querySelector('.answer-btn.selected');
    const correctBtn = Array.from(document.querySelectorAll('.answer-btn'))
        .find(btn => btn.dataset.answer === currentQ.correct);

    // Check if answer is correct
    const isCorrect = selectedAnswer === currentQ.correct;
    if (isCorrect) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }

    // Show feedback
    showFeedback(isCorrect, selectedBtn, correctBtn);

    // Disable all buttons
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
    });

    // Wait before moving to next question
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < currentAnswers.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

// Display final results
function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    finalScore.textContent = `${score} / ${currentAnswers.length}`;

    const percentage = (score / currentAnswers.length) * 100;
    let message = '';

    if (percentage === 100) {
        message = "Perfect! You're an IoT expert!";
    } else if (percentage >= 80) {
        message = "Excellent! You have great IoT knowledge!";
    } else if (percentage >= 60) {
        message = "Good job! You have a solid understanding of IoT.";
    } else if (percentage >= 40) {
        message = "Not bad, but there's room for improvement.";
    } else {
        message = "Keep studying! Review the IoT material and try again.";
    }

    scoreMessage.textContent = message;
}

// Event Listeners
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    initQuiz();
    displayQuestion();
});

nextBtn.addEventListener('click', nextQuestion);

restartBtn.addEventListener('click', () => {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
});
