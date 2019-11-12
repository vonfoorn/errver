FROM node:alpine
LABEL maintainer="Hendrik C. Lorenz <hendrik.lorenz@vonfoorn.com>"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD [ "node", "." ]
