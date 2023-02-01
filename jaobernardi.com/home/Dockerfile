FROM node:latest

COPY ./svelte/. /svelte/.

RUN cd /svelte/ && npm install && npm run build

CMD cd /svelte/ && npm run preview