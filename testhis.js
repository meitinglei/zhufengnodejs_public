var someuser = {
    name:'byvoid',
    func:function(){
        console.log(this.name);
    }
}

var foo = {
    name:'foobar'
}

func = someuser.func.bind(foo);
func();

func2 = func.bind(someuser);
func2();

someuser.func.bind = function(self){
    return this.call(self);
}




