SELECT 
b.borrowernumber,
CONCAT('<strong>', b.firstname, ' ', b.surname, '</strong>', '<br>', b.cardnumber) AS borrower,
s.date_due,
CASE WHEN (TO_DAYS(curdate())-TO_DAYS( date_due)) > 0 THEN 'Yes' ELSE '' END AS "overdue",
CASE WHEN (TO_DAYS(curdate())-TO_DAYS( date_due)) > 0 THEN (TO_DAYS(curdate())-TO_DAYS( date_due)) ELSE '' END AS "days_overdue",
i.itemnumber,
i.biblionumber,
biblio.title,
i.barcode,
i.itemcallnumber,
i.damaged,
i.damaged_on,
"###-###-####" AS itemnotes_nonpublic,
REGEXP_REPLACE(i.itemcallnumber, '[^a-zA-Z\\s]', '') AS base_call,
REGEXP_SUBSTR(i.itemcallnumber, '[0-9]+') + 0 AS num
FROM items i
LEFT JOIN issues s USING (itemnumber)
LEFT JOIN borrowers b ON (s.borrowernumber = b.borrowernumber)
LEFT JOIN biblio ON (i.biblionumber = biblio.biblionumber)
WHERE i.location LIKE '%hotspot%'
  AND i.homebranch = <<Choose Library|branches>>
ORDER BY base_call, num