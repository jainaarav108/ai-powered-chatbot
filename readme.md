# Readdit

🚀 **An AI-Enhanced Social Discussion Platform**

### 📌 **Problem Statement**

Modern social media platforms often suffer from information overload, toxic discourse, and difficulty in finding relevant content. Users struggle to quickly grasp the essence of long discussions and are often exposed to harmful language without adequate filtering. The challenge is to create a community-driven platform that not only mimics the engaging format of Reddit but also integrates AI to foster a smarter, safer, and more insightful user experience.

### 🎯 **Objectives**

* Develop a full-stack, Reddit-style platform for creating communities, posts, and comments.
* Implement AI-driven **Smart Recommendations** to surface relevant posts and communities.
* Provide **AI Summaries** (TL;DRs) for long comment threads to save users time.
* Analyze discussion tones using a **Sentiment Check** to show the overall community mood.
* Automatically flag harmful content with **Toxicity Alerts**.
* Enable a powerful **Semantic Search** to find content based on meaning, not just keywords.

### 🏗️ **Implementation Structure**

1.  **Frontend Layer (UI/UX)**
    * Built with **React** and **Vite** for a fast, responsive user interface.
    * Styled using **Tailwind CSS** for modern and clean aesthetics.
    * Handles all user interactions, from post creation to viewing AI-generated insights.

2.  **Backend Layer (Core API)**
    * Developed with **Flask** (Python) to manage core functionalities.
    * Handles user authentication, post/comment CRUD operations, voting, and profiles.
    * Exposes a RESTful API for the frontend to consume.

3.  **Database Layer**
    * Uses **PostgreSQL** to store all user data, posts, comments, and community information.
    * Manages relationships between different data models.

4.  **AI Service Layer (Intelligence Engine)**
    * **Recommendations:** A collaborative filtering or content-based model to suggest posts.
    * **Summarization & Sentiment:** Fine-tuned NLP models (like T5 or GPT) to process and analyze text.
    * **Toxicity Detection:** A classification model (like a fine-tuned BERT) trained to identify harmful language.
    * **Semantic Search:** Implemented using vector embeddings (e.g., Sentence-BERT) and a vector database for fast lookups.
    * **Media Handling:** Uses **Cloudinary** for efficient image and video uploads.

### 📊 **Example Workflow**

* **Input:** A user enters a long, heated discussion thread with hundreds of comments.
* **Processing:**
    1.  **Toxicity Alert:** The system scans new comments in real-time and flags abusive language.
    2.  **AI Summary:** The user clicks "Summarize," and the AI service processes the top comments to generate a concise summary.
    3.  **Sentiment Check:** The overall sentiment of the thread is calculated and displayed as "Mostly Negative."
* **Output:** The user quickly understands the key arguments and overall mood of the conversation without needing to read every single comment and is shielded from the most toxic interactions.

### 🛠️ **Tech Stack**

* **Frontend:** React, Vite, Tailwind CSS
* **Backend:** Flask, Python
* **Database:** PostgreSQL
* **Media Storage:** Cloudinary
* **AI & NLP Models:** HuggingFace Transformers (BERT, T5), Scikit-learn, NLTK
* **Search:** Vector Database (e.g., Pinecone, ChromaDB) + Sentence-BERT
* **Deployment:** Docker, AWS/GCP

### 🚀 **Future Scope**

* **Multi-modal Analysis:** Extend AI features to analyze images and videos within posts.
* **Advanced User Analytics:** Provide community moderators with deeper insights into user behavior and content trends.
* **Real-time Fact-Checking:** Integrate with fact-checking APIs to flag potential misinformation.
* **Deeper Personalization:** Develop a more sophisticated "For You" feed based on implicit and explicit user feedback.

### 📂 **Repository Structure**
├── backend/
│   ├── threaddit/         # Flask application source
│   ├── migrations/
│   ├── tests/
│   ├── .env.template
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   └── threaddit/         # React application source
│       ├── src/
│       ├── public/
│       └── package.json
├── ai_services/           # (New) Microservices for AI features
│   ├── summarizer/
│   ├── toxicity_detector/
│   └── recommender/
└── README.md

### 📢 **Impact**

This project aims to create a more intelligent and positive online community space by:

* Reducing information overload and saving user time.
* Promoting healthier discussions by proactively identifying and flagging toxicity.
* Improving content discovery through smarter, context-aware search and recommendations.
