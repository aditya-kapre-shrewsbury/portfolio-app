# Live link
https://aditya-kapre-shrewsbury.github.io/portfolio-app/

# Deploy to master

Using usual git commands
    - git add .
    - git commit -m "message"
    - git push

# Deploy to gh-pages branch

npm run deploy

# How this was deployed on git pages
- npm install gh-pages --save-dev
- Modify package.json at root level to add following
    - "homepage": "https://aditya-kapre-shrewsbury.github.io/trivia-app"
- Modify package.json at root level to add following under scripts
    - "predeploy": "npm run build",
    - "deploy": "gh-pages -d build",
- npm run deploy
- Go to git repo and under setting -> Pages -> Branch -> (select newly created) gh-pages -> /root -> Save
- Reference for all of the above: https://github.com/gitname/react-gh-pages

# Tailwind CSS with React
https://tailwindcss.com/docs/guides/create-react-app

# MUI (Material UI) for React
https://mui.com/material-ui/getting-started/