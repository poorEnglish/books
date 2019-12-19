module.exports = async (ctx, next) => {
    console.log('error')
    throw new Error('created an error')
}