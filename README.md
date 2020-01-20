# Hello Rest App

Repository contains implementation for REST service app written with node.js.
Application serves hello endpoint that responses with hello message based on path parameter.
Source code contains also tools supporting application build and testing (gulp, mocha and custom scripts).

### Prerequisites

Before running application you have to:
 * install node LTS version 12.14.1.
 * install node modules and gulp-cli. You can do this by running `make install` command in project's main directory.
  
NOTE: Package gulp-cli will be installed globally. To uninstall it run `make uninstall`

## Getting Started

Example service and tools usage is presented in Makefile directory.

The easiest way of running application on default port is command:

```
make
```

This command will run linter, unit tests and service on port 3000.

While service is running you can:

* execute api tests by command: ```make api_tests```
* call hello endpoint with positive scenario: ```make hello_test_positive```
* call hello endpoint with negative scenario: ```make hello_test_negative```

Hello endpoint in example above is called using tools/client.js script from this repository.

Commands above are executed for host=localhost on port=3000.

## Available commands

#### Makefile

* packages installation

    ```make install```

* running local service (on port 3000) with eslint, unit tests validation

    ``` make ```

* Running api tests for local service

    ``` make api_tests```

* Testing hello endpoint for local service
    
    ``` make hello_test_positive```
    ``` make hello_test_negative```


#### Script commands

* running service

    ```gulp run --port <port>```

* running eslint

    ```gulp eslint```

* running unit tests

    ```gulp tests:unit```

* running api tests

    ```gulp tests:api --host <host> --port <port>```

* running test client that calls hello endpoint

    ```node tools/client --host <host> --port <port> --msg <msg>```
    
    This command will send request to http://< host >:< port >/hello/< msg >
