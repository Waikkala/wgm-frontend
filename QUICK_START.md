# Quick Start Guide

## 🚀 Deploy to GitHub in 3 Steps

### Option 1: Using the Deploy Script (Recommended)

```bash
npm run deploy
```

This interactive script will:
- Check your git configuration
- Add the remote repository if needed
- Prompt for a commit message
- Push to GitHub
- Trigger the CI/CD pipeline

### Option 2: Manual Git Commands

```bash
# 1. Add remote repository (first time only)
git remote add origin git@github.com:Waikkala/wgm-frontend.git

# 2. Add and commit your changes
git add .
git commit -m "Initial commit: Waikkala WGM frontend"

# 3. Push to GitHub
git push -u origin main
```

## 📋 Prerequisites

Before deploying, ensure you have:

- [x] Git installed
- [x] SSH key configured with GitHub
- [x] Access to the repository `Waikkala/wgm-frontend`

### Setup SSH Key (if not done)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub:
# 1. Go to GitHub Settings > SSH and GPG keys
# 2. Click "New SSH key"
# 3. Paste your public key
```

## 🔄 What Happens After Push?

1. **GitHub Actions Triggered** - Workflow starts automatically
2. **Build Process** - Code is built and tested
3. **Deployment** - If on main branch, deploys to GitHub Pages
4. **Live Site** - Available at `https://waikkala.github.io/wgm-frontend/`

## 📊 Monitor Deployment

Check the status:
```bash
# View workflow status
https://github.com/Waikkala/wgm-frontend/actions
```

## 🌐 Access Your Site

Once deployed:
- **Production URL**: `https://waikkala.github.io/wgm-frontend/`
- **Local Dev**: `http://localhost:5173` (run `npm run dev`)

## 🛠️ Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Deploy to GitHub
npm run deploy
```

## ⚡ Quick Fixes

### Remote already exists?
```bash
git remote remove origin
git remote add origin git@github.com:Waikkala/wgm-frontend.git
```

### Permission denied (SSH)?
```bash
# Test SSH connection
ssh -T git@github.com

# If fails, check SSH key setup above
```

### Build fails?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📚 More Information

- Full deployment guide: See `DEPLOYMENT.md`
- Project documentation: See `README.md`
- Image integration: See `IMAGES_GUIDE.md`

## 🆘 Need Help?

1. Check GitHub Actions logs for errors
2. Review `DEPLOYMENT.md` for detailed instructions
3. Verify SSH key is properly configured
4. Ensure you have repository access
