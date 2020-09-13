FROM node:12-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package.json .

RUN npm install

# Copy api source code
COPY api .

# EXPOSE 5000
# Server Start Command
CMD ["npm", "start"]