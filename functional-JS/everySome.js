function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      // SOLUTION GOES HERE
      return submittedUsers.every(user => {
          return goodUsers.some(good => {
              return good.id==user.id;
          });
      });
    };
  }

  module.exports = checkUsersValid