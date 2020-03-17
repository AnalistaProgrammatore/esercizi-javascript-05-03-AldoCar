let user = {}

user.name = "Mario"
user.surname= "Rossi"

Object.defineProperties(
    user,{
    "surname": {
        writeable: false,
        configurable: false
        }
    }
)

console.log(Object.getOwnPropertyDescriptors(user))
console.log(user)

user.name = "Marco"
console.log(user)
delete user.name
