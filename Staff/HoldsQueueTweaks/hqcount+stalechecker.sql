SELECT COUNT(*) AS total,
   DATEDIFF(MIN(reservedate), (curdate())) * -1 AS oldestHold
FROM tmp_holdsqueue
WHERE holdingbranch = <<library>>
