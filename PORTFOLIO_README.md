# 🚀 Abdullah Talal - Portfolio Website

A cutting-edge Next.js 14 portfolio showcasing full-stack development projects with AI-powered visitor interaction.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-2.0-FF6F00?style=for-the-badge&logo=google)](https://ai.google.dev/)

## ✨ Features

### 🎨 Modern Design
- **Linear.app-inspired UI** with glass morphism effects
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - System preference detection with manual toggle
- **Smooth Animations** - Framer Motion throughout
- **Particle Effects** - Dynamic background animations

### 🤖 AI Integration
- **Gemini 2.0 Flash Chat** - Interactive AI assistant
- **Conversation Context** - Maintains chat history
- **Typewriter Animation** - Engaging response display
- **Portfolio Knowledge** - AI knows all project details

### 💼 Portfolio Sections
- **Hero Section** - Particles.js background with animated content
- **Projects Showcase** - Interactive cards with filtering
- **Skills Visualization** - Animated progress bars
- **About Section** - Philosophy cards and statistics
- **Contact Form** - Functional with validation

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - App Router with TypeScript
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Particles.js** - Background effects
- **Lucide React** - Beautiful icons

### AI & Backend
- **Google Gemini 2.0 Flash** - AI chat integration
- **Next.js API Routes** - Serverless functions
- **TypeScript** - Type safety throughout

### Developer Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control
- **Vercel** - Deployment platform

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdullahtalal1122/Portfolio1.git
   cd Portfolio1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your Gemini API key to `.env.local`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Portfolio1/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/gemini/        # AI chat API
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── layout/            # Navigation components
│   │   ├── sections/          # Page sections
│   │   ├── ui/                # Reusable UI components
│   │   ├── providers/         # Context providers
│   │   └── gemini-chat.tsx    # AI chat widget
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── .env.local.example        # Environment variables template
├── tailwind.config.ts        # Tailwind configuration
└── package.json              # Dependencies and scripts
```

## 🎯 Featured Projects

### 1. 🔥 WhatsApp Embedded Signup (NPM Package)
- **GitHub**: [whatsapp-embedded-signup](https://github.com/abdullahtalal1122/whatsapp-embedded-signup)
- **NPM**: [whatsapp-embedded-signup](https://www.npmjs.com/package/whatsapp-embedded-signup)
- **Tech**: TypeScript, Node.js, WhatsApp API, OAuth 2.0
- **Install**: `npm install whatsapp-embedded-signup`

### 2. 🚀 ONU.ai - Social Media Automation
- **Live**: [app.onu.ai](https://app.onu.ai)
- **Description**: "Make.com for social media" with comprehensive API integration
- **Tech**: Next.js, TypeScript, API Integration, Automation

### 3. 💬 WhatsApp Project Suite
- **GitHub**: [whatapp](https://github.com/abdullahtalal1122/whatapp)
- **Features**: Real-time messaging, group management, media sharing
- **Tech**: React, Node.js, Socket.io, WhatsApp API

### 4. 🛒 E-commerce Platform
- **GitHub**: [Ecom](https://github.com/abdullahtalal1122/Ecom)
- **Features**: Stripe integration, inventory management, admin dashboard
- **Tech**: React, Node.js, MongoDB, Stripe API

## 🌟 Skills & Expertise

### Frontend Development
- **Next.js** (95%) - Server-side rendering, App Router
- **React.js** (92%) - Hooks, Context, Component architecture
- **TypeScript** (90%) - Type safety, interfaces, generics
- **Tailwind CSS** (94%) - Utility-first styling
- **React-Flow** (88%) - Node-based UI components

### Backend Development
- **Node.js** (88%) - Server-side JavaScript
- **NestJS** (85%) - Enterprise-grade architecture
- **Express.js** (90%) - Web application framework

### AI & Data
- **OpenAI** (93%) - GPT integration, embeddings
- **NLP** (87%) - Natural language processing
- **LangFuse** (82%) - LLM observability
- **Pinecone** (88%) - Vector database operations

### APIs & Integration
- **WhatsApp APIs** (95%) - Business API, messaging
- **Meta/Facebook Graph API** (90%) - Social media integration
- **Instagram APIs** (88%) - Content automation
- **Telegram APIs** (85%) - Bot development
- **Stripe** (92%) - Payment processing

### Cloud & DevOps
- **AWS S3** (88%) - Storage solutions
- **AWS EC2** (75%) - Server management
- **Docker** (80%) - Containerization
- **AWS Amplify** (85%) - Deployment

## 📞 Contact

- **Email**: [abdullahtalal1122@gmail.com](mailto:abdullahtalal1122@gmail.com)
- **GitHub**: [@abdullahtalal1122](https://github.com/abdullahtalal1122)
- **Portfolio**: [Live Site](https://portfolio1-abdullahtalal1122.vercel.app) (Coming Soon)

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checker
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Add environment variables** in Vercel dashboard:
   - `GEMINI_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`
3. **Deploy** - Automatic deployments on push to main

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Linear.app** for design inspiration
- **Vercel** for hosting platform
- **Google** for Gemini AI
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations

---

**Built with ❤️ by Abdullah Talal**

*Turning coffee into code since 2019* ☕ → 💻
