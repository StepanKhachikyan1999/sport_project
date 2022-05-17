const User = require("../models").User

const setOnline = async ({id}) => {
    try {
        const user = await User.findOne({where: {id}})
        user.status = true
        await user.save()
    } catch (e) {
        console.log('something went wrong', e)
    }
}

const setOffline = async ({id}) => {
    try {
        const user = await User.findOne({where:{id}})
        user.status = false
        await user.save()
    }catch (e) {
        console.log('something went wrong',e)
    }
}

module.exports = {
    setOnline,
    setOffline
}