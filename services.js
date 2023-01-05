import PostSchema from "./Post.js";

class PostServices {
  async create(post) {
    const createdPost = await PostSchema.create(post);
    return createdPost;
  }

  async getAll() {
    const posts = await PostSchema.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id is not specified");
    }
    const singlePost = PostSchema.findById(id);
    return singlePost;
  }

  async update(post) {
    if (!post) {
      throw new Error("id is not specified");
    }
    const updatedPost = await PostSchema.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("id is not specified");
    }
    const post = await PostSchema.findByIdAndDelete(id);
    return post;
  }
}

export default new PostServices();
