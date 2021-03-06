-- Добавить пользователей
INSERT INTO accounts VALUES
  (DEFAULT, 'user', 'Иван', 'Иванов', 'ivan@mail.ru', 'avatar-1.png', 'q1w2e3', '2019-11-17 04:12:52'),
  (DEFAULT, 'user', 'Сергей', 'Есенин', 'huligan@mail.ru', 'avatar-2.png', 'q1w2e3', '2020-02-22 01:08:14'),
  (DEFAULT, 'user', 'Лев', 'Толстой', 'graf@mail.ru', 'avatar-3.png', 'q1w2e3', '2020-05-09 12:43:22'),
  (DEFAULT, 'user', 'Александр', 'Пушкин', 'onegin@mail.ru', 'avatar-4.png', 'q1w2e3', '2018-11-17 04:12:52'),
  (DEFAULT, 'user', 'Михаил', 'Лермонтов', 'borodino@mail.ru', 'avatar-5.png', 'q1w2e3', '2019-11-14 04:56:20');


-- Добавить категории
INSERT INTO categories VALUES
  (DEFAULT, 'Книги'),
  (DEFAULT, 'Разное'),
  (DEFAULT, 'Посуда'),
  (DEFAULT, 'Игры'),
  (DEFAULT, 'Животные'),
  (DEFAULT, 'Журналы');


-- Добавить предложения
INSERT INTO offers VALUES
(
  DEFAULT,
  1,
  'sell',
  'Продам отличную подборку фильмов на VHS.',
   'Мой дед не мог её сломать. Если товар не понравится — верну всё до последней копейки. Это настоящая находка для коллекционера! При покупке с меня бесплатная доставка в черте города.',
   19771,
   'item01.jpg',
   '2019-11-17 04:12:52'
 ),
(
  DEFAULT,
  1,
  'buy',
  'Куплю детские санки.',
  'Не пытайтесь торговаться. Цену вещам я знаю. Таких предложений больше нет! Две страницы заляпаны свежим кофе. Бонусом отдам все аксессуары.',
  23187,
  'item16.jpg',
  '2020-02-22 01:08:14'
),
(
  DEFAULT,
  1,
  'sell',
  'Продам книги Стивена Кинга.',
  'Товар в отличном состоянии. Продаю с болью в сердце... Если найдёте дешевле — сброшу цену. Если товар не понравится — верну всё до последней копейки.',
  45230,
  'item04.jpg',
  '2020-05-09 12:43:22'
),
(
  DEFAULT,
  2,
  'buy',
  'Куплю породистого кота.',
  'Не пытайтесь торговаться. Цену вещам я знаю. Даю недельную гарантию. Товар в отличном состоянии. Кому нужен этот новый телефон, если тут такое...',
  2328,
  'item12.jpg',
  '2018-11-17 04:12:52'
),
(
  DEFAULT,
  2,
  'sell',
  'Продам советскую посуду. Почти не разбита.',
  'Бонусом отдам все аксессуары. Кому нужен этот новый телефон, если тут такое... Если найдёте дешевле — сброшу цену. Кажется, что это хрупкая вещь.',
  56929,
  'item08.jpg',
  '2019-11-14 04:56:20'
);


-- Добавить категории предложениям
INSERT INTO offers_categories VALUES
  (1, 1),
  (1, 3),
  (1, 4),
  (2, 2),
  (2, 4),
  (3, 1),
  (3, 2),
  (3, 4),
  (3, 6),
  (4, 3),
  (4, 4),
  (4, 5),
  (5, 1),
  (5, 2),
  (5, 6);


-- Добавить комментарии
INSERT INTO comments VALUES
  (DEFAULT, 1, 1, 'Неплохо, но дорого Вы что?! В магазине дешевле. А где блок питания? А сколько игр в комплекте? Совсем немного... С чем связана продажа? Почему так дешёво?', '2020-02-22 01:08:14'),
  (DEFAULT, 1, 2, 'Оплата наличными или перевод на карту?', '2020-02-22 01:09:14'),
  (DEFAULT, 2, 1, 'А где блок питания?', '2020-02-22 01:10:14'),
  (DEFAULT, 2, 3, 'А сколько игр в комплекте?', '2020-02-22 01:11:14'),
  (DEFAULT, 2, 1, 'С чем связана продажа?', '2020-02-22 01:15:14'),
  (DEFAULT, 3, 2, 'Почему так дешёво?', '2020-02-22 01:17:14'),
  (DEFAULT, 3, 1, 'Совсем немного...', '2020-02-22 01:20:14'),
  (DEFAULT, 3, 3, 'Продаю в связи с переездом. Отрываю от сердца.', '2020-02-22 02:08:14'),
  (DEFAULT, 3, 1, 'Почему в таком ужасном состоянии?', '2020-02-22 04:08:14'),
  (DEFAULT, 3, 4, 'А где блок питания? Оплата наличными или перевод на карту?', '2020-02-22 05:08:14'),
  (DEFAULT, 4, 2, 'Вы что?! В магазине дешевле.', '2020-02-22 06:08:14'),
  (DEFAULT, 5, 4, 'А сколько игр в комплекте?', '2020-02-22 08:08:14'),
  (DEFAULT, 5, 3, 'Оплата наличными или перевод на карту?', '2020-02-22 10:08:14'),
  (DEFAULT, 5, 2, 'А сколько игр в комплекте?', '2020-02-22 13:08:14'),
  (DEFAULT, 5, 5, 'Продаю в связи с переездом. Отрываю от сердца.', '2020-02-22 15:08:14'),
  (DEFAULT, 5, 2, 'Оплата наличными или перевод на карту?', '2020-02-22 20:08:14');
