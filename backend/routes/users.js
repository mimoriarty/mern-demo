import { UserModel } from "../models/User";

export default (app) => {
  /**
   * V1 users API
   */
  // get route all users
  app.get("/v1/users", async (req, res) => {
    const users = await UserModel.find() || [];
    res.send(users);
  });

  // get route user by id
  app.get("/v1/users/:id", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.status(404).end();
      }
    } catch {
      res.status(404).end();
    }
  });

  // add new user
  app.post("/v1/users", async (req, res) => {
    const user = await UserModel.create(req.body);
    i      
    res.status(user ? 201 : 500).end();
  });

  // modify existing user
  app.put("/v1/users/:id", async (req, res) => {
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      error => res.status(error ? 500 : 201).end()
    );
  });

  //delete user
  app.delete("/v1/users/:id", async (req, res) => {
    const user = await UserModel.findByIdAndDelete(
      req.params.id,
      req.body,
      error => res.status(error ? 500 : 201).end()
    );
  });
};
