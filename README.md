# Vanilla Logitravel Test

## Features

- **Dynamic Item Management**: Add, delete, and manage items with local storage persistence
- **Interactive UI**: Click and double-click interactions with smooth animations
- **Modal Overlay**: Slide-down animation effects for adding new items
- **Responsive Design**: Clean, modern interface that works across devices
- **Local Storage**: Persistent data storage in the browser
- **Modular Architecture**: Well-organized ES6 modules for maintainable code

## Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Build Tool**: Vite 7.1.0 for fast development and optimized builds
- **Code Quality**: ESLint 9 with Airbnb configuration, Prettier formatting
- **Package Manager**: Yarn
- **Development**: Hot Module Replacement, live reload

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Gupramallo/vanilla-logitravel-test.git
   cd vanilla-logitravel-test
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**
   - Local: http://localhost:3000

## Available Scripts

### Development

```bash
yarn dev              # Start Vite development server
```

### Code Quality

```bash
yarn lint             # Run ESLint on JavaScript files
```

## How to Use

### Adding Items

1. Click the **"Add"** button
2. Enter your item name in the modal
3. Click **"Add"** to save or **"Cancel"** to close

### Managing Items

- **Single Click**: Select/deselect items (visual feedback)
- **Double Click**: Delete individual items instantly
- **Delete Button**: Remove all selected items
- **Revert Button**: Clear all items and reset to default state

### Data Persistence

- All items are automatically saved to browser's local storage
- Data persists between browser sessions
- Use the revert button to reset to initial state

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
