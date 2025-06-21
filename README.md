# Abdullah Talal - Portfolio Website

A cutting-edge Next.js 14 portfolio showcasing full-stack development projects with AI-powered visitor interaction.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-2.0-FF6F00?style=for-the-badge&logo=google)](https://ai.google.dev/)

## ✨ Features

### 🎨 Design & UX
- **Linear.app Inspired Design** - Deep space blues (#0a0a19) to electric cyans (#00f0ff)
- **Particles.js Background** - Interactive animated particles in hero section  
- **Glass Morphism Effects** - Modern translucent UI components
- **Micro-interactions** - Smooth hover effects and animations
- **Fully Responsive** - Mobile-first design approach
- **Dark/Light Mode** - System preference detection with manual toggle

### 🚀 Technical Highlights
- **Next.js 14 App Router** - Latest React framework with server components
- **TypeScript** - Full type safety across the entire application
- **Framer Motion** - Smooth animations and transitions
- **Gemini 2.0 Flash AI** - Intelligent chat widget for visitor interaction
- **Optimized Performance** - Lighthouse score optimized

### 📱 Sections
1. **Hero** - Animated introduction with particles background
2. **Projects** - Interactive showcase with filtering and live demos
3. **Skills** - Animated progress bars and technology tags  
4. **About** - Developer philosophy and experience
5. **Contact** - Functional form with social links
6. **AI Chat** - Gemini-powered assistant for project inquiries

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14, React 18 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, Framer Motion |
| **AI Integration** | Google Gemini 2.0 Flash |
| **Background Effects** | Particles.js |
| **Icons** | Lucide React |
| **Theme** | next-themes |
| **Deployment** | Vercel Ready |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Gemini API key (optional, for AI chat)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdullahtalal1122/portfolio.git
   cd portfolio
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
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/gemini/        # Gemini AI API route
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components
│   │   └── navbar.tsx     # Navigation bar
│   ├── providers/         # Context providers
│   │   └── theme-provider.tsx
│   ├── sections/          # Page sections
│   │   ├── hero-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── about-section.tsx
│   │   └── contact-section.tsx
│   ├── ui/                # Reusable components
│   │   ├── particles-background.tsx
│   │   └── project-card.tsx
│   └── gemini-chat.tsx    # AI chat widget
└── ...
```

## 🎯 Featured Projects

### 1. 📦 WhatsApp Embedded Signup
**NPM Package for seamless WhatsApp Business API integration**
- **Install**: `npm install whatsapp-embedded-signup`
- **GitHub**: [abdullahtalal1122/whatsapp-embedded-signup](https://github.com/abdullahtalal1122/whatsapp-embedded-signup)
- **NPM**: [whatsapp-embedded-signup](https://www.npmjs.com/package/whatsapp-embedded-signup)
- **Tech**: TypeScript, Node.js, WhatsApp API, OAuth 2.0

### 2. 🤖 ONU.ai - Social Media Automation
**"Make.com for social media" with comprehensive API focus**
- **Live**: [app.onu.ai](https://app.onu.ai)
- **Tech**: Next.js, TypeScript, API Integration, Automation

### 3. 💬 WhatsApp Project Suite
**Real-time messaging platform with advanced features**
- **GitHub**: [abdullahtalal1122/whatapp](https://github.com/abdullahtalal1122/whatapp)
- **Features**: Real-time messaging, group management, media sharing
- **Tech**: React, Node.js, Socket.io, WhatsApp API

### 4. 🛒 E-commerce Platform
**Full-featured online store with payment processing**
- **GitHub**: [abdullahtalal1122/Ecom](https://github.com/abdullahtalal1122/Ecom)
- **Features**: Stripe integration, inventory management, admin dashboard
- **Tech**: React, Node.js, MongoDB, Stripe API

## 🤖 AI Integration

The portfolio features a **Gemini 2.0 Flash** powered chat widget that can answer questions about:
- Technical skills and expertise
- Project details and implementations  
- Development approach and philosophy
- Contact information and availability

### Setting up Gemini AI
1. Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Add it to your `.env.local` file
3. The chat widget will automatically become functional

## 🎨 Customization

### Colors
The design uses a Linear.app inspired color scheme defined in `tailwind.config.ts`:

```typescript
colors: {
  background: {
    dark: '#0a0a19',
    gradient: { from: '#0a0a19', to: '#1a1a2e' }
  },
  primary: { 400: '#00f0ff' },
  accent: {
    blue: '#00d4ff',
    purple: '#8b5cf6', 
    cyan: '#00f0ff'
  }
}
```

### Animations
Framer Motion animations are configured in individual components with consistent timing and easing.

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment
```bash
npm run build
npm start
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 📊 Performance

- ✅ **Lighthouse Score**: 90+ across all metrics
- ✅ **Core Web Vitals**: Optimized for performance
- ✅ **Mobile Responsive**: Perfect mobile experience
- ✅ **SEO Optimized**: Meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Abdullah Talal** - Full Stack Developer

- 📧 Email: abdullahtalal1122@gmail.com
- 🔗 GitHub: [@abdullahtalal1122](https://github.com/abdullahtalal1122)
- 💬 Website: [Ask the AI about my work!](http://localhost:3000)

---

**Built with ❤️ using Next.js, TypeScript, and Gemini AI**
