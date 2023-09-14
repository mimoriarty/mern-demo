import { CourseModel } from "../models/Course";

export default (app) => {
  /**
   * V1 courses API
   */
  // get route all courses
  app.get("/v1/courses", async (req, res) => {
    const courses = await CourseModel.find() || [];
    res.send(courses);
  });

  // get route course by id
  app.get("/v1/courses/:id", async (req, res) => {
    try {
      const course = await CourseModel.findById(req.params.id);
      if (course) {
        res.send(course);
      } else {
        res.status(404).end();
      }
    } catch {
      res.status(404).end();
    }
  });

  // add new course
  app.post("/v1/courses", async (req, res) => {
    const course = await CourseModel.create(req.body);
    i      
    res.status(course ? 201 : 500).end();
  });

  // modify existing course
  app.put("/v1/courses/:id", async (req, res) => {
    const course = await CourseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      error => res.status(error ? 500 : 201).end()
    );
  });

  //delete course
  app.delete("/v1/courses/:id", async (req, res) => {
    const course = await CourseModel.findByIdAndDelete(
      req.params.id,
      req.body,
      error => res.status(error ? 500 : 201).end()
    );
  });
};
