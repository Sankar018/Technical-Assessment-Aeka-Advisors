# Weekend Getaway Ranker 🧳🌄

## 📌 Project Overview

The **Weekend Getaway Ranker** is a data engineering project that recommends the top weekend travel destinations in India based on a user’s **source city**.

Destinations are ranked using the following factors:
- **Time needed to visit** (used as a proxy for distance)
- **Google review rating**
- **Popularity** (number of Google reviews)

This project is implemented using **Python** and **Pandas** to process and rank destinations from a real-world travel dataset.

---

## 🎯 Problem Statement

Create an algorithm that:
- Takes a **Source City** as input
- Ranks the **top weekend destinations**
- Uses **distance (proxy)**, **rating**, and **popularity** for ranking

---

## 📊 Dataset

The dataset used is **“Top Indian Places to Visit”**, which includes the following attributes:

- Zone  
- State  
- City  
- Place Name  
- Place Type  
- Time needed to visit (in hours)  
- Google review rating  
- Number of Google reviews (in lakhs)  
- Other tourism-related attributes  

⚠️ Since the dataset does not provide geographic distance, **time needed to visit** is used as a practical substitute.  
Shorter visit times are considered more suitable for weekend trips.

---

## 🧠 Algorithm Logic

1. Take **Source City** as user input  
2. Remove all destinations from the same city  
3. Filter places suitable for weekend trips (≤ 8 hours visit time)  
4. Normalize the following features:
   - Visit Time (shorter time → higher score)
   - Rating (higher → better score)
   - Popularity (more reviews → better score)
5. Calculate a **final weighted score**
6. Rank destinations based on the final score

---

## ⚖️ Weight Distribution

| Feature        | Weight |
|----------------|--------|
| Visit Time     | 50%    |
| Rating         | 30%    |
| Popularity     | 20%    |

---

## 📂 Project Structure

Weekend Getaway Ranker/
│
├── data/
│ └── Top Indian Places to Visit.csv
│
├── main.py
├── requirements.txt
├── README.md
└── sample_output.txt

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository

git clone <your-github-repo-link>
cd weekend-getaway-ranker

### 2️⃣ Install Dependencies
pip install -r requirements.txt

### 3️⃣ Run the Program
python main.py

### 4️⃣ Enter Source City
Enter Source City: Delhi


The program will display the top ranked weekend destinations based on the algorithm.

## 🛠️ Technologies Used

Python

Pandas

## 🔎 Key Assumptions

Destinations cannot be in the same city as the source city

Time needed to visit is used as a proxy for distance

Higher ratings and popularity indicate better destinations

## ✅ Conclusion

This project demonstrates how data engineering techniques can be used to build a simple recommendation system using real-world travel data.
The solution is scalable and can be further enhanced by:

Adding actual geographic distance

Integrating map or travel APIs

Including budget or seasonal filters

## 👤 Author

Sankar Bhunia