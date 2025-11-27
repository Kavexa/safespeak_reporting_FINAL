# Tauri Setup Guide for SafeSpeak

This guide will help you set up Tauri to build SafeSpeak as a native Linux desktop application.

## Prerequisites

### 1. Install Rust
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

### 2. Install System Dependencies (Linux)
**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    file \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

**Fedora:**
```bash
sudo dnf install webkit2gtk4.0-devel \
    openssl-devel \
    curl \
    wget \
    file \
    libappindicator-gtk3-devel \
    librsvg2-devel
```

**Arch Linux:**
```bash
sudo pacman -Syu
sudo pacman -S webkit2gtk base-devel curl wget file openssl appmenu-gtk-module gtk3 libappindicator-gtk3 librsvg
```

## Setup Steps

### 1. Install Tauri CLI
```bash
cargo install tauri-cli
```

### 2. Add Icons (Optional but Recommended)
Place your app icon in `src-tauri/icons/` directory. You can use the existing logo:
```bash
mkdir -p src-tauri/icons
# Copy your logo to src-tauri/icons/icon.png
# Then generate all sizes:
cargo tauri icon src-tauri/icons/icon.png
```

### 3. Development Mode
Run the app in development mode:
```bash
cargo tauri dev
```

### 4. Build for Production
Build the Linux executable:
```bash
cargo tauri build
```

The built application will be in:
- **AppImage**: `src-tauri/target/release/bundle/appimage/`
- **Deb Package**: `src-tauri/target/release/bundle/deb/`

## Build Targets

Tauri can build for multiple formats on Linux:
- **AppImage** - Universal Linux package
- **Deb** - Debian/Ubuntu package
- **RPM** - Fedora/RHEL package (requires `rpmbuild`)

## Troubleshooting

### Build Fails
- Make sure all system dependencies are installed
- Check Rust version: `rustc --version` (should be 1.70+)
- Clear cache: `cargo clean`

### App Doesn't Start
- Check console for errors: Run from terminal
- Verify Firebase config is correct in `src/lib/firebase.ts`

## File Structure
```
src-tauri/
├── Cargo.toml          # Rust dependencies
├── tauri.conf.json     # Tauri configuration
├── build.rs            # Build script
├── src/
│   └── main.rs         # Rust entry point
└── icons/              # App icons (you need to add these)
```

## Next Steps
1. Install Rust and dependencies
2. Run `cargo tauri dev` to test
3. Run `cargo tauri build` to create distributable
4. Share the AppImage or .deb file with users!
