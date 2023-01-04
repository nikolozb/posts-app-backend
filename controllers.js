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

  async getAll(req, res) {
    try {
      const posts = await PostSchema.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "id is not specified" });
      }
      const singlePost = PostSchema.findById(id);
      return res.json(singlePost);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostControllers();
