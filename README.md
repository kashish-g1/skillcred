# 🤖 AI Resume Builder

An intelligent resume builder application that leverages AI to help users create professional, ATS-friendly resumes with ease. Built with modern web technologies and powered by Google's Generative AI.

## ✨ Features

- **AI-Powered Content Generation**: Generate professional resume content using Google's Generative AI
- **Real-time Resume Editor**: Interactive WYSIWYG editor for customizing resume content
- **Multiple Resume Templates**: Choose from various professional templates
- **User Authentication**: Secure user registration and login system
- **Resume Management**: Create, edit, view, and manage multiple resumes
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **ATS-Friendly**: Optimized for Applicant Tracking Systems

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Draft WYSIWYG** - Rich text editor
- **Clerk** - Authentication and user management
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Ai-Resume-Builder-main/
├── Frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── Services/       # API services
│   │   ├── features/       # Redux features
│   │   ├── store/          # Redux store configuration
│   │   └── config/         # Configuration files
│   └── package.json
├── Backend/                 # Node.js backend API
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── models/         # Database models
│   │   ├── controllers/    # Route controllers
│   │   └── db/            # Database configuration
│   └── package.json
└── ai-resume-builder-backend (Deprecated)/  # Legacy Strapi backend
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database
- Google Generative AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd skillcred_project/Ai-Resume-Builder-main
   ```

2. **Setup Backend**
   ```bash
   cd Backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../Frontend
   npm install
   ```

### Environment Configuration

#### Backend Environment Variables
Create a `.env` file in the `Backend` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-resume-builder
JWT_SECRET=your-jwt-secret-key
ALLOWED_SITE=http://localhost:5173
```

#### Frontend Environment Variables
Create a `.env` file in the `Frontend` directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
VITE_GOOGLE_AI_API_KEY=your-google-ai-api-key
```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd Backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd Frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📖 Usage

1. **Sign Up/Login**: Create an account or login to access the dashboard
2. **Create Resume**: Click "Create New Resume" to start building your resume
3. **AI Assistance**: Use AI-powered suggestions to generate professional content
4. **Customize**: Edit and customize your resume using the rich text editor
5. **Preview**: View your resume in real-time as you make changes
6. **Download/Share**: Export your completed resume or share it online

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions, please create an issue in the repository or contact the development team.

---

**Built with ❤️ using modern web technologies**
