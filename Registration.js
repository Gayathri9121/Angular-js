// Register Service
myApp.service("RegisterService" , function(){
    var uid = 1;
    var users = [{
    'id' : 0,
    'name' : 'John Doe',
    'email' : 'johndoe@gmail.com',
    'password': 'johndoe',
    'phone' : '123-45-678-901'}];	
    
        // Save User
        this.save = function(user)  
        {
            if(user.id == null)                       
            {
                user.id = uid++;
                users.push(user);
            }
            else
            {
                for(var i in users)
                {
                    if(users[i].id == user.id)
                    {
                        users[i] = user;
                    }
                }
            }
        };
    
        // Search User
        this.get = function(id)
        {
            for(var i in users )
            {
            if( users[i].id == id)
            {
            return users[i];
            }
            }
        };
    
        // Delete User
        this.delete = function(id)
        {
        for(var i in users)
        {
        if(users[i].id == id)
        {
        users.splice(i,1);
        }
        }
        };	
    
        // List Users
        this.list = function()
        {
        return users;
        };	
    });