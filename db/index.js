var adminUsers = [
  { name: "david", password: "sure" },
  { name: "daniel", password: "ok" },
];

function checkPwd(username, password) {
  for (var idx = 0; idx < adminUsers.length; idx++) {
    if (adminUsers[idx].name === username &&
        adminUsers[idx].password === password)
      return true;
  }

  return false;
}

var people = [
  { id: 1, name: "john", phone: "+12223334444" },
  { id: 2, name: "alice", phone: "+13223334444" },
  { id: 3, name: "bob", phone: "+14223334444" },
  { id: 4, name: "cindy", phone: "+15223334444" },
];

var assignments = [
  { tag: 'ok' },
];

module.exports = {
  adminUsers,
  checkPwd,
  people,
  assignments,
};
