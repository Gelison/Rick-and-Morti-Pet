# Rick and Morty · каталог персонажей

Frontend-проект на React и TypeScript для просмотра персонажей вселенной Rick and Morty с данными открытого Rick and Morty API.

## Что есть в проекте

- Каталог персонажей с постраничной навигацией.
- Фильтры по статусу, полу и виду персонажа.
- Компоненты поиска и страницы отдельного персонажа.
- Страницы эпизодов и локаций.
- Управление состоянием каталога через MobX.

## Стек

React 18 · TypeScript · MobX · Vite · Tailwind CSS · Axios.

## Локальный запуск

Потребуются Git, Node.js и npm.

```sh
git clone https://github.com/Gelison/Rick-and-Morti-Pet.git
cd Rick-and-Morti-Pet
npm ci
npm run dev
```

Откройте адрес, который Vite выведет в терминале. Для загрузки данных требуется интернет; ключ API не используется.

## Команды

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Сервер разработки |
| `npm run build` | Проверка TypeScript и сборка |
| `npm run preview` | Просмотр собранного приложения |
| `npm run lint` | Проверка ESLint |

## Структура

```text
src/
├── API/          # Запросы персонажей, эпизодов и локаций
├── components/   # Карточки, поиск, фильтры и навигация
├── pages/        # Страницы приложения
├── stores/       # Состояние MobX
└── uilse/        # Хуки и вспомогательные модули
```

## Статус

Проект в разработке. Раздел избранного (`Follow.tsx`, `FollowStore.ts`) пока содержит заготовки.

Источник данных: [Rick and Morty API](https://rickandmortyapi.com/).
