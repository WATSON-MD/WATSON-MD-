FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  rm -rf /var/lib/apt/lists/*
  
RUN git clone https://github.com/WATSON-XD1/WATSON-MD-/root/WATSON-XD1
WORKDIR /root/WATSON-XD1/

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf ~/node_modules 

COPY package.json .

RUN npm install pm2 -g
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm","start" ]
