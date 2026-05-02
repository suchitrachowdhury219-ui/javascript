class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){            //getters always returns not setters
        return this._email.toUpperCase()

    }
    set email(value){
        this._email=value
    }
    get password(){     //get is used to access the value of a property
        return this._password.toUpperCase()
        //`${this._password}`
    }

    set password(value){
        this._password=value
    }
}
//constructor & setter both set the values which leads to stack overflow. uhave to change the variable name both in setter in getter and the set will overwrite the value constructor
const hitesh= new User("h@hitesh.ai","123abc")
console.log(hitesh.password);       //123ABC
console.log(hitesh.email);          //H@HITESH.AI




