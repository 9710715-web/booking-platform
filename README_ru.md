# Booking Platform — полная демо-версия

Дата сборки: 2025-11-16

Внутри:
- **index.html** — полноценный интерфейс (Клиент / Админ / Дашборд), RU/TR/EN, TRY/EUR/USD
- **widget.js** — встраиваемый виджет (скрипт для чужих сайтов)
- **vercel.json** — конфигурация Vercel (статическая выдача, без сборки)

## Публикация на Vercel (без сборки)
1. В репозитории `booking-platform` нажми **Add file → Upload files** и перетащи `index.html`, `widget.js`, `vercel.json`, `README_ru.md` в **корень**.
2. **Commit changes**.
3. В Vercel открой проект → **Deployments → Redeploy**.
4. Открой свой домен, убедись, что интерфейс загружается.

## Встраивание виджета на сайт клуба
Замените `YOUR_DOMAIN` на ваш домен Vercel:
```html
<script src="https://YOUR_DOMAIN.vercel.app/widget.js"
        data-club="istanbul-tennis-center"
        data-lang="auto"
        data-currency="auto"></script>
```
