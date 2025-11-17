#!/bin/bash

# Waikkala WGM Frontend Deployment Script
# This script helps you push code to GitHub and trigger the CI/CD pipeline

set -e

echo "🚀 Waikkala WGM Frontend Deployment"
echo "===================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git repository not initialized"
    exit 1
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "📡 Adding remote repository..."
    git remote add origin git@github.com:Waikkala/wgm-frontend.git
    echo "✅ Remote added successfully"
else
    echo "✅ Remote repository already configured"
fi

# Show current status
echo ""
echo "📊 Current Git Status:"
git status --short

# Ask for commit message
echo ""
read -p "📝 Enter commit message (or press Enter for default): " commit_msg

if [ -z "$commit_msg" ]; then
    commit_msg="Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Add all changes
echo ""
echo "📦 Adding all changes..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "$commit_msg" || echo "⚠️  No changes to commit"

# Get current branch
current_branch=$(git branch --show-current)
echo ""
echo "🌿 Current branch: $current_branch"

# Push to GitHub
echo ""
read -p "🚀 Push to GitHub? (y/n): " push_confirm

if [ "$push_confirm" = "y" ] || [ "$push_confirm" = "Y" ]; then
    echo "⬆️  Pushing to GitHub..."
    git push -u origin $current_branch
    
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🔄 GitHub Actions workflow will now:"
    echo "   1. Install dependencies"
    echo "   2. Run linter"
    echo "   3. Build the project"
    echo "   4. Deploy to GitHub Pages (if on main branch)"
    echo ""
    echo "📊 Check workflow status at:"
    echo "   https://github.com/Waikkala/wgm-frontend/actions"
    echo ""
    echo "🌐 Once deployed, your site will be available at:"
    echo "   https://waikkala.github.io/wgm-frontend/"
else
    echo "❌ Push cancelled"
fi
