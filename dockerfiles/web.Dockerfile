FROM node:24-alpine

# Рабочая директория
WORKDIR /var/www/web

# Копируем package.json и lock-файл
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем всё приложение внутрь контейнера
COPY . .

# Сборка (если нужно)
RUN npm run build

# Запускаем дев-сервер (если это dev-окружение)
CMD ["npm", "run", "dev"]
