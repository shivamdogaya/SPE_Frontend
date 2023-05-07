FROM node:20-alpine3.17
EXPOSE 3000
WORKDIR ./
COPY package.json ./
RUN npm install --force
COPY . ./
CMD ["npm","start"]

