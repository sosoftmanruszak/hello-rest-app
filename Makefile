main:
	gulp --port 3000

install:
	npm install
	npm install --global gulp-cli

uninstall:
	npm uninstall --global gulp-cli

api_tests:
	gulp tests:api --host localhost --port 3000

hello_test_positive:
	node tools/client --host localhost --port 3000 --msg Magda

hello_test_negative:
	node tools/client --host localhost --port 3000 --msg Magda_A