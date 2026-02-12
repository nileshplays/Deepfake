# Deepfake Image & Video Detection System

A full-stack AI web application that detects whether a human image or video is real or AI-generated using deep learning.

The system follows a microservice architecture where a Python-based ML service handles model inference and a Node.js backend acts as an API gateway for the frontend.

---

## Tech Stack

- Frontend: React (Vite) + Tailwind CSS  
- Backend: Node.js + Express  
- ML Service: FastAPI (Python)  
- Deep Learning: TensorFlow (CNN)

---

## Features

- Upload human image or video  
- Detect real vs fake media  
- Confidence score for prediction  
- Drag & drop upload support  
- Real-time preview  
- Modern and responsive UI  

---

## Architecture Overview

Frontend (React)  
→ Node.js API Server  
→ FastAPI ML Service  
→ TensorFlow Model  

---

## How To Run Locally

1. Clone repository
```bash
git clone <repo-link>

2. Navigate to project folder
cd deepfake

3. Double-click the following file
start-all.bat

4. Open in browser
http://localhost:5173