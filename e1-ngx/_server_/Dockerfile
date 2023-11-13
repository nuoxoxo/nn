# Fetching the minified node image on apline linux
FROM node:slim

# Declaring env
ENV PORT=${E_ONE_PORT}

# Setting up the work directory
WORKDIR /express-docker

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

# Starting our application
CMD [ "node", "index" ]

# Exposing server port
EXPOSE ${PORT}