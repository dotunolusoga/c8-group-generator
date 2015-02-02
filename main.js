$.get('https://yspuku7qvh9u4cr3.firebaseio.com/.json', function(res){
  var data = res['c8-students'];
  var $ul = $('ul');

  console.log(_.VERSION);

  var chunkedStudents = _(data).map(function(value){
    return value.firstName + ' ' + value.lastName[0] + '.';
  })
  .shuffle()
  .chunk(4)
  .value();
  var $ul = $('ul');
  $ul.append(createList(chunkedStudents));
});

function createList(array) {
  var groupList = [];

  _.forEach(array, function(team){
    var $ol = $('<ol></ol>');

    _.forEach(team, function(teamMember){
      var $li = $('<li>' + teamMember + '</li>');
      $ol.append($li);
    })
    groupList.push($ol);
  })
  return groupList;
}

