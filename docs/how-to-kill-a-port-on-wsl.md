- lsof -t -i tcp:3000 | xargs kill
- kill -9 $(lsof -ti:3000));

