function BaseRepository(model){
    this.SchemaModel = model
};

BaseRepository.prototype.getAll = function (page = 1, pageSize = 30) {
    return new Promise((resolve, reject) => {
        this.SchemaModel.find({}).skip((page - 1) * pageSize)
            .limit((pageSize)).exec((err, result) => {
                if (err) { reject(err); }
                else { resolve(result); }
            });
    });

}

BaseRepository.prototype.add = function(data){
    return new Promise((resolve, reject)=>{
        this.SchemaModel.create(data, (err, created)=>{
            if(err){reject(err);}
            else{resolve(created);}
        });
    });
}

BaseRepository.prototype.update = function(query,data){
    return new Promise((resolve,  reject)=>{
        this.SchemaModel.findByIdAndUpdate(query, data).exec((err, data)=>{
            if(err){reject (err);}
            else{resolve (data); }
        })
    })
}

BaseRepository.prototype.updateOne = function(data){
    return new Promise((resolve,  reject)=>{
        this.SchemaModel.findOneAndUpdate(data).exec((err, data)=>{
            if(err){reject (err);}
            else{resolve (data); }
        })
    })
}

BaseRepository.prototype.delete = function(query){
    return new Promise((resolve, reject)=>{
        this.SchemaModel.findByIdAndDelete(query).exec((err , data)=>{
            if(err){reject (err); }
            else{resolve (data);}
        })
    })
}

BaseRepository.prototype.deleteMany = function(query){
    return new Promise((resolve,reject)=>{
        this.SchemaModel.deleteMany(query).exec((err, data)=>{
            if(err){reject (err);}
            else{resolve (data)};
        })
    })

}

BaseRepository.prototype.getSingle = function(query = {}){
    return new Promise((resolve, reject)=>{
       this.SchemaModel.findOne(query).exec((err, data)=>{
           if(err){reject (err);}
           else{resolve (data)};
       }) 
    })
}

BaseRepository.prototype.getById = function(id){
    return new Promise((resolve, reject)=>{
        this.SchemaModel.findById(id).exec((err, data)=>{
            if(err){reject (err);}
            else{resolve (data)};   
        })
    })
}

module.exports = BaseRepository;