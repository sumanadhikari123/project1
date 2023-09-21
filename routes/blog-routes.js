import Express  from "express";
import {
    addBlog,
     getAllBlogs, 
     updateBlog,
     getById,
     deleteBlog
    } from "../controllers/blog-controller";

const blogRouter = Express.Router();

blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);


export default blogRouter;