# Usa Node 20 para compatibilidade com Vite
FROM node:20-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código da aplicação
COPY . .

# Expõe a porta padrão do Vite
EXPOSE 5173

# Roda o servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

