FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install -g npm@7.23.0
COPY . .
CMD ["npm", "start"]