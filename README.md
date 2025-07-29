# Документация по тестовому заданию

## Структура проекта:

```
└── 📁/
		└── 📁apps			        # Сервисы приложения
        └── 📁api					    # Laravel API
        └── 📁web						# React Frontend
    └── 📁dockerfiles				# Docker-файлы
        ├── composer.Dockerfile
        ├── php.Dockerfile
        ├── web.Dockerfile
    └── 📁env						# Файлы конфигурации
        ├── mysql.env
        ├── mysql.example.env
    └── 📁nginx					    # Конфигурация Nginx
        ├── nginx.conf
    ├── docker-compose.ym
    └── README.md

```

## Запуск:
1. Переименуйте ```mysql.example.env``` в ```mysql.env```, чтобы настроить подключение к базе данных
2. Запустите в терминале команду:
```
docker compose up -d --build
``` 
3. Запустите миграции командой:
```
# Обычная миграция
docker compose run artisan migrate

# Миграция с запуском сидеров
docker compose run artisan migrate 
```
3. Перейдите по адресу ```http://localhost:8000/``` для доступа к приложению

## Запуск сидеров

Если вы решили запустить сидеры после миграции, воспользуйтесь командой:
```
docker compose run artisan db:seed
```
