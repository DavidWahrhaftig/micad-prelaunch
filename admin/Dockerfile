FROM node:12-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package.json .

RUN npm install

# Copy admin server source code
COPY admin/server .

# EXPOSE 80
# Server Start Command
CMD ["npm", "start"]