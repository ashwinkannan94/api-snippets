// Download the Node helper library from twilio.com/docs/node/install
// These consts are your accountSid and authToken from https://www.twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const workspaceSid = 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const taskQueueSid = 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.v1
  .workspaces(workspaceSid)
  .taskQueues(taskQueueSid)
  .update({
    target_workers: 'languages HAS "english"',
  })
  .then((taskQueue) => console.log(taskQueue.targetWorkers));
