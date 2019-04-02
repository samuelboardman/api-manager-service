const AuthRole = require('../models/authInfo/role')
const logger = require('../utils/errorManager')
class AuthUserRepo {
  async findById (id) {
    try {
      return await AuthRole.findById(id)
    } catch (error) {
      logger.error(error)
    }
  }
  async findAll (limitNum, sortingObject) {
    try {
      return await AuthRole.find()
        .limit(limitNum)
        .sort(sortingObject)
    } catch (error) {
      logger.error(error)
    }
  }

  async create (role) {
    const addRole = new AuthRole(role)
    try {
      await addRole.save()
    } catch (error) {
      logger.error(error)
    }
  }

  async update (id, updateObject) {
    try {
      const result = await AuthRole.update({ _id: id }, {
        $set: updateObject
      })
      return result
    } catch (error) {
      logger.error(error)
      // console.log('Error ', error)
    }
  }

  async init () {
    let user = this.findById('ADMIN')
    user.then(result => {
      if (result === null) {
        const initObject = {
          _id: 'ADMIN',
          name: 'ADMIN',
          permisionIds: [1, 2, 3],
          enabled: Boolean,
          createdAt: new Date(),
          createdBy: 'Code User'
        }
        this.create(initObject)
      }
    }
    )
  }
}

module.exports = AuthUserRepo
