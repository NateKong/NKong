function getProjects(data){
  var projects = '';
  var row = 0;

  for (var p in data){
    var href = data[p].href;
    var mi = data[p].materialIcon;
    var title = data[p].title;
    var desc = data[p].description;
    var other = data[p].other;
    var noHref = href === ('none') ? true : false;
    
    if(row % 3 == 0 ){
      projects += '<div class="row">';
    }

    if(noHref){
      projects += '<div class="col s12 m4"><div class="icon-block">';
    }else{
      projects += '<div class="col s12 m4 link"><div class="icon-block">';
      projects += '<a class="white-text" href="' + href + '">';
    }

    projects += '<h2 class="center light-blue-text"><i class="material-icons">' + mi + '</i></h2>';
    projects += '<h5 class="center">' + title + '</h5>';
    projects += '<p class="light">' +  desc + '</p>';
    projects += '<p class="light">' + other + '</p>';

    if(noHref){
      projects += '</div></div>';
    }else{
      projects += '</a></div></div>';
    }

    if(row % 3 == 2 ){
      projects += '</div><!---->';
    }
    row++;
    
  }

  var projectsLength = projects.length;
  var checkEnd = projects.substr( projectsLength-7 , projectsLength-1);

  if(checkEnd !== ('<!---->')){
    projects += '</div>';
  }
  return projects;
}