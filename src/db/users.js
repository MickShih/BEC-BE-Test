var records = [
    { id: 1, username: 'test1', password: '111', displayName: 'Test1', emails: [ { value: 'test1@example.com' } ] }
  , { id: 2, username: 'test2', password: '222', displayName: 'Test2', emails: [ { value: 'test2@example.com' } ] }
  , { id: 2, username: 'admin@admin.com', password: 'password', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
