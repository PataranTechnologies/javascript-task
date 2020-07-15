const Mongoose=require('mongoose');

const dbSchema = new Mongoose.Schema({

rollNumber:{

    type: Number,
    required: true
},
name:{

    type:String,
    required:true
},
gender:{

    type:String,
    required:true
},
clasz:{

    type:String,
    required:true
},
phone_number:{
    type:String,
    required:true
}

});

var Student=module.exports=Mongoose.model('StudentSchema',dbSchema);

module.exports.get=function(callback,limit)
{
Student.find(callback).limit(limit);
}