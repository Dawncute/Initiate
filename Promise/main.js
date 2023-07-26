var users = [
    {
        id: 1,
        name: "Binh Minh"
    },
    {
        id: 2,
        name: "The Anh"
    },
    {
        id: 3,
        name: "Thanh Huyền bắt bugs"
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "The Anh coi Thanh Huyền bắt bugs hả"
    },
    {
        id: 2,
        user_id: 2,
        content: "Coi xí chi căng"
    },
    {
        id: 3,
        user_id: 3,
        content: "Để t với Anh nch m đi ra"
    }
]

function getComments()
{
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments)
        },1000)
    })
}

function getUsersByIds(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(users){
            return userIds.includes(users.id)
        })
        setTimeout(function(){
            resolve(result)
        },1000)
    })
}

getComments()
    .then(function(comments){
        var userIds = comments.map(function(comment){
            return comment.user_id
        })

        return getUsersByIds(userIds)
            .then(function(users){
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function(data){
        var commentsBlock = document.getElementById("comments-block")

        var html = ''
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user){
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        });

        commentsBlock.innerHTML = html
    })
