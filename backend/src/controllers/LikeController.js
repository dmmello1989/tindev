const Dev = require("../models/Dev");

module.exports = {
<<<<<<< HEAD
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev) {
            return res.status(400).json({ error: "Dev not found" });
        }

        if(targetDev.likes.includes(loggedDev._id)) {
            console.log("Deu match!")
        }

        loggedDev.likes.push(targetDev._id); 
        await loggedDev.save();
        
        return res.json(loggedDev);
    }
=======
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    let targetDev = null

    try {
      targetDev = await Dev.findById(devId);
    } catch (error) {
      return res.status(400).json({ error: 'Dev not exists' });
    }

    if(targetDev.likes.includes(loggedDev._id)) {
      const loggedSocket = req.connectedUsers[user];
      const targetSocket = req.connectedUsers[devId];

      if(loggedSocket) {
        req.io.to(loggedSocket).emit("match", targetDev);
      }

      if(targetSocket) {
        req.io.to(targetSocket).emit("match", loggedDev);
      }
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
>>>>>>> a388ce966877eb0e28602a35284aa4323771aa3a
}