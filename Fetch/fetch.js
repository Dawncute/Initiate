var postAPI = "https://jsonplaceholder.typicode.com/posts"

fetch(postAPI)
    .then(function(reponse){
        return reponse.json()
    })
    .then(function(posts){
        var html = posts.map(function(post){
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`
        })

        var htmls = html.join('')
        document.getElementById('post-block').innerHTML = htmls
    })