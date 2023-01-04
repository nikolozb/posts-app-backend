import PostSchema from "./Post.js";

class PostControllers {
  async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await PostSchema.create({ author, title, content, picture });
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {}

  async getOne(req, res) {}

  async update(req, res) {}

  async delete(req, res) {}
}

export default new PostControllers();
