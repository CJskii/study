let user = {
    Name: "John",
    Surname: "Smith",
}

user.Name = "Pete"
delete user.Name

let schedule = {
    Today: "John",
    Tomorrow: "Smith"
};

function isEmpty(){
    for (let key in schedule){
        return false;
} 
return true;
}

