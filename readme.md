

LIST(GET):-

curl --location 'http://localhost:8080/expenses' \
--header 'Content-Type: application/json'




CREATE(POST):-

curl --location --request GET 'http://localhost:8080/expenses/create' \
--header 'Content-Type: application/json' \
--data '{
  "Amount": "100.00",
  "Description": "Expense description"
}
'


UPDATE(PUT):-

curl --location --request PUT 'http://localhost:8080/expenses/update/1' \
--header 'Content-Type: application/json' \
--data '{
 
  "Description": "Expense"
}
'


VIEW(GET):-

curl --location 'http://localhost:8080/expenses/1' \
--header 'Content-Type: application/json'
\


REMOVE(DELETE):-

curl --location --request DELETE 'http://localhost:8080/expenses/delete/1' \
--header 'Content-Type: application/json'



