FROM node:22-alpine

WORKDIR /app

COPY package*.json .

COPY . .

RUN npm install --legacy-peer-deps

# RUN npm install

EXPOSE 80

CMD ["npm", "start"]