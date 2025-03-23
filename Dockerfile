# Вказуємо базовий образ, наприклад, для Node.js
FROM node:16

# Встановлюємо робочу директорію в контейнері
WORKDIR /app

# Копіюємо всі файли з вашого проекту в контейнер
COPY . /app

# Встановлюємо залежності
RUN npm install

# Запускаємо команду для збірки
RUN npm run build

# Вказуємо команду для запуску додатку
CMD ["npm", "start"]


RUN chmod -R 755 /app
