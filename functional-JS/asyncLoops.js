async function loadUsers(userIds, load, done) {
    var users = []
    for (var i = 0; i < userIds.length; i++) {
      tmp= await load(userIds[i])
      users.push(tmp);
    }
    done(users);
    return users
  }

  module.exports = loadUsers