# Deployment Guide

## GitHub Repository Setup

### Step 1: Push to GitHub

```bash
# Navigate to project directory
cd waikkala-wgm

# Add remote repository
git remote add origin git@github.com:Waikkala/wgm-frontend.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Waikkala WGM e-commerce frontend"

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository: `https://github.com/Waikkala/wgm-frontend`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save the settings

### Step 3: GitHub Actions Workflow

The workflow is already configured in `.github/workflows/ci-cd.yml` and will:

✅ **On every push/PR:**
- Run on Node.js 18.x and 20.x
- Install dependencies
- Run linter
- Build the project
- Upload build artifacts

✅ **On push to main branch:**
- Deploy to GitHub Pages automatically

### Step 4: Verify Deployment

After pushing, check:
1. **Actions tab** in GitHub to see workflow running
2. Once complete, your site will be live at:
   - `https://waikkala.github.io/wgm-frontend/`

## Workflow Features

### CI/CD Pipeline Includes:

1. **Build & Test Job:**
   - Multi-version Node.js testing (18.x, 20.x)
   - Dependency installation with caching
   - ESLint code quality checks
   - Production build verification
   - Artifact upload for review

2. **Deploy Job:**
   - Automatic deployment to GitHub Pages
   - Only runs on main branch pushes
   - Uses optimized production build

### Workflow Triggers:

- **Push** to `main` or `develop` branches
- **Pull Request** to `main` or `develop` branches

## Manual Deployment Commands

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages Manually
```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add deploy script to package.json
# Then run:
npm run deploy
```

## Environment Variables

If you need environment variables:

1. Create `.env` file (already in .gitignore):
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Waikkala WGM
```

2. Add secrets in GitHub:
   - Go to Settings > Secrets and variables > Actions
   - Click "New repository secret"
   - Add your secrets

3. Use in workflow:
```yaml
env:
  VITE_API_URL: ${{ secrets.VITE_API_URL }}
```

## Custom Domain Setup (Optional)

1. Add a `CNAME` file to `public/` folder:
```
www.waikkala.com
```

2. Configure DNS:
   - Add CNAME record pointing to `waikkala.github.io`

3. Enable HTTPS in GitHub Pages settings

## Troubleshooting

### Build Fails
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review error logs in Actions tab

### Pages Not Updating
- Check if workflow completed successfully
- Clear browser cache
- Wait 2-3 minutes for GitHub Pages to update

### 404 Errors on Refresh
- Ensure `base` in `vite.config.js` matches repo name
- Add a `404.html` that redirects to `index.html`

### Routing Issues
- For GitHub Pages, use HashRouter instead of BrowserRouter
- Or add a custom 404.html handler

## Alternative Deployment Options

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### AWS S3 + CloudFront
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name
```

## Monitoring

After deployment, monitor:
- GitHub Actions for build status
- Browser console for runtime errors
- Network tab for loading issues
- Lighthouse for performance metrics

## Rollback

To rollback to a previous version:
```bash
git revert HEAD
git push origin main
```

Or redeploy a specific commit:
```bash
git checkout <commit-hash>
git push origin main --force
```

## Status Badge

Add to README.md:
```markdown
![CI/CD](https://github.com/Waikkala/wgm-frontend/workflows/CI/CD%20Pipeline/badge.svg)
```

## Support

For issues:
- Check GitHub Actions logs
- Review build output
- Check GitHub Pages settings
- Verify DNS configuration (if using custom domain)
