# Use a imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o contêiner
COPY . .

# Exponha a porta usada pelo backend
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["npm", "start"]
