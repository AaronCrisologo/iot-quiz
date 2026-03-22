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
    },

    // Additional Scikit-learn Questions from ml-reviwerrr.pdf
// Scikit-learn Introduction & Basics
    {
        question: "What is scikit-learn primarily written in?",
        correct: "Python (with extensive use of NumPy)",
        wrong: [
            "C++ only",
            "Java",
            "R",
            "Julia"
        ]
    },
    {
        question: "When was the first public release of scikit-learn?",
        correct: "February 1, 2010",
        wrong: [
            "2009",
            "2012",
            "2015",
            "2019"
        ]
    },
    {
        question: "Which library does scikit-learn NOT directly build upon?",
        correct: "TensorFlow",
        wrong: [
            "NumPy",
            "SciPy",
            "Matplotlib"
        ]
    },
    {
        question: "How can you check the version of scikit-learn installed?",
        correct: "import sklearn; print(sklearn.__version__)",
        wrong: [
            "sklearn.version()",
            "pip show scikit-learn",
            "import sklearn; sklearn.version()",
            "All of the above"
        ]
    },

    // Estimator API
    {
        question: "What are the two main methods that all scikit-learn estimators implement?",
        correct: "fit() and predict()",
        wrong: [
            "train() and test()",
            "learn() and infer()",
            "fit() and transform()",
            "fit() and score()"
        ]
    },
    {
        question: "What does the fit() method do?",
        correct: "Learns the parameters from the training data",
        wrong: [
            "Makes predictions on new data",
            "Evaluates the model",
            "Scales the features",
            "Splits the dataset"
        ]
    },
    {
        question: "What does the predict() method do?",
        correct: "Makes predictions on new, unseen data",
        wrong: [
            "Trains the model",
            "Scales the input features",
            "Evaluates performance",
            "Saves the model"
        ]
    },
    {
        question: "Which method would you use to transform data without making predictions?",
        correct: "transform()",
        wrong: [
            "predict()",
            "fit()",
            "score()",
            "predict_transform()"
        ]
    },
    {
        question: "What type of objects implement both fit() and transform()?",
        correct: "Transformers",
        wrong: [
            "Estimators",
            "Predictors",
            "Regressors",
            "Classifiers"
        ]
    },

    // Pipelines
    {
        question: "What is a Pipeline in scikit-learn?",
        correct: "A sequence of transformers followed by an estimator",
        wrong: [
            "A way to parallelize model training",
            "A method for hyperparameter tuning",
            "A data preprocessing technique",
            "A model evaluation strategy"
        ]
    },
    {
        question: "Why are Pipelines important?",
        correct: "They ensure proper sequencing and prevent data leakage",
        wrong: [
            "They make code run faster",
            "They are required by scikit-learn",
            "They automatically select the best model",
            "They reduce memory usage"
        ]
    },
    {
        question: "What happens when you call fit() on a Pipeline?",
        correct: "Each transformer's fit_transform() is called, then the estimator's fit()",
        wrong: [
            "Only the final estimator is fitted",
            "All components are fitted independently",
            "The entire pipeline is fitted as one unit",
            "Transformers are skipped"
        ]
    },
    {
        question: "What is the correct order in a Pipeline?",
        correct: "Preprocessing transformers first, then the estimator",
        wrong: [
            "Estimator first, then transformers",
            "Order doesn't matter",
            "All transformers must be identical",
            "Estimator in the middle"
        ]
    },

    // Model Persistence
    {
        question: "How do you save a trained scikit-learn model?",
        correct: "joblib.dump(model, filename)",
        wrong: [
            "model.save(filename)",
            "pickle.dump(model, filename)",
            "sklearn.save(model, filename)",
            "model.to_file(filename)"
        ]
    },
    {
        question: "How do you load a saved scikit-learn model?",
        correct: "joblib.load(filename)",
        wrong: [
            "pickle.load(filename)",
            "model.load(filename)",
            "sklearn.load(filename)",
            "joblib.open(filename)"
        ]
    },
    {
        question: "What should you do after loading a saved model?",
        correct: "Call predict() directly on new data",
        wrong: [
            "Refit it on the test set",
            "Retrain with more data",
            "Transform it first",
            "Check the version only"
        ]
    },
    {
        question: "Why should you NOT refit a loaded model on test data?",
        correct: "It defeats the purpose of having a saved model and invalidates evaluation",
        wrong: [
            "It's not allowed by joblib",
            "It will crash the program",
            "It's too slow",
            "It changes the file format"
        ]
    },

    // Cross-Validation
    {
        question: "What is cross-validation used for?",
        correct: "To assess model performance and reduce variance in estimates",
        wrong: [
            "To increase training speed",
            "To replace the need for a test set",
            "To preprocess the data",
            "To select features automatically"
        ]
    },
    {
        question: "What does k-fold cross-validation do?",
        correct: "Splits data into k folds, uses each as validation once",
        wrong: [
            "Creates k different random splits",
            "Trains k different models",
            "Uses k different algorithms",
            "Splits data into k training and 1 test set"
        ]
    },
    {
        question: "What is stratified k-fold cross-validation?",
        correct: "Preserves class distribution in each fold",
        wrong: [
            "Uses exactly k samples per fold",
            "Shuffles data k times",
            "Works only with regression",
            "Is faster than regular k-fold"
        ]
    },

    // Hyperparameter Tuning
    {
        question: "What is the purpose of GridSearchCV?",
        correct: "To exhaustively search over a specified parameter grid",
        wrong: [
            "To randomly sample parameters",
            "To optimize learning rate only",
            "To select the best features",
            "To preprocess data"
        ]
    },
    {
        question: "What is RandomizedSearchCV used for?",
        correct: "To search parameters randomly, more efficient for large spaces",
        wrong: [
            "To search in a grid pattern",
            "To test only one parameter at a time",
            "To replace GridSearchCV entirely",
            "To search only categorical parameters"
        ]
    },
    {
        question: "What does the 'cv' parameter in GridSearchCV specify?",
        correct: "Number of cross-validation folds",
        wrong: [
            "Number of parameters to test",
            "Number of jobs to run in parallel",
            "Validation set size",
            "Number of iterations"
        ]
    },
    {
        question: "What does the 'scoring' parameter in GridSearchCV control?",
        correct: "The metric used to evaluate model performance",
        wrong: [
            "The cross-validation strategy",
            "The parameter grid size",
            "The random seed",
            "The verbosity level"
        ]
    },

    // Preprocessing
    {
        question: "Which transformer is used to fill missing values?",
        correct: "SimpleImputer",
        wrong: [
            "MissingValueFiller",
            "FillNa",
            "DataImputer",
            "ReplaceMissing"
        ]
    },
    {
        question: "What does StandardScaler do?",
        correct: "Standardizes features by removing mean and scaling to unit variance",
        wrong: [
            "Normalizes to [0, 1] range",
            "Removes outliers",
            "Fills missing values",
            "Encodes categorical variables"
        ]
    },
    {
        question: "Which transformer is used for one-hot encoding?",
        correct: "OneHotEncoder",
        wrong: [
            "LabelEncoder",
            "OrdinalEncoder",
            "CategoryEncoder",
            "DummyEncoder"
        ]
    },
    {
        question: "When should you use StandardScaler?",
        correct: "When features have different scales and algorithm is distance-based",
        wrong: [
            "Always, it's required",
            "Only for classification",
            "Never, it hurts performance",
            "Only when all features are numeric"
        ]
    },
    {
        question: "What is the difference between fit() and transform() for a scaler?",
        correct: "fit() learns mean/std, transform() applies the scaling",
        wrong: [
            "They do the same thing",
            "fit() applies scaling, transform() learns parameters",
            "fit() is for training, transform() is for testing",
            "transform() is faster than fit()"
        ]
    },
    {
        question: "What is the correct workflow for preprocessing?",
        correct: "fit on training data only, transform on all splits",
        wrong: [
            "fit and transform on entire dataset before splitting",
            "fit and transform separately on each split",
            "transform only, no fitting needed",
            "fit on test data, transform on training"
        ]
    },

    // Feature Selection & Dimensionality Reduction
    {
        question: "What is the purpose of feature selection?",
        correct: "To reduce overfitting and improve model performance by selecting relevant features",
        wrong: [
            "To increase the number of features",
            "To make the model more complex",
            "To ensure all features are used",
            "To speed up data loading"
        ]
    },
    {
        question: "What does PCA (Principal Component Analysis) do?",
        correct: "Reduces dimensionality by creating new uncorrelated features",
        wrong: [
            "Selects a subset of original features",
            "Increases feature space",
            "Encodes categorical variables",
            "Scales the features"
        ]
    },
    {
        question: "What is the key difference between PCA and feature selection?",
        correct: "PCA creates new features, feature selection chooses existing ones",
        wrong: [
            "PCA is faster",
            "Feature selection always works better",
            "PCA only works with labeled data",
            "They are the same thing"
        ]
    },
    {
        question: "What does LDA (Linear Discriminant Analysis) primarily do?",
        correct: "Reduces dimensionality while maximizing class separability",
        wrong: [
            "Clusters data into groups",
            "Scales features to unit variance",
            "Encodes categorical labels",
            "Fills missing values"
        ]
    },

    // Clustering
    {
        question: "What type of learning is clustering?",
        correct: "Unsupervised learning",
        wrong: [
            "Supervised learning",
            "Semi-supervised learning",
            "Reinforcement learning",
            "Self-supervised learning"
        ]
    },
    {
        question: "What does K-means clustering require as input?",
        correct: "The number of clusters (k)",
        wrong: [
            "Class labels",
            "Distance threshold",
            "Feature importance scores",
            "Cluster assignments"
        ]
    },
    {
        question: "What is the objective function of K-means?",
        correct: "Minimize the sum of squared distances to cluster centroids",
        wrong: [
            "Maximize distance between clusters",
            "Minimize number of clusters",
            "Maximize likelihood",
            "Minimize classification error"
        ]
    },
    {
        question: "What is a key limitation of K-means?",
        correct: "Assumes spherical clusters of similar size",
        wrong: [
            "Cannot handle categorical data",
            "Requires labeled data",
            "Is too slow for large datasets",
            "Cannot use Euclidean distance"
        ]
    },
    {
        question: "What does DBSCAN stand for?",
        correct: "Density-Based Spatial Clustering of Applications with Noise",
        wrong: [
            "Distance-Based Spatial Clustering and Noise",
            "Density-Based Simple Clustering Algorithm",
            "Dynamic Binary Spatial Clustering",
            "None of the above"
        ]
    },
    {
        question: "What is a key advantage of DBSCAN over K-means?",
        correct: "Can find arbitrarily shaped clusters and handle noise",
        wrong: [
            "Always faster",
            "Requires fewer parameters",
            "Produces exactly spherical clusters",
            "Needs predefined number of clusters"
        ]
    },

    // Regression Specific
    {
        question: "What is LinearRegression used for?",
        correct: "Predicting a continuous target variable",
        wrong: [
            "Classifying samples into categories",
            "Clustering similar samples",
            "Reducing the number of features",
            "Encoding categorical variables"
        ]
    },
    {
        question: "How do you create a synthetic regression dataset in scikit-learn?",
        correct: "make_regression()",
        wrong: [
            "make_dataset()",
            "generate_regression()",
            "synthetic_regression()",
            "create_regression_data()"
        ]
    },
    {
        question: "What does R² score measure?",
        correct: "Proportion of variance explained by the model",
        wrong: [
            "Mean squared error",
            "Classification accuracy",
            "Number of correct predictions",
            "Model complexity"
        ]
    },
    {
        question: "What is the default scoring metric for LinearRegression?",
        correct: "R²",
        wrong: [
            "MSE",
            "MAE",
            "Accuracy",
            "F1 score"
        ]
    },

    // Practical Usage
    {
        question: "What is the typical workflow for a regression task in scikit-learn?",
        correct: "Load data → split → preprocess → train → evaluate → save",
        wrong: [
            "Preprocess → load → split → train → evaluate",
            "Split → preprocess → evaluate → train → save",
            "Train → split → evaluate → preprocess → save",
            "Load → preprocess → train → split → evaluate"
        ]
    },
    {
        question: "When splitting data, what is the typical train/validation/test ratio?",
        correct: "60% train, 20% validation, 20% test",
        wrong: [
            "80% train, 10% validation, 10% test",
            "50% train, 25% validation, 25% test",
            "70% train, 15% validation, 15% test",
            "90% train, 5% validation, 5% test"
        ]
    },
    {
        question: "What should you do before preprocessing?",
        correct: "Split the data first",
        wrong: [
            "Preprocess the entire dataset",
            "Check the model type",
            "Normalize all features",
            "Remove all missing values"
        ]
    },
    {
        question: "Where does the Pipeline object fit in the ML workflow?",
        correct: "It combines preprocessing and model training into one object",
        wrong: [
            "It replaces cross-validation",
            "It's only for visualization",
            "It's used instead of train_test_split",
            "It's for hyperparameter tuning only"
        ]
    },

    // Common Pitfalls
    {
        question: "What is a common mistake when using transformers?",
        correct: "Fitting on the entire dataset before splitting",
        wrong: [
            "Using fit_transform() on test data",
            "Not scaling the features",
            "Using too many transformers",
            "Importing the wrong library"
        ]
    },
    {
        question: "What happens if you call fit_transform() on test data?",
        correct: "Data leakage occurs, inflating performance",
        wrong: [
            "The model automatically retrains",
            "It's the correct approach",
            "The transformer ignores it",
            "An error is thrown"
        ]
    },
    {
        question: "What should you never do with the test set?",
        correct: "Use it to make modeling decisions or tune hyperparameters",
        wrong: [
            "Evaluate the final model on it",
            "Load it into memory",
            "Split it into smaller sets",
            "Visualize the predictions"
        ]
    },

    // Estimator Attributes
    {
        question: "After fitting a LinearRegression, where are the coefficients stored?",
        correct: "model.coef_",
        wrong: [
            "model.coefficients",
            "model.weights",
            "model.beta",
            "model.params"
        ]
    },
    {
        question: "After fitting a LinearRegression, where is the intercept stored?",
        correct: "model.intercept_",
        wrong: [
            "model.bias",
            "model.offset",
            "model.constant",
            "model.intercept"
        ]
    },
    {
        question: "What does model.n_features_in_ tell you?",
        correct: "Number of features seen during fitting",
        wrong: [
            "Number of predictions made",
            "Number of training samples",
            "Number of target classes",
            "Feature importance scores"
        ]
    },

    // Additional Best Practices
    {
        question: "What is the purpose of setting random_state in train_test_split?",
        correct: "To ensure reproducible splits",
        wrong: [
            "To shuffle the data more",
            "To stratify automatically",
            "To balance the classes",
            "To speed up splitting"
        ]
    },
    {
        question: "What does copy_X parameter in LinearRegression control?",
        correct: "Whether to copy the input matrix before fitting",
        wrong: [
            "Whether to copy the coefficients",
            "Whether to copy the predictions",
            "Whether to use a copy of the data for prediction",
            "Whether to backup the model"
        ]
    },
    {
        question: "When using positive=True in LinearRegression, what is constrained?",
        correct: "All coefficients must be non-negative",
        wrong: [
            "The intercept must be positive",
            "Predictions must be positive",
            "The R² score must be positive",
            "Features must be positive"
        ]
    },
    {
        question: "What happens if you use positive=True with sparse matrices?",
        correct: "An error is raised (mutually exclusive)",
        wrong: [
            "The matrix is automatically densified",
            "It works but is slower",
            "Only non-zero coefficients become positive",
            "The parameter is ignored"
        ]
    },

    // Evaluation
    {
        question: "What does model.score() return for a regression model?",
        correct: "R² (coefficient of determination)",
        wrong: [
            "MSE",
            "MAE",
            "Accuracy",
            "F1 score"
        ]
    },
    {
        question: "Which metric should you use to evaluate a regression model?",
        correct: "R², MSE, or MAE depending on context",
        wrong: [
            "Accuracy only",
            "F1 score",
            "Precision and recall",
            "Confusion matrix"
        ]
    },

    // Real-world Application
    {
        question: "What is the first step before building any ML model?",
        correct: "Understand the problem and define the required output",
        wrong: [
            "Choose the algorithm",
            "Preprocess the data",
            "Split the dataset",
            "Import libraries"
        ]
    },
    {
        question: "When should you use a pipeline in production?",
        correct: "Always, to ensure consistent preprocessing and model application",
        wrong: [
            "Only for complex models",
            "Never, it's too slow",
            "Only during training",
            "Only for classification"
        ]
    },
    {
        question: "What is model persistence?",
        correct: "Saving and loading trained models for reuse",
        wrong: [
            "Keeping models in memory forever",
            "Using the same model for all tasks",
            "Never changing the model",
            "Training models repeatedly"
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




