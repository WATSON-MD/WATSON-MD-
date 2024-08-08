FROM node:16
RUN git clone https://github.com/Watson-xd/WATSON-MD- /root/Watson-xd
WORKDIR /root/Ntee-j01 
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#watsonxd
