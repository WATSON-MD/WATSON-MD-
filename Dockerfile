FROM node:16
RUN git clone https://github.com/WATSON-XD1/WATSON-MD- /root/WATSON-XD1
WORKDIR /root/WATSON-XD1
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#watsonxd
