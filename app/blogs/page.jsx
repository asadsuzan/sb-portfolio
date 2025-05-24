import BlogCard from "../ui/BlogCard";
import Section from "../ui/Section";
import UiWrapper from "../ui/UiWrapper";


const BlogsPage = () => {
     const bannerContent = (
    <>
     Publications

        <p className=" text-lg">
            Explore my latest publications and articles on various topics. Stay updated with my insights and research.
        </p>
    </>
  );
  const bannerProps = {
    title: "my",
    content: bannerContent,
    bgpath: "./banner1.jpg",
    pageName: "blogs",
  };
  const style = {
    marginTop: "-50px",
  };

    return(
        <UiWrapper
        bannerProps={bannerProps} layoutStyles={style}>
   

        <Section id="blogs" className="mb-[40px]">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                <BlogCard
                    title="Understanding React Hooks"
                    description="A deep dive into the world of React Hooks and how they can simplify your code."
                    date="2023-10-01"
                    link="/blogs/react-hooks"
                />
                <BlogCard
                    title="CSS Grid vs Flexbox"
                    description="Comparing CSS Grid and Flexbox for responsive web design."
                    date="2023-09-15"
                    link="/blogs/css-grid-vs-flexbox"
                />
                <BlogCard
                    title="JavaScript ES6 Features"
                    description="Exploring the new features introduced in ES6 and how to use them effectively."
                    date="2023-08-20"
                    link="/blogs/es6-features"
                />
            </div>
        </Section>

        </UiWrapper>
    )
}

export default BlogsPage;