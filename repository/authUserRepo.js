const AuthUser = require('../models/authInfo/users')
const logger = require('../utils/errorManager')
const passwordUtils = require('../utils/passwordUtils')
class AuthUserRepo {
  async findById (id) {
    try {
      return await AuthUser.findById(id)
        .select({ password: -1 })
    } catch (error) {
      logger.error(error)
    }
  }
  async findAll (limitNum, sortingObject) {
    try {
      return await AuthUser.find()
        .limit(limitNum)
        .sort(sortingObject)
        .select({ password: -1 })
    } catch (error) {
      logger.error(error)
    }
  }

  async validateUser (email, password) {
    try {
      const user = AuthUser.find({ email: email })
      return passwordUtils.validate(password, user.password)
    } catch (error) {
      logger.error(error)
    }
  }

  async resetPassword (email, password) {
    try {
      return await AuthUser.update({ email: email, password: password },
        { $set: {
          password: passwordUtils.run(password)
        } })
    } catch (error) {
      logger.error(error)
    }
  }

  async create (user) {
    user.password = passwordUtils.run(user.password)
    const addUser = new AuthUser(user)
    try {
      await addUser.save()
    } catch (error) {
      logger.error(error)
    }
  }

  async update (conditionObject, updateObject) {
    try {
      const result = await AuthUser.update(conditionObject, {
        $set: updateObject
      })
      return result
    } catch (error) {
      logger.error(error)
      // console.log('Error ', error)
    }
  }

  async init () {
    let user = this.findById('1')
    user.then(result => {
      if (result === null) {
        const initObject = {
          _id: '1',
          firstName: 'Root',
          lastName: 'User',
          email: 'root@email.com',
          password: passwordUtils.run('Password@12'),
          authRoleId: 'ADMIN',
          enabled: true,
          accountLocked: false,
          createdAt: new Date(),
          createdBy: 'Code Created'
        }
        this.create(initObject)
      }
    }
    )
  }
}

module.exports = AuthUserRepo
