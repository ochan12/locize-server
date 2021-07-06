FROM node:15-alpine

WORKDIR /tmp
COPY package.json /tmp/
# Multiple COPY commands together make the buil fail
RUN true 
COPY package.json ./
RUN true
COPY tsconfig.json ./
RUN npm install -g  typescript

RUN npm install

COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app
WORKDIR /usr/src/app/

RUN tsc -p tsconfig.json
ENV TARGET_ENV=production
EXPOSE 3000
CMD ["node", "/usr/src/app/dist/index.js"]