module.exports = async (ctx, next) => {
    console.log('body start')
    await next();
    console.log('body end')
    ctx.body = "hello word"
}