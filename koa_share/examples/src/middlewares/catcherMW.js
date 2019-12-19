module.exports = async (ctx, next) => {
    console.log('catcher start')
    try{
       await next()
       console.log('catcher end')
    }catch(e){
        console.log(e)
    }
}