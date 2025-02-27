# SketchSphere

SketchSphere is a fast, collaborative, and lightweight drawing tool built with modern web technologies. Designed for speed and ease of use, SketchSphere enables teams to sketch, ideate, and share diagrams in real-time.

## 🚀 Features

- 🎨 Freehand drawing with smooth strokes
- 📁 Export drawings as PNG, SVG, or JSON
- 🖥️ Multi-user real-time collaboration
- 🎭 Dark and light mode support
- 🔄 Undo/Redo functionality
- 🏎️ Optimized performance with TurboRepo

## 📂 Monorepo Structure

This project is managed using TurboRepo, ensuring optimized builds and caching across workspaces.

```
SketchSphere/
├── apps/
│   ├── web/        # Frontend application
│   ├── server/     # Backend API
├── packages/
│   ├── ui/        # Shared UI components
│   ├── utils/     # Shared utility functions
│   ├── hooks/     # Reusable hooks
│   ├── config/    # Shared configurations
│   ├── types/     # Type definitions
├── turbo.json     # TurboRepo configuration
├── package.json   # Root package.json with dependencies
├── README.md      # Project documentation
```

## 📦 Installation

Ensure you have **Node.js 18+** and **pnpm** installed.

```sh
# Clone the repository
git clone https://github.com/your-org/SketchSphere.git
cd SketchSphere

# Install dependencies
pnpm install

# Start development mode
pnpm dev
```

## 🏗️ Running the App

To run specific apps:

```sh
pnpm dev --filter=web   # Start frontend
pnpm dev --filter=server # Start backend
```

## 🚀 Building & Deploying

```sh
pnpm build   # Build all packages
pnpm start   # Start production server
```

## 🤝 Contributing

1. Fork the repo and create your feature branch (`git checkout -b feature-branch`)
2. Commit your changes (`git commit -m 'Add new feature'`)
3. Push to the branch (`git push origin feature-branch`)
4. Open a Pull Request

## 📜 License

MIT License. See `LICENSE` for details.

---

Happy Drawing! 🎨✨
