main:
	npm install

run:
	gulp run --port 3000

api_tests:
	gulp tests:api --host localhost --port 3000

hello_test_positive:
	node tools/client --host localhost --port 3000 --msg Magda

hello_test_negative:
	node tools/client --host localhost --port 3000 --msg Magda_A