function getTeam(teamName) {
  const data = null;
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open('GET', `https://api-nba-v1.p.rapidapi.com/teams/nickName/${teamName}`);
  xhr.setRequestHeader('x-rapidapi-key', 'cc18e95e0fmsh1e8f5597163251cp1dc923jsnf4b5c9f80b9e');
  xhr.setRequestHeader('x-rapidapi-host', 'api-nba-v1.p.rapidapi.com');

  xhr.send(data);
}
