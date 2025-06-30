FROM node:18
WORKDIR /app
COPY . .
RUN npm i
RUN npm install express mongoose cors
CMD ["node", "server.js"]
