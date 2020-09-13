FROM node:12-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package.json .

RUN npm install

# Copy client server source code
COPY client/server .

# EXPOSE 3000
# Server Start Command
CMD ["npm", "start"]