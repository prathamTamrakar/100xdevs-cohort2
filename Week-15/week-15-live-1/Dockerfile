# FROM node:16-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 3000
# RUN chown -R node /usr/src/app
# USER node
# CMD ["node", "index.js"]


FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build 
RUN npx prisma generate

EXPOSE 3000

CMD ["node","dist/index.js"]