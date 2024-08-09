FROM node:16
RUN git clone https://github.com/WATSON-MD/WATSON-MD- /root/Watson-xd
WORKDIR /root/WATSON-MD
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#watsonxd
