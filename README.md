## 1.🚀AI-Powered Interview Intelligence Engine
Built a full-stack AI Interview Preparation Platform using the MERN stack integrated with Google Gemini (Generative AI), enabling automated generation of role-specific technical & behavioral questions, skill gap analysis with severity classification, and a personalized day-wise preparation roadmap — all derived from structured JSON responses enforced via Zod schema + zod-to-json-schema for reliable, type-safe AI outputs.

## 2.📄Resume Optimization with Dynamic PDF Generation
Engineered an AI-driven resume builder that ingests a candidate's uploaded PDF (parsed via pdf-parse), cross-references it against the job description, and generates a tailored, ATS-optimized HTML resume using Google Gemini; subsequently rendered to a professional PDF using headless Puppeteer, streamed directly to the client as a binary response with correct Content-Disposition headers.

## 3.🔐 Secure JWT Authentication with Token Blacklisting
Implemented a stateless authentication system using JWT (HttpOnly cookies) with bcrypt password hashing; designed a token blacklist mechanism in MongoDB to invalidate tokens on logout — preventing session reuse attacks and ensuring security beyond simple token expiry, with protected route enforcement via a custom Express middleware layer.

## 4.⚡ Feature-Driven Frontend Architecturewith Context + Custom Hooks
Architected a scalable React 19 frontend (Vite + SCSS) using a feature-based folder structure, separating concerns across domain-specific Context providers, custom hooks (useInterview, useAuth), and service layers (Axios API clients) — enabling clean state isolation, reusable logic, and a responsive interview dashboard with
