const User={
    _email:'suchitra22gmail.com',
    _password :"abc",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value;
    }
}

const suchitra=Object.create(User)
console.log(suchitra.email);



