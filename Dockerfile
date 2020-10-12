FROM node:13.12.0

WORKDIR /home/clasp

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --no-progress

CMD ["tail","-f","/dev/null"]