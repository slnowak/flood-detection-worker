module.exports = function (context, eventHubBinding) {
    context.log('JavaScript queue trigger function processed work item', eventHubBinding);
    context.done();
};
