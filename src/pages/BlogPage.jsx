import { useParams } from "react-router-dom"

import Navbar from "../components/ThemeButton"

import { blogContents } from "../seed/data"

function BlogPage() {
    const { blogTitle } = useParams();

    const fullBlogData = blogContents.flat().find(data => data.blogTitle === blogTitle)

    if (fullBlogData) {
        return (
            <div className="flex justify-center">
                <Navbar />
                <div className="w-9/12 py-4 md:p-12">
                    <h1 className="text-3xl md:text-5xl font-bold">{fullBlogData.blogTitle}</h1>
                    <div className="flex justify-between md:px-8 mt-5 md:mt-8">
                        <div className="flex align-middle">
                            <img src={fullBlogData.writerPhotoProfile} alt="User photo profile" className="mr-2 md:mx-8 rounded-full w-10 md:w-12 h-10 md:h-12"/>
                            <p>{fullBlogData.blogWriter}</p>
                        </div>
                        <div>
                            {fullBlogData.blogWrittenDate}
                        </div>
                    </div>
                    <div id="blog-img-container" className="my-4 h-44 md:h-96">
                        <img src={fullBlogData.blogImageUrl} alt="Blog image" className="w-full h-full"/>
                    </div>
                    <br />
                    <hr />
                    <article className="mt-4">
                        <p className="my-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla tempus dolor non mattis. Duis ultrices posuere urna, sit amet consectetur nulla. Donec auctor nibh urna, eu consequat mauris tincidunt et. Duis dignissim posuere felis ac viverra. In tincidunt laoreet accumsan. Integer mattis nisi vitae mollis tincidunt. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id magna pretium ipsum molestie sodales eu eu orci. Nullam viverra tortor ultrices neque tincidunt, id rutrum lectus feugiat. Vestibulum luctus nisi lacinia vulputate varius. Sed pharetra tristique quam, semper auctor sapien placerat vel. In ultrices vitae mi ultricies venenatis. Suspendisse posuere eget turpis sed volutpat.
                        </p>
                        <p className="my-6">
                            Donec ligula urna, dapibus id metus nec, malesuada elementum turpis. Nunc mollis gravida arcu, non consectetur leo sagittis nec. Etiam rhoncus ex neque. Proin sodales massa sed libero auctor, id finibus lacus dictum. Duis interdum odio nec molestie placerat. Duis faucibus eu lorem nec vehicula. Phasellus ut ex tincidunt, dapibus nisl eu, tristique ante. In quis orci at risus ultricies suscipit. Aliquam lorem tellus, pulvinar vel ligula malesuada, aliquam rhoncus leo.
                        </p>
                        <p className="my-6">
                            Morbi tincidunt condimentum elit, in porta orci vehicula sed. Ut elementum tortor lacinia congue lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sed ipsum ut libero euismod placerat eu vel elit. Proin cursus lorem velit, vel congue nulla sodales ac. Nulla facilisi. Maecenas sit amet libero odio. Vivamus ut imperdiet orci, nec dapibus sem. Integer cursus ligula id varius imperdiet. Sed nec luctus nisi. Sed facilisis mi nisl, ac sollicitudin purus malesuada non. Aliquam eget molestie felis, at posuere nisl.
                        </p>
                    </article>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex justify-center align-middle h-screen">
                <h1 className="text-8xl font-bold">Data not found!</h1>
            </div>
        )
    }
}

export default BlogPage