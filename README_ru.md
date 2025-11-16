# Booking Suite Starter (RU)

Готовый комплект для вариантов 1–4:
1) Полный интерфейс бронирования (`index.html`).
2) Элементы сайта (языки RU/TR/EN, валюты TRY/EUR/USD).
3) Встраиваемый виджет (`widget.js`), который можно вставлять на сайты клубов.
4) Базовая «панель владельца» и «админ» (демо).

## Развёртывание на Vercel (без сборки)
1. Положи в репозиторий три файла: `index.html`, `widget.js`, `vercel.json`.
2. В Vercel → Settings → Build & Output Settings:
   - Framework: Other
   - Build Command: (пусто)
   - Install Command: (пусто)
   - Output Directory: .
3. Нажми Redeploy.

## Виджет на чужом сайте
```html
<script src="https://<ваш-домен>.vercel.app/widget.js"
        data-club="istanbul-tennis-center"
        data-lang="auto"
        data-currency="auto"></script>
```
