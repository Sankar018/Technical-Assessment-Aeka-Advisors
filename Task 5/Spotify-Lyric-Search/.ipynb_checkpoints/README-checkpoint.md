Task 5 – Spotify Lyric Search (Machine Learning Project)
📌 Project Overview

This project implements a lyric-based song identification system.
Given a short snippet of lyrics or text, the model predicts the most likely Song Title and Artist by comparing the input text with lyric data from a Spotify songs dataset.

The solution uses text preprocessing and similarity-based matching, which is well suited for partial or incomplete lyric data.

🎯 Objective

Identify the Song Title and Artist when given a small snippet of lyrics.

Example:

Input  : "I'll never know why I had to go"
Output : Take A Load Off – Stone Temple Pilots

🛠️ Technologies Used

Python

Pandas & NumPy – data handling

NLTK – stopword removal

Scikit-learn

TF-IDF Vectorizer

Cosine Similarity

🧠 Methodology
1️⃣ Text Preprocessing

Convert text to lowercase

Remove punctuation and numbers

Tokenize text into words

Remove English stopwords using NLTK

2️⃣ Feature Extraction

TF-IDF vectorization

N-grams (1–4) to capture phrase-level patterns

3️⃣ Similarity Matching

Cosine similarity between lyric snippet and dataset lyrics

Songs ranked by similarity score

4️⃣ Evaluation

Random lyric snippets sampled from the dataset

A prediction is counted as correct if the predicted song title matches the original song

📂 Project Structure
Task-5-Spotify-Lyric-Search/
│
├── data/
│   └── spotify_lyrics_50k.csv
│
├── notebooks/
│   └── spotify_lyric_search.ipynb
│
├── outputs/
│   └── sample_output.txt
│
├── requirements.txt
└── README.md

▶️ How to Run the Project

Clone the repository:

git clone <your-github-repo-link>


Navigate to the project directory:

cd Task-5/Spotify-Lyric-Search


Install required dependencies:

pip install -r requirements.txt


Open the Jupyter Notebook:

jupyter notebook notebooks/spotify_lyric_search.ipynb


Run all cells and test the model using:

find_song("your lyric snippet here")

📊 Sample Output

See outputs/sample_output.txt for example predictions and evaluation results.

Example:

Input Lyric Snippet:
"I'll never know why I had to go"

Predicted Output:
Song   : Take A Load Off
Artist : Stone Temple Pilots
Score  : 0.412

📈 Model Evaluation

Accuracy: 78.0 %

Accuracy may vary depending on lyric snippet length and dataset coverage.

⚠️ Notes & Limitations

The dataset contains partial lyric text, not full official lyrics.

The model is similarity-based, not a deep learning classifier.

Results depend on the overlap between the input snippet and available lyric text.

In a production system, full lyrics and backend storage would significantly improve performance.

👤 Author

Sankar Bhunia

📄 License

This project is created for educational and technical assessment purposes only.