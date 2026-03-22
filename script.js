// ML Quiz Data - Questions and Answers extracted from CS422_ML_Reviewer_.pdf
const quizData = [
    // Topic 1: Data Splitting & Class Imbalance
    {
        question: "What is the primary purpose of stratified splitting?",
        correct: "To preserve the original class distribution in each split",
        wrong: [
            "To increase the size of the training set",
            "To reduce the number of features",
            "To speed up model training",
            "To eliminate the need for a validation set"
        ]
    },
    {
        question: "When should you use stratify=y in train_test_split?",
        correct: "When dealing with imbalanced classes or small datasets",
        wrong: [
            "Only when the dataset is very large",
            "Never, it's always better to split randomly",
            "Only for classification problems",
            "Only when you have more than 1000 samples"
        ]
    },
    {
        question: "What is a key requirement when performing multi-stage splits (train/val/test)?",
        correct: "Stratification must be reapplied at each split stage",
        wrong: [
            "Always use a 60-20-20 split ratio",
            "Only the first split needs stratification",
            "Split all three sets simultaneously",
            "Use the same random_state for all splits"
        ]
    },
    {
        question: "Why is it critical to split X and y together in one call?",
        correct: "To maintain proper alignment between features and labels",
        wrong: [
            "To reduce memory usage",
            "To speed up the splitting process",
            "Because scikit-learn requires it",
            "To ensure both sets have equal size"
        ]
    },
    {
        question: "What does random_state parameter ensure?",
        correct: "Reproducibility of the same split across runs",
        wrong: [
            "Faster splitting speed",
            "Better class balance",
            "Automatic feature selection",
            "Stratified sampling by default"
        ]
    },

    // Topic 2: Validation Set vs. Test Set
    {
        question: "What is the primary purpose of the validation set?",
        correct: "To tune hyperparameters and compare candidate models",
        wrong: [
            "To report final model performance",
            "To train the model parameters",
            "To preprocess the data",
            "To increase the training set size"
        ]
    },
    {
        question: "What is the 'Golden Rule' regarding the test set?",
        correct: "No information from test set should influence any modeling decision",
        wrong: [
            "Test set should be larger than training set",
            "Test set should never be used for validation",
            "Test set must be stratified",
            "Test set should be split randomly"
        ]
    },
    {
        question: "When should you use the test set?",
        correct: "Exactly once, at the very end for final performance report",
        wrong: [
            "Multiple times to compare different models",
            "During hyperparameter tuning",
            "To select the best features",
            "To evaluate intermediate model versions"
        ]
    },
    {
        question: "What happens if you repeatedly use the test set to compare models?",
        correct: "The test set becomes contaminated and performance estimates become optimistically biased",
        wrong: [
            "The model automatically improves",
            "The test set becomes more representative",
            "You get more accurate performance estimates",
            "The validation set becomes unnecessary"
        ]
    },
    {
        question: "What common pitfall should you avoid when calling model.predict()?",
        correct: "Passing the wrong split (e.g., test data when intending validation data)",
        wrong: [
            "Using predict() instead of score()",
            "Calling predict() on training data",
            "Using the wrong metric function",
            "Not shuffling data before prediction"
        ]
    },

    // Topic 3: LinearRegression Parameters
    {
        question: "What does fit_intercept=True do?",
        correct: "Learns an offset/bias term to shift the regression hyperplane",
        wrong: [
            "Forces all coefficients to be positive",
            "Removes all intercept terms",
            "Centers the data automatically",
            "Speeds up training significantly"
        ]
    },
    {
        question: "When is it safe to set fit_intercept=False?",
        correct: "Only when all features are pre-centered (mean ≈ 0)",
        wrong: [
            "When you have many features",
            "When the dataset is large",
            "When you want faster training",
            "When using sparse matrices"
        ]
    },
    {
        question: "What does n_jobs parameter control in LinearRegression?",
        correct: "Number of CPU cores used for parallel computation",
        wrong: [
            "Number of iterations during fitting",
            "Number of features to use",
            "Regularization strength",
            "Learning rate"
        ]
    },
    {
        question: "When does n_jobs provide meaningful speedup for LinearRegression?",
        correct: "Large problem + sparse X + multiple target columns",
        wrong: [
            "Always when n_jobs=-1",
            "Only with small datasets",
            "Only with dense matrices",
            "Never, LinearRegression is always sequential"
        ]
    },
    {
        question: "What does positive=True parameter do?",
        correct: "Constrains all learned coefficients to be non-negative",
        wrong: [
            "Makes all predictions positive",
            "Ensures positive R² score",
            "Uses only positive features",
            "Adds L2 regularization"
        ]
    },
    {
        question: "What happens if you use positive=True with sparse input?",
        correct: "An error is raised (they are mutually exclusive)",
        wrong: [
            "The sparse matrix is automatically converted to dense",
            "Performance degrades but it works",
            "Only non-zero coefficients become positive",
            "The parameter is ignored"
        ]
    },
    {
        question: "Which post-fit attribute contains the learned coefficients?",
        correct: "coef_",
        wrong: [
            "intercept_",
            "n_features_in_",
            "rank_",
            "feature_names_in_"
        ]
    },
    {
        question: "What is the shape of coef_ for multi-output regression with 3 targets and 4 features?",
        correct: "(3, 4)",
        wrong: [
            "(4, 3)",
            "(12,)",
            "(3,)",
            "(4,)"
        ]
    },
    {
        question: "When is feature_names_in_ attribute populated?",
        correct: "Only when training input is a named DataFrame",
        wrong: [
            "Always after fitting",
            "Only with sparse matrices",
            "When using pipelines",
            "Never, it's deprecated"
        ]
    },
    {
        question: "What does copy_X parameter control?",
        correct: "Whether the input matrix is copied before fitting",
        wrong: [
            "Whether to copy the coefficients",
            "Whether to use cross-validation",
            "Whether to center the data",
            "Whether to standardize features"
        ]
    },

    // Topic 4: Pipelines & Data Leakage
    {
        question: "What is data leakage in machine learning?",
        correct: "When the model accesses information it shouldn't have during training",
        wrong: [
            "When training data is leaked to the public",
            "When the model memorizes training data",
            "When test accuracy is higher than validation accuracy",
            "When features are missing values"
        ]
    },
    {
        question: "What is the most common cause of data leakage?",
        correct: "Fitting preprocessing steps on data that includes validation/test observations",
        wrong: [
            "Using too many features",
            "Having missing values in the dataset",
            "Not normalizing the data",
            "Using a random split instead of stratified"
        ]
    },
    {
        question: "What is the correct preprocessing workflow order?",
        correct: "Split data → fit preprocessor on training only → apply to validation/test → use Pipeline",
        wrong: [
            "Preprocess entire dataset → split → train model",
            "Split → preprocess each split separately",
            "Train model → preprocess predictions",
            "Preprocess → split → train"
        ]
    },
    {
        question: "Why is using a Pipeline important?",
        correct: "Ensures fit() on training and transform() on unseen data happen correctly and consistently",
        wrong: [
            "It's only for code organization",
            "It automatically handles missing values",
            "It's required by scikit-learn",
            "It speeds up training"
        ]
    },
    {
        question: "What happens if you fit a scaler on the entire dataset before splitting?",
        correct: "Validation/test statistics leak into training, inflating performance estimates",
        wrong: [
            "The model trains faster",
            "The model becomes more accurate",
            "The split becomes stratified automatically",
            "Nothing, it's a best practice"
        ]
    },
    {
        question: "After saving a model with joblib.dump(), how should you use it?",
        correct: "Load → predict on test set → never refit on test data",
        wrong: [
            "Load → refit on test set for better performance",
            "Load → use for training new models",
            "Load → transform test data first",
            "Load → retrain with more data"
        ]
    },
    {
        question: "What is an insidious form of test set leakage?",
        correct: "Inspecting test results and then revising preprocessing based on them",
        wrong: [
            "Using a larger test set",
            "Not shuffling before splitting",
            "Using stratified splitting",
            "Normalizing the features"
        ]
    },

    // Topic 5: Problem Framing & Feature Engineering
    {
        question: "What should you determine before writing any code for an ML project?",
        correct: "What output the deployed system actually needs to produce",
        wrong: [
            "Which algorithm is fastest",
            "How many features to use",
            "What validation metric to optimize",
            "Which library to import"
        ]
    },
    {
        question: "When should you use regression instead of classification?",
        correct: "When the downstream consumer needs a continuous numeric value",
        wrong: [
            "When you have more features than samples",
            "When the dataset is imbalanced",
            "When accuracy is more important than precision",
            "When you have categorical features"
        ]
    },
    {
        question: "What type of model should you use for a binary approve/flag decision?",
        correct: "Classification",
        wrong: [
            "Regression with threshold",
            "Clustering",
            "Dimensionality reduction",
            "Both regression and classification are equivalent"
        ]
    },
    {
        question: "Which metrics are appropriate for classification problems?",
        correct: "Precision, recall, F1, AUC",
        wrong: [
            "R², MSE, MAE",
            "Only accuracy",
            "Adjusted R²",
            "Explained variance"
        ]
    },
    {
        question: "What is temporal leakage?",
        correct: "Using features that wouldn't be available at prediction time in production",
        wrong: [
            "Leaking data from test to training",
            "Using time series data incorrectly",
            "Having too many time-based features",
            "Not using temporal cross-validation"
        ]
    },
    {
        question: "How do you check if a feature is valid for production?",
        correct: "Ask: 'Would I have this value at the moment I need to make the prediction?'",
        wrong: [
            "Check if it's correlated with the target",
            "See if it improves validation score",
            "Verify it's numeric",
            "Ensure it has no missing values"
        ]
    },
    {
        question: "Which columns should typically be dropped from features?",
        correct: "Identifier columns (IDs, record numbers) and post-event features",
        wrong: [
            "Numeric columns",
            "Categorical columns",
            "Columns with missing values",
            "Highly correlated features"
        ]
    },

    // Topic 6: Model Evaluation & Error Interpretation
    {
        question: "What does True Positive (TP) mean?",
        correct: "Model predicted positive and ground truth is positive",
        wrong: [
            "Model predicted negative and ground truth is negative",
            "Model predicted positive but ground truth is negative",
            "Model predicted negative but ground truth is positive",
            "The model is always correct"
        ]
    },
    {
        question: "What does False Negative (FN) mean?",
        correct: "Model predicted negative but ground truth is positive (a miss)",
        wrong: [
            "Model predicted positive and ground truth is positive",
            "Model predicted negative and ground truth is negative",
            "Model predicted positive but ground truth is negative",
            "The model failed to predict"
        ]
    },
    {
        question: "When should you prioritize Recall over Precision?",
        correct: "When missing a positive case is costly (e.g., medical screening)",
        wrong: [
            "When false alarms are costly",
            "When classes are balanced",
            "When you need high overall accuracy",
            "When all errors are equally bad"
        ]
    },
    {
        question: "When should you prioritize Precision over Recall?",
        correct: "When false alarms are costly (e.g., spam detection)",
        wrong: [
            "When missing positives is costly",
            "When recall is already high",
            "When accuracy is low"
        ]
    },
    {
        question: "What does F1 Score represent?",
        correct: "Harmonic mean of precision and recall",
        wrong: [
            "Simple average of precision and recall",
            "Weighted accuracy",
            "False positive rate",
            "True negative rate"
        ]
    },
    {
        question: "When is accuracy a misleading metric?",
        correct: "When classes are imbalanced or error types have different costs",
        wrong: [
            "When using binary classification",
            "When using regression models",
            "When the dataset is small",
            "When using cross-validation"
        ]
    },
    {
        question: "What is the formula for Recall?",
        correct: "TP / (TP + FN)",
        wrong: [
            "TP / (TP + FP)",
            "(TP + TN) / All",
            "TP / (TP + TN)",
            "TN / (TN + FP)"
        ]
    },
    {
        question: "What is the formula for Precision?",
        correct: "TP / (TP + FP)",
        wrong: [
            "TP / (TP + FN)",
            "(TP + TN) / All",
            "FP / (FP + TN)",
            "FN / (FN + TP)"
        ]
    },
    {
        question: "What does model.score() return for LinearRegression?",
        correct: "R² (coefficient of determination)",
        wrong: [
            "MSE (mean squared error)",
            "MAE (mean absolute error)",
            "Accuracy",
            "F1 score"
        ]
    },
    {
        question: "How should you choose between two models with similar accuracy?",
        correct: "Choose the one whose error profile matches operational risk tolerance",
        wrong: [
            "Always choose the simpler model",
            "Choose the one with higher recall",
            "Choose the one trained on more data",
            "Pick randomly, they're equivalent"
        ]
    },

    // Additional comprehensive questions
    {
        question: "What is the correct order for a robust ML workflow?",
        correct: "Split data → fit preprocessor on train → train model → validate → test once",
        wrong: [
            "Preprocess → split → train → validate → test",
            "Split → preprocess all sets → train → validate",
            "Train → split → validate → test",
            "Preprocess → train → split → validate"
        ]
    },
    {
        question: "What is the purpose of a validation set in model development?",
        correct: "To make decisions about hyperparameters and model selection without contaminating test set",
        wrong: [
            "To train the final model",
            "To report final performance",
            "To replace the test set",
            "To increase training data"
        ]
    },
    {
        question: "Which of these is a sign of data leakage?",
        correct: "Using test set statistics to influence preprocessing decisions",
        wrong: [
            "Using a validation set",
            "Stratifying the split",
            "Normalizing the features",
            "Using cross-validation"
        ]
    },
    {
        question: "What should you do if your dataset has a rare class (1% of samples)?",
        correct: "Use stratified splitting to ensure each split has representative samples",
        wrong: [
            "Remove the rare class to balance the dataset",
            "Use random splitting, it doesn't matter",
            "Increase the test set size",
            "Use only the majority class for training"
        ]
    },
    {
        question: "What is the relationship between model type and deployment decision?",
        correct: "Model type must match the required output (continuous vs. categorical)",
        wrong: [
            "They are independent choices",
            "Regression always works better",
            "Classification is safer",
            "Use the simplest model possible"
        ]
    },
    {
        question: "What does 'temporal integrity' refer to in feature engineering?",
        correct: "Ensuring features are available at prediction time (no future information)",
        wrong: [
            "Keeping time-series data in order",
            "Using temporal cross-validation",
            "Including time as a feature",
            "Sorting data by timestamp"
        ]
    },
    {
        question: "Which error type is a False Positive?",
        correct: "Model said yes, but the true answer is no",
        wrong: [
            "Model said no, but the true answer is yes",
            "Model said yes and was correct",
            "Model said no and was correct",
            "The model refused to predict"
        ]
    },
    {
        question: "In a medical screening test where missing a disease is very serious, which metric should be prioritized?",
        correct: "Recall (to minimize false negatives)",
        wrong: [
            "Precision (to minimize false positives)",
            "Accuracy (to maximize correct predictions)",
            "F1 score (balance of both)",
            "Specificity"
        ]
    },
    {
        question: "What is the main purpose of the intercept term in linear regression?",
        correct: "To shift the regression hyperplane away from the origin when features aren't centered",
        wrong: [
            "To regularize the model",
            "To reduce the number of features",
            "To handle missing values",
            "To speed up convergence"
        ]
    },
    {
        question: "What happens to the shape of coef_ in multi-output regression?",
        correct: "It becomes 2-D: (n_targets, n_features)",
        wrong: [
            "It stays 1-D",
            "It becomes a scalar",
            "It's not available",
            "It becomes 3-D"
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
        message = "Perfect! You're an ML expert!";
    } else if (percentage >= 80) {
        message = "Excellent! You have great Machine Learning knowledge!";
    } else if (percentage >= 60) {
        message = "Good job! You have a solid understanding of ML concepts.";
    } else if (percentage >= 40) {
        message = "Not bad, but there's room for improvement.";
    } else {
        message = "Keep studying! Review the CS 422 material and try again.";
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




