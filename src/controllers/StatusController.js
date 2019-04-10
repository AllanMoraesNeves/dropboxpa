

class StatusController{
    async status(req,res){
        return res.send('Aplicação ok');
    }
}

module.exports = new StatusController();