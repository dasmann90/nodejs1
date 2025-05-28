
const logIn = async (req,res)=>{
    res.send(`This is login route!!`)
}

const dashBoard = async(req,res)=>{
    const luckyNumber = Math.floor(Math.random() * 100 );
    res.status(200).json({user:`Hello Mangal`, token:`Here is your authorize data, ${luckyNumber}`})
}

module.exports = {logIn,dashBoard}