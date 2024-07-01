window.document.addEventListener('DOMContentLoaded', function() {
    const nomeElemento = document.getElementById('name');
    const usuario = document.getElementById('username');
    const avatar = document.getElementById('avatar');
    const repositorio = document.getElementById('repositorio');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const link = document.getElementById('link');
    
    fetch('https://api.github.com/users/Fredindev')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nomeElemento.innerText = json.name;
            usuario.innerText = json.login;
            avatar.src = json.avatar_url;
            seguindo.innerText = json.following;
            seguidores.innerText = json.followers;
            repositorio.innerText = json.public_repos;
            link.href = json.html_url
        })    
})
