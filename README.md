# Monday.com Event Logger

This repository is a RESTFUL API for logging events from monday.com


## Tools Used

- Database - MongoDB
- Framework - NodeJS-Express


## Steps for development

- First Step was to understand the Monday.com documentation for webhook management and data subscription. Linked here https://developer.monday.com/api-reference/docs/webhooks#create-a-webhook
- After understanding the requirements,Database design and creation followed. Database model will hold necessary event logs.Database will have an events collection. The documents in events will have structure(boardId,eventType,event). 
- Created /api/register endpoint and all necessary logic which will be called by the Monday.com service to log events.
- Added Swagger Documentation to the endpoint - (Swagger Doc - /api-docs)

## Assumptions
- In the working logic of Monday.com, webhooks are created under integration options. There are many webhook adding options. So, this endpoint was created in the assumption that user using this endpoint will have to configure and add the endpoint({{url}}/api/register) to the hooks in configuration. 
- This service is not hosted.

## Steps to run


Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/Bisrat306/mm-test-task.git
cd mm-test-task
npm i
npm run dev
```