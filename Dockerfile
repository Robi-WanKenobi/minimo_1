FROM node:alpine

# Create app directory
#WORKDIR /usr/src/app
RUN mkdir /minimo2
WORKDIR /minimo2
# Install app dependencies
COPY package.json /minimo2

RUN cd /minimo2

RUN npm install

# Bundle app source
COPY . /minimo2

EXPOSE 3000
