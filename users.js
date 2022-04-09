// Armar un objeto literal llamado "program" que contenga como propiedades: 
// - "users" que es un array de objetos "user"
//      - cada "user" del array contiene las propiedades:
//       { email, password, name, lastname, posts (un array de "posts") }
//      - cada "post" del aray es un objeto con las propiedades:
//       { title, content }
// - "logedUser" que tiene por defector el valor "null"
// - "login()" es un metodo que recibe un "email" y un "password". Si encuentra concidencia
//   con alguno de los usuarios sobre escribe el valor de "logedUser" con ese usuario y
//   y por ultimo imprime por consola el logedUser
// - "addPost()" es un metodo que recibe un "title" y un "content" y con esa información
//   agrega un post dentro del objeto loggedUser y por ultimo imprime por consola el logedUser

let programUsers = [
    {
      email:'valeria@paparelli.com.ar',
      password: 123456,
      name: 'Valeria',
      lastname: 'Paparelli',
      posts: []
    },
    {
        email:'fran@lopez.com.ar',
        password: 654321,
        name: 'Francisco',
        lastname: 'Lopez',
        posts: []
    },
]

let program = {
    users: programUsers,
    logedUser: null,
    login: function(email, password){
        for(let i = 0; i < this.users.length; i++){
            if(email === this.users[i].email && password === this.users[i].password){
                this.logedUser = this.users[i];
                console.log(this.logedUser);
            }
        }
    },
    addPost: function(title, content){
        this.logedUser.posts.push({
            title: title,
            content: content
        })
        console.log(this.logedUser)
    }
}

program.login('fran@lopez.com.ar', 654321);
program.addPost('titulo', 'contenido');