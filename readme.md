# Key Value Strore Web Service
## List of contents
> List of contents
- **Server**: Server side code( including docker file)
- **Client**: Code for client side cli code
## Setup
> Server
- clone the repo and move to server directory
- sudo docker build -t hk/kv
- sudo docker run -p 8000:8000 -p 3000:3000 -d hk/kv

> Client
- obtain docker ip using "ip addr show"
- npm install
- change url variable in index.js file in client folder.
## List of contents
> Server
- api/api.js: Contains logic for put,get and watch
>> - We are using MongoDb as database service
>> - Put and get are simple mongoDb insert, update and read operations
>> - Watch is implemented using mongoDb streams and socket.io
> Client
- index.js: Client side code
>> We are using commander for command line interface and request to send http requests.
>> socket.io-client is used to establish socket connection with the server for watch command. 
# Screenshots
- obtaining docker ip address using "ip addr show"
- ![alt text](./screenshots/s4.png)
- watch command
- ![alt text](./screenshots/s1.png)
- put command
- ![alt text](./screenshots/s2.png)
- get command
- ![alt text](./screenshots/s3.png)
