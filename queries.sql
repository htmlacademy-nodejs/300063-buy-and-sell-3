-- Получить список категорий
SELECT * FROM categories;


-- Получить список категорий для которых создано минимум одно объявление
SELECT * FROM categories
WHERE id IN(SELECT category_id FROM offers_categories);


-- Получить список категорий с количеством объявлений
SELECT
  id,
  name,
  count
FROM
  categories,
  (SELECT category_id, COUNT(category_id) FROM offers_categories GROUP BY category_id) AS offers_categories
WHERE
  id = category_id;


-- Получить список объявлений
SELECT
  offers.id,
  title,
  sum,
  offers.type,
  description,
  offers.date,
  firstname,
  lastname,
  email,
  comments.count AS comment_count,
  offers_categories.categories
FROM
  offers,
  accounts,
  (SELECT offer_id, COUNT(offer_id) FROM comments GROUP BY offer_id) AS comments,
  (SELECT offer_id, ARRAY_AGG(name) AS categories
     FROM offers_categories, categories
     WHERE offers_categories.category_id = categories.id
     GROUP BY offers_categories.offer_id) as offers_categories
WHERE
  offers.account_id = accounts.id AND
  offers.id = offers_categories.offer_id AND
  offers.id = comments.offer_id
ORDER BY offers.date DESC;


-- Получить полную информацию определённого объявления (в данном случае делается запрос на получение объявления с id = 1)
SELECT
  offers.id,
  offers.title,
  offers.sum,
  offers.type,
  offers.description,
  offers.date,
  accounts.firstname,
  accounts.lastname,
  accounts.email,
  comments.count AS comment_count,
  offers_categories.categories
FROM
  offers,
  accounts,
  (SELECT offer_id, COUNT(offer_id) FROM comments GROUP BY offer_id) AS comments,
  (SELECT offer_id, ARRAY_AGG(name) AS categories
     FROM offers_categories, categories
     WHERE offers_categories.category_id = categories.id
     GROUP BY offers_categories.offer_id) as offers_categories
WHERE
  offers.id = 1 AND
  offers.account_id = accounts.id AND
  offers.id = offers_categories.offer_id AND
  offers.id = comments.offer_id
ORDER BY offers.date DESC;


-- Получить список из 5 свежих комментариев
SELECT
  comments.id,
  comments.offer_id,
  comments.text,
  accounts.firstname,
  accounts.lastname
FROM
  comments,
  accounts
WHERE
  comments.account_id = accounts.id
ORDER BY
  comments.date DESC
  LIMIT 5;


-- Получить список комментариев для определённого объявления (в данном случае делается запрос на получение комментариев объявления с id = 1)
SELECT
  comments.id,
  comments.offer_id,
  comments.text,
  accounts.firstname,
  accounts.lastname
FROM
  comments,
  accounts
WHERE
  comments.offer_id = 1 AND
  comments.account_id = accounts.id;


-- Выбрать 2 объявления, соответствующих типу «куплю»;
SELECT
  offers.id,
  title,
  sum,
  offers.type,
  description,
  offers.date,
  firstname,
  lastname,
  email,
  comments.count AS comment_count,
  offers_categories.categories
FROM
  offers,
  accounts,
  (SELECT offer_id, COUNT(offer_id) FROM comments GROUP BY offer_id) AS comments,
  (SELECT offer_id, ARRAY_AGG(name) AS categories
     FROM offers_categories, categories
     WHERE offers_categories.category_id = categories.id
     GROUP BY offers_categories.offer_id) as offers_categories
WHERE
  offers.type = 'buy' AND
  offers.account_id = accounts.id AND
  offers.id = offers_categories.offer_id AND
  offers.id = comments.offer_id
ORDER BY
  offers.date DESC
  LIMIT 2;


-- Обновить заголовок определённого объявления на «Уникальное предложение!» (в данном случае для объявления с id = 5)
UPDATE offers
SET title = 'Уникальное предложение!'
WHERE id = 5;

