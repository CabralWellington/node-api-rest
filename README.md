# node-api-rest
Author Wellington Oliveira


# For test 

# To test server, edit the database configuration and run npm start
# to test the api, run the command below

curl --location --request POST 'http://localhost:3001/atendimento' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'cliente=Wellington' \
--data-urlencode 'pet=Lalinha' \
--data-urlencode 'servico=tosa' \
--data-urlencode 'status=agendando' \
--data-urlencode 'observacoes=Dog mal' \
--data-urlencode 'data=20/04/2021'

