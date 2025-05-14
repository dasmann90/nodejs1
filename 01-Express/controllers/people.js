let {people} = require('../data')

const getPeople = (req,res)=>{
    res.status(200).json({sucess:true,data:people});
}
const createPeople = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
};
const createPeoplePostman = (req,res)=>{
    const {name}= req.body;
    if(!name){
       return res.status(400).json({sucess:false,msg:'Please provide the name'})
    }
    const data = {id:people.length + 1, name:name};
    res.status(201).json({sucess:true,data:[...people,data]})
};

const updatePeople = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((x)=>x.id === Number(id));
    if(!person){
       return res.status(404).json({sucess:false,msg:`no person with id: ${id}`});
    }

    const newPerson = people.map((x)=>{
        if(x.id === Number(id)){
            x.name = name;
        }
        return x;
    });

    res.status(200).json({success:true,data:newPerson})
};

const deletePeople = (req,res)=>{
    const {id}= req.params;
    const person = people.find((x)=> x.id === Number(id));

    if(!person){
        return res.status(404).json({success:false,msg:`No person with Id : ${id}`})
    }

    const newPerson = people.filter((x)=> x.id !== Number(id))

   return res.status(200).json({success:true,data:newPerson})
}

module.exports = {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
}