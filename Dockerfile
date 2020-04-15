FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm run build

# Bundle app source
COPY dist dist/

EXPOSE 8080
CMD [ "npm", "run", "serve" ] 