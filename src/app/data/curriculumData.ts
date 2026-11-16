export interface ModuleTopic {
  title: string;
}

export interface CurriculumModule {
  title: string;
  topics: ModuleTopic[];
}

export interface CourseCurriculum {
  courseId: string;
  title: string;
  modules: CurriculumModule[];
}

export const curriculums: CourseCurriculum[] = [
  {
    courseId: 'Python (Entry Level)',
    title: 'Core Python Programming',
    modules: [
      {
        title: 'MODULE 01 - Introduction to Python',
        topics: [{ title: 'What is Python?' }, { title: 'Features & Applications' }, { title: 'Python Installation & IDE Setup' }, { title: 'Variables, Keywords & Identifiers' }, { title: 'Input & Output Functions' }]
      },
      {
        title: 'MODULE 02 - Data Types & Operators',
        topics: [{ title: 'Numeric Data Types' }, { title: 'Strings & Boolean' }, { title: 'Type Conversion' }, { title: 'Arithmetic & Logical Operators' }, { title: 'Membership & Identity Operators' }]
      },
      {
        title: 'MODULE 03 - Strings in Python',
        topics: [{ title: 'String Creation' }, { title: 'Indexing & Slicing' }, { title: 'String Methods' }, { title: 'String Formatting' }, { title: 'Practice Programs' }]
      },
      {
        title: 'MODULE 04 - Conditional Statements',
        topics: [{ title: 'if, if-else, nested if' }, { title: 'elif Ladder' }, { title: 'match-case' }, { title: 'Real-Time Programs' }]
      },
      {
        title: 'MODULE 05 - Loops & Iterations',
        topics: [{ title: 'while Loop' }, { title: 'for Loop & range()' }, { title: 'break, continue, pass' }, { title: 'Pattern Programs' }, { title: 'Fibonacci & Prime Numbers' }]
      },
      {
        title: 'MODULE 06 - Collections',
        topics: [{ title: 'Lists & Comprehensions' }, { title: 'Tuples' }, { title: 'Sets' }, { title: 'Dictionaries' }, { title: 'Nested Collections' }]
      },
      {
        title: 'MODULE 07 - Functions',
        topics: [{ title: 'Function Creation' }, { title: 'Parameters & Arguments' }, { title: 'Return Values' }, { title: 'Lambda Functions' }, { title: 'Recursion' }]
      },
      {
        title: 'MODULE 08 - Modules & Packages',
        topics: [{ title: 'Import Statements' }, { title: 'Built-in Modules' }, { title: 'Custom Modules' }, { title: 'Packages & pip' }]
      },
      {
        title: 'MODULE 09 - Exception Handling',
        topics: [{ title: 'Errors vs Exceptions' }, { title: 'try-except' }, { title: 'finally & else' }, { title: 'Custom Exceptions' }]
      },
      {
        title: 'MODULE 10 - File Handling',
        topics: [{ title: 'File Operations' }, { title: 'Read & Write Files' }, { title: 'File Modes' }, { title: 'CSV Basics' }]
      },
      {
        title: 'MODULE 11 - Object Oriented Programming',
        topics: [{ title: 'Classes & Objects' }, { title: 'Constructors' }, { title: 'Inheritance' }, { title: 'Polymorphism' }, { title: 'Encapsulation & Abstraction' }]
      },
      {
        title: 'MODULE 12 - Advanced Python',
        topics: [{ title: 'Iterators' }, { title: 'Generators' }, { title: 'Decorators' }, { title: '*args & **kwargs' }]
      },
      {
        title: 'MODULE 13 - Database Connectivity',
        topics: [{ title: 'SQLite Basics' }, { title: 'CRUD Operations' }, { title: 'Database Mini Project' }]
      },
      {
        title: 'MODULE 14 - Real-World Python',
        topics: [{ title: 'Virtual Environments' }, { title: 'Project Structure' }, { title: 'API Introduction' }, { title: 'Python Career Paths' }]
      },
      {
        title: 'Capstone Project & Assessment',
        topics: [{ title: 'Mini Projects' }, { title: 'Coding Exercises' }, { title: 'Assignments' }, { title: 'Final Project Presentation' }]
      }
    ]
  },
  {
    courseId: '.NET Full Stack',
    title: '.NET FULL STACK DEVELOPER',
    modules: [
      {
        title: '01 .NET CORE & C# PROGRAMMING',
        topics: [{ title: 'Introduction to .NET Ecosystem' }, { title: '.NET Core (.NET 8)' }, { title: 'C# Fundamentals' }, { title: 'OOP Concepts' }, { title: 'Arrays & Collections' }, { title: 'Exception Handling' }, { title: 'LINQ' }, { title: 'Async Programming' }]
      },
      {
        title: '02 DATABASE & DATA ACCESS',
        topics: [{ title: 'SQL Server' }, { title: 'T-SQL' }, { title: 'Joins & Subqueries' }, { title: 'Stored Procedures' }, { title: 'ADO.NET' }, { title: 'Entity Framework Core' }, { title: 'Repository Pattern' }]
      },
      {
        title: '03 ASP.NET CORE WEB DEVELOPMENT',
        topics: [{ title: 'ASP.NET Core Fundamentals' }, { title: 'MVC Architecture' }, { title: 'Dependency Injection' }, { title: 'Middleware' }, { title: 'REST APIs' }, { title: 'Swagger' }, { title: 'API Validation' }]
      },
      {
        title: '04 SECURITY & AUTHENTICATION',
        topics: [{ title: 'Authentication' }, { title: 'Authorization' }, { title: 'JWT Token' }, { title: 'Role-Based Access' }, { title: 'API Security' }]
      },
      {
        title: '05 FRONTEND TECHNOLOGIES',
        topics: [{ title: 'HTML5' }, { title: 'CSS3' }, { title: 'Bootstrap' }, { title: 'JavaScript ES6' }, { title: 'DOM Manipulation' }, { title: 'AJAX & Fetch API' }]
      },
      {
        title: '06 ANGULAR DEVELOPMENT',
        topics: [{ title: 'Angular Architecture' }, { title: 'Components' }, { title: 'Templates' }, { title: 'Routing' }, { title: 'Forms' }, { title: 'HTTP Client' }, { title: 'RxJS' }]
      },
      {
        title: '07 FULL STACK PROJECTS & DEPLOYMENT',
        topics: [{ title: 'Angular + ASP.NET Core Integration' }, { title: 'CRUD Operations' }, { title: 'Git & GitHub' }, { title: 'Postman' }, { title: 'IIS Deployment' }, { title: 'Portfolio Building' }]
      }
    ]
  },
  {
    courseId: 'Agentic AI',
    title: 'Agentic AI Mastery Program',
    modules: [
      {
        title: 'MODULE 01 - Python for AI Engineering',
        topics: [{ title: 'Python Fundamentals' }, { title: 'Virtual Environments' }, { title: 'Git & GitHub' }, { title: 'Jupyter & VS Code' }, { title: 'Async Programming' }, { title: 'API Integration' }]
      },
      {
        title: 'MODULE 02 - Generative AI & Prompt Engineering',
        topics: [{ title: 'AI, ML & Generative AI' }, { title: 'LLM Fundamentals' }, { title: 'Prompt Engineering' }, { title: 'Prompt Optimization' }, { title: 'Chain of Thought (CoT)' }, { title: 'React & Function Calling' }]
      },
      {
        title: 'MODULE 03 - Building AI Applications',
        topics: [{ title: 'FastAPI' }, { title: 'Streamlit' }, { title: 'Gradio' }, { title: 'REST APIs' }, { title: 'AI Chat Applications' }, { title: 'Real-Time AI Interfaces' }]
      },
      {
        title: 'MODULE 04 - Embeddings & Vector Databases',
        topics: [{ title: 'Embeddings' }, { title: 'Semantic Search' }, { title: 'ChromaDB' }, { title: 'FAISS' }, { title: 'Hybrid Search' }, { title: 'Vector Database Design' }]
      },
      {
        title: 'MODULE 05 - Retrieval-Augmented Generation (RAG)',
        topics: [{ title: 'RAG Architecture' }, { title: 'Knowledge Bases' }, { title: 'Document Processing' }, { title: 'Multi-Query Retrieval' }, { title: 'Enterprise AI Search Systems' }]
      },
      {
        title: 'MODULE 06 - LangChain Development',
        topics: [{ title: 'LangChain Architecture' }, { title: 'Chains & Memory' }, { title: 'Prompt Templates' }, { title: 'Output Parsers' }, { title: 'Conversational AI Systems' }]
      },
      {
        title: 'MODULE 07 - Agent Development & Tool Calling',
        topics: [{ title: 'AI Agent Architecture' }, { title: 'ReAct Agents' }, { title: 'Plan & Execute Agents' }, { title: 'Custom Tools' }, { title: 'SQL Agents' }, { title: 'Autonomous Decision Making' }]
      },
      {
        title: 'MODULE 08 - LangGraph & Stateful Agents',
        topics: [{ title: 'LangGraph Fundamentals' }, { title: 'State Machines' }, { title: 'Workflow Routing' }, { title: 'Human-in-the-Loop' }, { title: 'State Checkpointing' }, { title: 'Parallel Execution' }]
      },
      {
        title: 'MODULE 09 - Multi-Agent Systems & CrewAI',
        topics: [{ title: 'Multi-Agent Architecture' }, { title: 'Agent Collaboration' }, { title: 'Task Delegation' }, { title: 'CrewAI Framework' }, { title: 'Enterprise Agent Teams' }]
      },
      {
        title: 'MODULE 10 - MCP (Model Context Protocol)',
        topics: [{ title: 'MCP Fundamentals' }, { title: 'Custom MCP Servers' }, { title: 'Claude Integration' }, { title: 'VS Code Integration' }, { title: 'Enterprise Tool Connectivity' }]
      },
      {
        title: 'MODULE 11 - Agentic RAG & AI Automation',
        topics: [{ title: 'Self-RAG' }, { title: 'Corrective RAG' }, { title: 'GraphRAG' }, { title: 'Knowledge Graphs' }, { title: 'N8N Automation' }, { title: 'Enterprise Workflow Automation' }]
      },
      {
        title: 'MODULE 12 - Production AI Engineering',
        topics: [{ title: 'AI Security & Guardrails' }, { title: 'OWASP LLM Security' }, { title: 'LangSmith Monitoring' }, { title: 'Docker & CI/CD' }, { title: 'Cloud Deployment (AWS/GCP)' }, { title: 'Performance Optimization' }]
      }
    ]
  },
  {
    courseId: 'Office Automation',
    title: 'MASTER MS OFFICE (Beginner to Intermediate Level)',
    modules: [
      {
        title: 'MODULE 01 - Computer Fundamentals',
        topics: [{ title: 'Computer Basics' }, { title: 'Hardware & Software' }, { title: 'Input & Output Devices' }, { title: 'Folder Management' }, { title: 'Memory & Storage' }, { title: 'Windows Environment' }, { title: 'Notepad & Paint' }, { title: 'Shortcut Keys' }]
      },
      {
        title: 'MODULE 02 - Internet Concepts',
        topics: [{ title: 'Internet & Browsing' }, { title: 'Search Engines' }, { title: 'Email Creation & Usage' }, { title: 'File Upload & Download' }, { title: 'Online Job Search' }, { title: 'Online Shopping' }, { title: 'Social Media Platforms' }]
      },
      {
        title: 'MODULE 03 - Microsoft Word',
        topics: [{ title: 'Text Formatting' }, { title: 'Page Layout' }, { title: 'Tables & Styles' }, { title: 'Document Security' }, { title: 'Headers & Footers' }, { title: 'Mail Merge' }, { title: 'References & TOC' }, { title: 'Printing & Publishing' }]
      },
      {
        title: 'MODULE 04 - Microsoft PowerPoint',
        topics: [{ title: 'Presentation Design' }, { title: 'Themes & Layouts' }, { title: 'SmartArt & Charts' }, { title: 'Multimedia Integration' }, { title: 'Animations & Transitions' }, { title: 'Slide Master' }, { title: 'Professional Presentations' }]
      },
      {
        title: 'MODULE 05 - Microsoft Excel',
        topics: [{ title: 'Workbook Management' }, { title: 'Formatting & Functions' }, { title: 'Sorting & Filtering' }, { title: 'Dashboard Basic' }]
      },
      {
        title: 'MODULE 06 - Outlook / Gmail',
        topics: [{ title: 'Professional Email Management' }, { title: 'Inbox Organization' }, { title: 'Labels & Folders' }, { title: 'Spam Management' }, { title: 'Email Productivity Tips' }]
      },
      {
        title: 'Special Career Enhancement Modules',
        topics: [{ title: 'Email ID Creation' }, { title: 'Job Portal Registration (Naukri, Indeed, Monster)' }, { title: 'Interview Preparation Basics' }, { title: 'Resume Preparation' }, { title: 'Artificial Intelligence Tools (ChatGPT & Claude)' }, { title: 'LinkedIn Profile Creation' }]
      }
    ]
  },
  {
    courseId: 'Data Science & Analytics',
    title: 'AI DRIVEN DATA ANALYTICS MASTER PROGRAM',
    modules: [
      {
        title: 'MODULE 01 - Data Analytics Foundations',
        topics: [{ title: 'Introduction to Data Analytics' }, { title: 'Analytics Lifecycle' }, { title: 'Types of Analytics' }, { title: 'Business Problem Solving' }, { title: 'Data-Driven Decision Making' }, { title: 'Data Collection Techniques' }]
      },
      {
        title: 'MODULE 02 - Excel for Data Analytics',
        topics: [{ title: 'Advanced Excel' }, { title: 'Data Cleaning & Preparation' }, { title: 'Functions & Formulas' }, { title: 'Pivot Tables' }, { title: 'Lookup Functions' }, { title: 'Dashboards & Reports' }]
      },
      {
        title: 'MODULE 03 - SQL for Data Analytics',
        topics: [{ title: 'Database Fundamentals' }, { title: 'SQL Queries' }, { title: 'Joins & Relationships' }, { title: 'Aggregate Functions' }, { title: 'Subqueries' }, { title: 'Real-Time Data Analysis' }]
      },
      {
        title: 'MODULE 04 - Python for Data Analytics',
        topics: [{ title: 'Python Fundamentals' }, { title: 'NumPy & Pandas' }, { title: 'Data Cleaning' }, { title: 'Data Transformation' }, { title: 'Exploratory Data Analysis (EDA)' }, { title: 'Working with CSV & Excel Data' }]
      },
      {
        title: 'MODULE 05 - Statistics for Analytics',
        topics: [{ title: 'Descriptive Statistics' }, { title: 'Probability Concepts' }, { title: 'Hypothesis Testing' }, { title: 'Correlation Analysis' }, { title: 'Regression Concepts' }, { title: 'Business Statistics' }]
      },
      {
        title: 'MODULE 06 - Data Visualization & BI',
        topics: [{ title: 'Power BI Fundamentals' }, { title: 'Power BI Data Modeling & DAX' }, { title: 'Interactive Dashboards' }, { title: 'Tableau Fundamentals' }, { title: 'Tableau Visual Analytics' }, { title: 'KPI Reporting & Storytelling' }]
      },
      {
        title: 'MODULE 07 - AI Tools for Data Analysts',
        topics: [{ title: 'ChatGPT for Analytics' }, { title: 'Microsoft Copilot' }, { title: 'Google Gemini' }, { title: 'AI-Assisted Data Analysis' }, { title: 'Automated Insights Generation' }, { title: 'Prompt Engineering for Analysts' }]
      },
      {
        title: 'MODULE 08 - Machine Learning Fundamentals',
        topics: [{ title: 'Introduction to ML' }, { title: 'Supervised Learning' }, { title: 'Unsupervised Learning' }, { title: 'Classification Models' }, { title: 'Regression Models' }, { title: 'Clustering Techniques' }]
      },
      {
        title: 'MODULE 09 - Predictive Analytics',
        topics: [{ title: 'Forecasting Techniques' }, { title: 'Sales Prediction' }, { title: 'Customer Analytics' }, { title: 'Churn Analysis' }, { title: 'Business Forecasting' }, { title: 'Risk Analysis' }]
      },
      {
        title: 'MODULE 10 - AI-Powered Business Analytics',
        topics: [{ title: 'AI for Decision Making' }, { title: 'Intelligent Reporting' }, { title: 'Customer Intelligence' }, { title: 'Marketing Analytics' }, { title: 'Financial Analytics' }, { title: 'HR Analytics' }]
      },
      {
        title: 'MODULE 11 - Industry Projects',
        topics: [{ title: 'Financial Analytics Project' }, { title: 'Retail & E-Commerce Analytics' }, { title: 'Marketing Campaign Analytics' }, { title: 'Marketing Campaign Performance Analysis' }, { title: 'End-to-End AI Analytics Capstone Project' }]
      },
      {
        title: 'MODULE 12 - Career Readiness & Capstone',
        topics: [{ title: 'Resume Building' }, { title: 'LinkedIn Profile Optimization' }, { title: 'Portfolio Development' }, { title: 'Interview Preparation' }, { title: 'Case Studies' }, { title: 'Capstone Project Presentation' }]
      }
    ]
  },
  {
    courseId: 'Cyber Security & Ethical Hacking',
    title: 'CYBER SECURITY & ETHICAL HACKING (VAPT) MASTER PROGRAM',
    modules: [
      {
        title: 'MODULE 01 - Cyber Security Fundamentals',
        topics: [{ title: 'Introduction to Cyber Security' }, { title: 'Ethical Hacking Concepts' }, { title: 'Types of Hackers' }, { title: 'Phases of Ethical Hacking' }, { title: 'CIA Triad' }, { title: 'Active & Passive Attacks' }, { title: 'White Box, Black Box & Grey Box Testing' }, { title: 'Cyber Security Terminologies' }]
      },
      {
        title: 'MODULE 02 - Networking for Cyber Security',
        topics: [{ title: 'Computer Networks' }, { title: 'TCP/IP & OSI Models' }, { title: 'IPv4 & IPv6' }, { title: 'Public & Private IP Addressing' }, { title: 'Network Ports' }, { title: 'VPNs & Proxies' }, { title: 'DNS Fundamentals' }, { title: 'Network Troubleshooting' }]
      },
      {
        title: 'MODULE 03 - Virtual Lab Setup',
        topics: [{ title: 'Virtualization Concepts' }, { title: 'VMware Installation & Configuration' }, { title: 'Windows Virtual Machines' }, { title: 'Kali Linux Installation' }, { title: 'Lab Environment Setup' }, { title: 'GitHub Integration with Kali Linux' }]
      },
      {
        title: 'MODULE 04 - Operating Systems & Kali Linux',
        topics: [{ title: 'Linux Fundamentals' }, { title: 'Kali Linux Tools' }, { title: 'Linux Commands' }, { title: 'File System Navigation' }, { title: 'User & Permission Management' }, { title: 'Security Utilities' }]
      },
      {
        title: 'MODULE 05 - Information Gathering & OSINT',
        topics: [{ title: 'Footprinting & Reconnaissance' }, { title: 'Google Dorking (GHDB)' }, { title: 'Shodan & Whois' }, { title: 'DNS Enumeration' }, { title: 'Email Footprinting' }, { title: 'Social Media Intelligence (OSINT)' }, { title: 'Website Enumeration' }]
      },
      {
        title: 'MODULE 06 - Vulnerability Assessment & Scanning',
        topics: [{ title: 'Nmap & Nessus' }, { title: 'Acunetix & OWASP ZAP' }, { title: 'Banner Grabbing' }, { title: 'Port Scanning' }, { title: 'Vulnerability Scanning' }, { title: 'Web Application Scanning' }, { title: 'Subdomain Enumeration' }]
      },
      {
        title: 'MODULE 07 - Web Application Penetration Testing',
        topics: [{ title: 'OWASP Top 10' }, { title: 'SQL Injection' }, { title: 'Cross-Site Scripting (XSS)' }, { title: 'CSRF & Directory Traversal' }, { title: 'File Upload Vulnerabilities' }, { title: 'LFI/RFI & IDOR' }, { title: 'Session Hijacking' }, { title: 'Security Misconfigurations' }]
      },
      {
        title: 'MODULE 08 - System Exploitation & Access',
        topics: [{ title: 'Gaining Access & Burp Suite' }, { title: 'Authentication Testing' }, { title: 'Parameter Tampering' }, { title: 'OTP Brute Force Concepts' }, { title: 'Host Header Injection' }, { title: 'URL Redirection' }, { title: 'Maintaining Access' }, { title: 'Web Shell Concepts' }]
      },
      {
        title: 'MODULE 09 - Malware Analysis & Threats',
        topics: [{ title: 'Virus, Worms & Trojans' }, { title: 'Ransomware & Keyloggers' }, { title: 'Backdoors' }, { title: 'Malware Detection' }, { title: 'Malware Prevention' }, { title: 'Antivirus Technologies' }]
      },
      {
        title: 'MODULE 10 - Network Security & Wireless Security',
        topics: [{ title: 'Firewall Concepts & IDS/IPS' }, { title: 'Honeypots' }, { title: 'DoS & DDoS Attacks' }, { title: 'Wireless Security' }, { title: 'Wi-Fi Penetration Testing' }, { title: 'Aircrack-ng' }, { title: 'WPA/WPA2 Security' }, { title: 'Packet Analysis' }]
      },
      {
        title: 'MODULE 11 - Cryptography & Digital Security',
        topics: [{ title: 'Encryption & Decryption' }, { title: 'Symmetric & Asymmetric Cryptography' }, { title: 'Hashing Algorithms' }, { title: 'Digital Certificates' }, { title: 'Data Protection' }, { title: 'Secure Communications' }]
      },
      {
        title: 'MODULE 12 - Professional VAPT & Incident Reporting',
        topics: [{ title: 'VAPT Methodology' }, { title: 'Security Testing Lifecycle' }, { title: 'Report Writing' }, { title: 'CVSS Risk Assessment' }, { title: 'Vulnerability Prioritization' }, { title: 'Client Reporting' }, { title: 'CTF Challenges' }, { title: 'Industry Best Practices' }]
      }
    ]
  },
  {
    courseId: 'Artificial Intelligence & Machine Learning',
    title: 'DATA SCIENCE WITH AI',
    modules: [
      {
        title: 'PHASE 01 - Programming & Python Fundamentals',
        topics: [{ title: 'Programming Basics' }, { title: 'Python Syntax' }, { title: 'Variables & Data Types' }, { title: 'Loops & Functions' }, { title: 'OOPs Concepts' }, { title: 'File Handling' }, { title: 'Exception Handling' }]
      },
      {
        title: 'PHASE 02 - Python for Data Science',
        topics: [{ title: 'NumPy' }, { title: 'Pandas' }, { title: 'Data Cleaning' }, { title: 'Data Manipulation' }, { title: 'Matplotlib' }, { title: 'Seaborn' }, { title: 'Jupyter Notebook' }]
      },
      {
        title: 'PHASE 03 - Exploratory Data Analysis (EDA)',
        topics: [{ title: 'Dataset Understanding' }, { title: 'Missing Value Handling' }, { title: 'Univariate Analysis' }, { title: 'Bivariate Analysis' }, { title: 'Outlier Detection' }, { title: 'Correlation Analysis' }, { title: 'Feature Engineering' }]
      },
      {
        title: 'PHASE 04 - Statistics & Mathematics for DS',
        topics: [{ title: 'Probability' }, { title: 'Statistics Basics' }, { title: 'Mean, Median, Mode' }, { title: 'Correlation' }, { title: 'Hypothesis Testing' }, { title: 'Linear Algebra Basics' }]
      },
      {
        title: 'PHASE 05 - SQL & Database Management',
        topics: [{ title: 'DBMS Concepts' }, { title: 'SQL Queries' }, { title: 'CRUD Operations' }, { title: 'Joins & Subqueries' }, { title: 'MySQL / PostgreSQL' }, { title: 'Database Design' }]
      },
      {
        title: 'PHASE 06 - Machine Learning',
        topics: [{ title: 'Supervised Learning' }, { title: 'Unsupervised Learning' }, { title: 'Regression' }, { title: 'Classification' }, { title: 'Clustering' }, { title: 'Model Training' }, { title: 'Scikit-Learn' }]
      },
      {
        title: 'PHASE 07 - Deep Learning & AI Basics',
        topics: [{ title: 'Neural Networks' }, { title: 'TensorFlow Basics' }, { title: 'Keras' }, { title: 'NLP Introduction' }, { title: 'AI Concepts' }, { title: 'Chatbot Basics' }]
      },
      {
        title: 'PHASE 08 - Data Visualization & BI Tools',
        topics: [{ title: 'Power BI' }, { title: 'Tableau' }, { title: 'Dashboard Building' }, { title: 'Reports & Analytics' }, { title: 'Data Storytelling' }]
      },
      {
        title: 'PHASE 09 - Gen AI & LLM',
        topics: [{ title: 'AI Tools & Applications' }, { title: 'ChatGPT & Prompt Eng.' }, { title: 'Large Language Models' }, { title: 'OpenAI APIs' }, { title: 'AI Automation' }, { title: 'NLP Applications' }, { title: 'AI Assistants & Chatbots' }, { title: 'Generative AI Projects' }, { title: 'AI Ethics & Responsible AI' }]
      },
      {
        title: 'PHASE 10 - Deployment & Real-Time Projects',
        topics: [{ title: 'Git & GitHub' }, { title: 'API Basics' }, { title: 'Flask / Streamlit' }, { title: 'Model Deployment' }, { title: 'Cloud Basics' }, { title: 'Real-Time Projects' }, { title: 'GitHub Portfolio' }]
      }
    ]
  },
  {
    courseId: 'MERN Stack',
    title: 'MERN STACK DEVELOPER',
    modules: [
      {
        title: '01 PROGRAMMING & JAVASCRIPT FUNDAMENTALS',
        topics: [{ title: 'Computer Fundamentals & Logic Building' }, { title: 'JavaScript Basics (Variables, Data Types)' }, { title: 'Functions & Arrays' }, { title: 'DOM Manipulation' }, { title: 'ES6 Concepts & Problem Solving' }]
      },
      {
        title: '02 FRONTEND DEVELOPMENT',
        topics: [{ title: 'HTML5 & CSS3' }, { title: 'Bootstrap & Responsive Design' }, { title: 'JavaScript Advanced' }, { title: 'API Integration' }, { title: 'Frontend Mini Projects' }]
      },
      {
        title: '03 REACT JS DEVELOPMENT',
        topics: [{ title: 'React Fundamentals & Components' }, { title: 'Props, State & Hooks' }, { title: 'React Router & Context API' }, { title: 'API Handling' }, { title: 'React Project Development' }]
      },
      {
        title: '04 BACKEND WITH NODE JS & EXPRESS JS',
        topics: [{ title: 'Node JS Basics' }, { title: 'Express JS Framework' }, { title: 'REST API Development' }, { title: 'Middleware & Authentication' }, { title: 'JWT & File Uploads' }]
      },
      {
        title: '05 DATABASE WITH MONGODB',
        topics: [{ title: 'MongoDB Basics & CRUD' }, { title: 'Collections & Documents' }, { title: 'Mongoose ORM' }, { title: 'Database Relationships' }, { title: 'API Integration with MongoDB' }]
      },
      {
        title: '06 TOOLS, DEPLOYMENT & REAL-TIME PROJECTS',
        topics: [{ title: 'Git & GitHub' }, { title: 'Postman API Testing' }, { title: 'Deployment (Render / Vercel / Netlify)' }, { title: 'Real-Time Team Projects' }, { title: 'GitHub Portfolio Building' }]
      }
    ]
  },
  {
    courseId: 'C Programming (Entry Level)',
    title: 'C PROGRAMMING',
    modules: [
      {
        title: 'MODULE 01 - Introduction to Programming & C',
        topics: [{ title: 'Programming Fundamentals' }, { title: 'History of C Language' }, { title: 'Applications of C' }, { title: 'Structure of a C Program' }, { title: 'Compiler Installation & Setup' }]
      },
      {
        title: 'MODULE 02 - C Fundamentals',
        topics: [{ title: 'Variables & Constants' }, { title: 'Data Types' }, { title: 'Keywords & Identifiers' }, { title: 'Input & Output Functions' }, { title: 'Type Conversion' }]
      },
      {
        title: 'MODULE 03 - Operators & Expressions',
        topics: [{ title: 'Arithmetic Operators' }, { title: 'Relational Operators' }, { title: 'Logical Operators' }, { title: 'Assignment Operators' }, { title: 'Conditional Operators' }]
      },
      {
        title: 'MODULE 04 - Decision Making',
        topics: [{ title: 'if Statement' }, { title: 'if-else Statement' }, { title: 'Nested if' }, { title: 'else-if Ladder' }, { title: 'switch Case' }]
      },
      {
        title: 'MODULE 05 - Loops & Iterations',
        topics: [{ title: 'for Loop' }, { title: 'while Loop' }, { title: 'do-while Loop' }, { title: 'Nested Loops' }, { title: 'Pattern Programs' }]
      },
      {
        title: 'MODULE 06 - Functions',
        topics: [{ title: 'Function Basics' }, { title: 'Parameters & Arguments' }, { title: 'Return Values' }, { title: 'Recursive Functions' }, { title: 'Storage Classes' }]
      },
      {
        title: 'MODULE 07 - Arrays',
        topics: [{ title: 'One-Dimensional Arrays' }, { title: 'Two-Dimensional Arrays' }, { title: 'Matrix Operations' }, { title: 'Searching Techniques' }, { title: 'Sorting Techniques' }]
      },
      {
        title: 'MODULE 08 - Strings',
        topics: [{ title: 'String Handling' }, { title: 'String Functions' }, { title: 'String Manipulation' }, { title: 'String Programs' }]
      },
      {
        title: 'MODULE 09 - Pointers',
        topics: [{ title: 'Pointer Fundamentals' }, { title: 'Pointer Arithmetic' }, { title: 'Pointers with Arrays' }, { title: 'Pointers with Functions' }]
      },
      {
        title: 'MODULE 10 - Structures & Unions',
        topics: [{ title: 'Structures' }, { title: 'Nested Structures' }, { title: 'Array of Structures' }, { title: 'Unions' }, { title: 'Real-Time Applications' }]
      },
      {
        title: 'MODULE 11 - File Handling',
        topics: [{ title: 'File Operations' }, { title: 'Reading & Writing Files' }, { title: 'File Modes' }, { title: 'Record Management Systems' }]
      },
      {
        title: 'MODULE 12 - Dynamic Memory Management',
        topics: [{ title: 'malloc()' }, { title: 'calloc()' }, { title: 'realloc()' }, { title: 'free()' }, { title: 'Memory Optimization' }]
      },
      {
        title: 'MODULE 13 - Preprocessor Directives',
        topics: [{ title: '#include' }, { title: '#define' }, { title: 'Macros' }, { title: 'Header Files' }, { title: 'Conditional Compilation' }]
      },
      {
        title: 'MODULE 14 - Advanced C Concepts',
        topics: [{ title: 'Enumerations' }, { title: 'Typedef' }, { title: 'Command Line Arguments' }, { title: 'Bitwise Operators' }]
      },
      {
        title: 'MODULE 15 - Data Structures Basics',
        topics: [{ title: 'Stack' }, { title: 'Queue' }, { title: 'Linked List' }, { title: 'Searching Algorithms' }, { title: 'Sorting Algorithms' }]
      },
      {
        title: 'MODULE 16 - Capstone Projects',
        topics: [{ title: 'Student Management System' }, { title: 'Library Management System' }, { title: 'Banking Application' }, { title: 'Employee Record System' }]
      }
    ]
  },
  {
    courseId: 'Java Full Stack',
    title: 'ROADMAP FOR JAVA FULL STACK DEVELOPER',
    modules: [
      {
        title: '01 CORE JAVA & PROGRAMMING FUNDAMENTALS',
        topics: [{ title: 'Java Basics (Syntax, Variables, Loops)' }, { title: 'OOPs Concepts' }, { title: 'Collections Framework' }, { title: 'Exception Handling' }, { title: 'Logic Building' }]
      },
      {
        title: '02 ADVANCED JAVA',
        topics: [{ title: 'JDBC' }, { title: 'Servlets & JSP' }, { title: 'Multithreading' }, { title: 'Java 8 Features' }, { title: 'Lambda Expressions' }]
      },
      {
        title: '03 DATABASE & SQL',
        topics: [{ title: 'DBMS Concepts' }, { title: 'SQL Queries' }, { title: 'Joins & Subqueries' }, { title: 'MySQL / PostgreSQL' }, { title: 'JDBC Connectivity' }]
      },
      {
        title: '04 FRONTEND DEVELOPMENT',
        topics: [{ title: 'HTML5 & CSS3' }, { title: 'Bootstrap' }, { title: 'JavaScript (ES6+)' }, { title: 'React JS (Components, Hooks, Routing)' }, { title: 'API Integration' }]
      },
      {
        title: '05 BACKEND WITH SPRING BOOT',
        topics: [{ title: 'Spring Boot & REST APIs' }, { title: 'Hibernate / JPA' }, { title: 'Authentication & JWT' }, { title: 'API Testing (Postman)' }, { title: 'Microservices' }]
      },
      {
        title: '06 TOOLS, DEPLOYMENT & PROJECTS',
        topics: [{ title: 'Git & GitHub' }, { title: 'Maven' }, { title: 'Postman' }, { title: 'Deployment (Render/Vercel)' }, { title: 'Real-Time Projects (Team Based)' }]
      }
    ]
  },
  {
    courseId: 'Python Full Stack',
    title: 'ROADMAP FOR PYTHON FULL STACK DEVELOPER',
    modules: [
      {
        title: '01 FOUNDATION & PYTHON BASICS',
        topics: [{ title: 'Computer Fundamentals' }, { title: 'Problem Solving' }, { title: 'Python Basics' }, { title: 'Functions, OOPs' }, { title: 'File Handling' }]
      },
      {
        title: '02 FRONTEND DEVELOPMENT',
        topics: [{ title: 'HTML5 & CSS3' }, { title: 'Bootstrap 5' }, { title: 'JavaScript (ES6+)' }, { title: 'React JS' }, { title: 'API Integration' }]
      },
      {
        title: '03 BACKEND (PYTHON + DJANGO)',
        topics: [{ title: 'Django Basics' }, { title: 'Models, Views, Templates' }, { title: 'Forms & Validation' }, { title: 'Authentication' }, { title: 'Django ORM' }]
      },
      {
        title: '04 APIs, DATABASE & INTEGRATIONS',
        topics: [{ title: 'REST API (DRF)' }, { title: 'Postman Testing' }, { title: 'SQL & Database Design' }, { title: 'JWT Auth' }, { title: 'Third Party Integrations' }]
      },
      {
        title: '05 TOOLS, DEPLOYMENT & PROJECTS',
        topics: [{ title: 'Git & GitHub' }, { title: 'Deployment (Render/Vercel)' }, { title: 'Real-time Projects' }, { title: 'Documentation' }, { title: 'Portfolio' }]
      }
    ]
  }
];

export const getCurriculumById = (courseId: string) => {
  return curriculums.find((c) => c.courseId === courseId);
};
