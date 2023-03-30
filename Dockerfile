FROM node:12

WORKDIR /

ENV ENV="production"

COPY . .

RUN npm install --registry=https://registry.npm.taobao.org

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]

