export type PipelineStage = {
    label: string;
    detail: string;
};

export type CaseStudySection = {
    heading: string;
    body: string;
};

export type AQIProject = {
    kind: "aqi";
    slug: string;
    title: string;
    description: string;
    accuracy: string;
    tech: string[];
    pipeline: PipelineStage[];
    caseStudy: CaseStudySection[];
    links: { github?: string; caseStudy?: boolean };
};

export type Book = { title: string; color: string };

export type BookExchangeProject = {
    kind: "book-exchange";
    slug: string;
    title: string;
    description: string;
    tech: string[];
    books: Book[];
    architecture: string[];
    flow: string[];
    highlights: string[];
    links: { demo?: string; github?: string };
};

export type OOPPrinciple = { name: string; explanation: string };

export type RideBookingProject = {
    kind: "ride-booking";
    slug: string;
    title: string;
    description: string;
    tech: string[];
    route: { pickup: string; destination: string };
    architecture: string[];
    oop: OOPPrinciple[];
    links: { github?: string };
};

export const aqiProject: AQIProject = {
    kind: "aqi",
    slug: "aqi-ml-pipeline",
    title: "AQI ML Pipeline",
    description:
        "An end-to-end machine learning pipeline for predicting air quality using real-world environmental data.",
    accuracy: "84%",
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    pipeline: [
        {
            label: "Data",
            detail:
                "229 CPCB monitoring stations across 26 Indian cities (2015–2020), merged from station, city, and daily pollutant tables.",
        },
        {
            label: "Cleaning",
            detail:
                "Dropped Xylene (61% missing values), median-imputed remaining pollutants, filtered to 87,025 rows with a known AQI bucket.",
        },
        {
            label: "Feature Engineering",
            detail:
                "Built Month, Season, City average AQI, and PM ratio features — and deliberately excluded the AQI column itself to avoid leakage.",
        },
        {
            label: "Model",
            detail:
                "Trained and compared Decision Tree, KNN, Logistic Regression, and Random Forest on a stratified 80/20 split.",
        },
        {
            label: "Prediction",
            detail: "Classifies a station-day into one of 6 CPCB AQI categories, Good through Severe.",
        },
    ],
    caseStudy: [
        {
            heading: "Problem",
            body: "Predict the AQI category (Good → Severe, 6 classes) for a location and date using real pollutant sensor readings, so the classification could plausibly support early health advisories.",
        },
        {
            heading: "Objective",
            body: "Build a genuinely generalizing multi-class classifier — not a model that memorizes the AQI value it's supposed to predict.",
        },
        {
            heading: "Dataset",
            body: "CPCB station-level pollutant data spanning 229 stations across 26 Indian cities, 2015–2020, merged from station_day, stations, and city_day sources into 87,025 usable rows.",
        },
        {
            heading: "Data preprocessing",
            body: "Dropped Xylene as too sparse (61.3% missing). Median-imputed the remaining pollutants since median resists distortion from extreme pollution-event spikes. Engineered Month, Season, City_Avg_AQI, and PM_ratio features, then applied a stratified 80/20 split with StandardScaler for distance-based models.",
        },
        {
            heading: "Machine learning approach",
            body: "Compared four classifiers head-to-head — Decision Tree, KNN, Logistic Regression, and Random Forest — evaluating each on accuracy, F1, and the size of the train/test gap to catch overfitting.",
        },
        {
            heading: "Model",
            body: "Random Forest performed best, handling the non-linear pollutant interactions and mixed feature types better than the linear and distance-based alternatives.",
        },
        {
            heading: "Results",
            body: "84.35% test accuracy, 0.843 F1 score — after removing the leaked feature that had inflated an earlier version of the model to ~99%.",
        },
        {
            heading: "Challenges",
            body: "The first version fed the station's own AQI value in as a feature, so it looked like 99% accuracy — really a lookup table. Adjacent buckets (Moderate/Poor/Very Poor) also have overlapping PM2.5 ranges, which sets a natural ceiling on achievable accuracy no amount of tuning can fully remove.",
        },
        {
            heading: "What I learned",
            body: "An honest 84% is a far more defensible result than a leaked 99% — and catching the leakage myself, rather than being caught by it later, taught me to interrogate suspiciously perfect metrics before trusting them.",
        },
    ],
    links: { caseStudy: true },
};

export const bookExchangeProject: BookExchangeProject = {
    kind: "book-exchange",
    slug: "online-book-exchange",
    title: "Online Book Exchange",
    description:
        "A full-stack platform where users can discover, exchange, and communicate about books.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    books: [
        { title: "Clean Code", color: "#3a4a5c" },
        { title: "The Pragmatic Programmer", color: "#4e5c3a" },
        { title: "Design Patterns", color: "#5c3a4a" },
        { title: "Atomic Habits", color: "#3a5c53" },
        { title: "Sapiens", color: "#5c523a" },
        { title: "The Hobbit", color: "#3a3f5c" },
    ],
    architecture: ["React", "Node.js + Express", "MongoDB"],
    flow: ["User", "Book Listing", "Exchange", "Real-time Chat"],
    highlights: [
        "Authentication",
        "Book listings",
        "Search",
        "Real-time communication",
        "Backend API",
        "Database",
    ],
    links: {},
};

export const rideBookingProject: RideBookingProject = {
    kind: "ride-booking",
    slug: "ride-booking-app",
    title: "Ride Booking Application",
    description:
        "A Java-based ride booking application designed using object-oriented programming principles.",
    tech: ["Java", "OOP", "UML"],
    route: { pickup: "Pickup", destination: "Destination" },
    architecture: ["User", "Booking", "Ride", "Driver"],
    oop: [
        {
            name: "Encapsulation",
            explanation: "Rider, Driver, and Vehicle fields stay private, exposed only through controlled methods.",
        },
        {
            name: "Inheritance",
            explanation: "Car, Bike, and Auto all extend an abstract Vehicle base class.",
        },
        {
            name: "Polymorphism",
            explanation: "Fare calculation is overridden per vehicle type and resolved at runtime.",
        },
        {
            name: "Abstraction",
            explanation: "The Ride class composes Rider, Driver, and Vehicle behind a simple booking interface.",
        },
    ],
    links: {},
};

export type AIDoctorProProject = {
    kind: "ai-doctor-pro";
    slug: string;
    title: string;
    description: string;
    confidence: string;
    tech: string[];
    pipeline: PipelineStage[];
    specialties: string[];
    caseStudy: CaseStudySection[];
    links: { github?: string; caseStudy?: boolean };
};

export const aiDoctorProProject: AIDoctorProProject = {
    kind: "ai-doctor-pro",
    slug: "ai-doctor-pro",
    title: "AI Doctor Pro",
    description:
        "A multi-modal AI medical assistant — voice and image symptoms in, a confidence-scored differential diagnosis and specialist triage out.",
    confidence: "0.4",
    tech: [
        "FastAPI",
        "React (Vite)",
        "PostgreSQL",
        "ChromaDB",
        "Groq (Whisper, Llama 3.3 70B, Llama 4 Scout)",
        "sentence-transformers",
    ],
    pipeline: [
        {
            label: "Voice / Image",
            detail:
                "Groq Whisper large-v3 transcribes patient-described symptoms (Google Speech Recognition as fallback); an optional image is classified by Llama 4 Scout into wound, skin disease, scan, or eye condition.",
        },
        {
            label: "Triage",
            detail:
                "Explicit rule-based routing across 12+ specialties — e.g. wounds route to general medicine, not dermatology, while genuine skin disease does. Also classifies urgency: emergency, urgent, or routine.",
        },
        {
            label: "RAG Retrieval",
            detail:
                "sentence-transformers + ChromaDB retrieve the top-5 relevant chunks from per-specialty medical text (cardiology, dermatology, general medicine, neuro/ortho).",
        },
        {
            label: "Diagnosis",
            detail:
                "Llama 3.3 70B generates a differential of 3–5 diagnoses with likelihoods, ICD-10 hints, and a reasoning explanation, grounded in the retrieved context.",
        },
        {
            label: "Safety Score",
            detail:
                "A 5-factor weighted confidence score (symptom clarity, diagnosis quality, vision confidence, hedging penalty, referral-flag penalty) gates whether the case escalates to a human doctor.",
        },
    ],
    specialties: [
        "General Medicine",
        "Dermatology",
        "Cardiology",
        "Neurology",
        "Orthopedics",
        "Gastroenterology",
        "Pulmonology",
        "Psychiatry",
        "Ophthalmology",
        "ENT",
        "Endocrinology",
        "Urology",
    ],
    caseStudy: [
        {
            heading: "Problem",
            body: "Build an educational AI medical assistant that takes voice and image input from a patient, triages it to the right specialty among 12+, and generates a confidence-scored differential diagnosis — while knowing when to escalate to a human doctor instead of guessing.",
        },
        {
            heading: "Objective",
            body: "Chain a production-shaped AI pipeline — speech-to-text, vision, retrieval-augmented generation, and LLM reasoning — into a single consultation flow, on top of a real multi-tenant patient/doctor portal, not just a static demo.",
        },
    ],
    links: {
        demo: "https://aidoctornew.vercel.app/",
        github: "https://github.com/ShivakumarSindolli/AI_doctor",
        caseStudy: true,
    },
};