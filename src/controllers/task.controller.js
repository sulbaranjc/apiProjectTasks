import Task from "../models/Tasks";

export async function createTask(req, res) {
  const { name, done, projectid } = req.body;
  try {
    let newTask = await Task.create(
      {
        name,
        done,
        projectid
      },
      {
        fields: ["name", "done", "projectid"]
      }
    );
    if (newTask) {
      return res.json({
        message: "task created successfully",
        data: newTask
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Somethign goes wrong",
      data: {}
    });
  }
}

export async function getTasks(req, res) {
  const tasks = await Task.findAll({
    attributes: ["id", "projectid", "name", "done"],
    order: [["id", "DESC"]]
  });
  res.json({ tasks });
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { name, done, projectid } = req.body;

  const task = await Task.findOne({
    attributes: ["id", "projectid", "name", "done"],
    where: { id }
  });

  const updatedTask = await Task.update(
    {
      name,
      done,
      projectid
    },
    {
      where: { id }
    }
  );
  res.json({
    message: "Task Updated",
    updatedTask
  });
}

export async function deleteTask(req, res) {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: {
        id
      }
    });
    res.json({ message: "deleted" });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Somethign goes wrong"
    });
  }
}

export async function getOneTask(req, res) {
  const { id } = req.params;
  const task = await Task.findOne({
    attributes: ["id", "projectid", "name", "done"],
    where: { id }
  });
  res.json({ task });
}

export async function getTasksByProject(req, res) {
  const { projectid } = req.params;
  const tasks = await Task.findAll({
    attributes: ["id", "projectid", "name", "done"],
    where: { projectid }
  });
  res.json({ tasks });
}
