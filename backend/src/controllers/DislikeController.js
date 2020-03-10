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

        loggedDev.dislikes.push(targetDev._id); 
        await loggedDev.save();
        
        return res.json(loggedDev);
    }
=======
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if(!targetDev) {
      return res.status(400).json({ error: "Dev not found" });
    }

    loggedDev.dislikes.push(targetDev._id);

    await loggedDev.save()

    return res.json(loggedDev);
  }
>>>>>>> a388ce966877eb0e28602a35284aa4323771aa3a
}