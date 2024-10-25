git pull
npm install -f
npm run build
pm2 delete everponic
pm2 start npm --name everponic -- start
