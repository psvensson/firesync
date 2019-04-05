const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();


const PubSubFunctions = {

    initializeRoot: async (channelname)=>{
        await pubsub.createTopic(topicName);
        await pubsub.topic(channelName).createSubscription('command');
        const subscription = pubsub.subscription(subscriptionName);
        const messageHandler = message => {
            console.log(`Received message ${message.id}:`);
            console.log(`\tData: ${message.data}`);
            console.log(`\tAttributes: ${message.attributes}`);
            // "Ack" (acknowledge receipt of) the message
            message.ack();
        };

        // Listen for new messages until timeout is hit
        subscription.on(`message`, messageHandler);

    },

    shutdownRoot: async (channelName)=>{
        await pubsub.subscription(subscriptionName).delete();
    },

    register: (name, func)=>{

    },

    call: (name, args)=>{

    },

    discover: (channelname)=>{

    }
}

module.exports = PubSubFunctions