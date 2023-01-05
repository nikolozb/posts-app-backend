import PostSchema from "./Post.js";
import PostServices from "./services.js";

class PostControllers {
  async create(req, res) {
    try {
      const post = await PostServices.create(req.body);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostServices.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const singlePost = await PostServices.getOne(req.params.id);
      return res.json(singlePost);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        res.status(400).json({ message: "id is not specified" });
      }
      const updatedPost = await PostServices.update(post);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "id is not specified" });
      }
      const post = await PostServices.delete(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostControllers();
