// HOMEWORK purpose, we will prop not see this in the work field //
const orm = require('../config/orm.js')

const food = { }

// READ METHOD
food.getAll = (cb) => {
    orm.read('burgers', burgers => cb(burgers))
}

// CREATE METHOD
food.CreateOne = (burger, cb) => {
    orm.create('burgers', burger, id => cb(id))
}

// UPDATE METHOD
food.updateOne = (updates, where, cb) => {
    orm.update('burgers', updates, where, () => cb())
}

// DELETE METHOD
food.deleteOne = (where, cb) => {
    orm.delete('burgers', where, () => cb())
}

module.exports = food
