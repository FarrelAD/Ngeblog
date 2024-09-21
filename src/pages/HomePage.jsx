import { useState } from "react"
import PropTypes from 'prop-types'

import Card from "../components/Card"
import Footer from "../components/Footer"
import Navbar from "../components/ThemeButton"

import { blogContents } from "../seed/data"

function BlogsTopicContainer({topicName, topicIndex, activeMenuCard, toggleDetail}) {
    return(
        <>
            <section className="my-16 md:my-4">
                <h1 className="font-bold text-3xl text-center md:text-left">{topicName}</h1>
                <div id="card-container" className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_22rem)] gap-1 auto-rows-[24rem] mt-4">
                    {blogContents[topicIndex].map((content, index) => (
                        <Card 
                            key={index}
                            id={index}
                            isMenuActive={activeMenuCard === index}
                            toggleDetail={toggleDetail}
                            blogTitle={content.blogTitle}
                            blogWriter={content.blogWriter}
                            writerPhotoProfile={content.writerPhotoProfile}
                            blogImageUrl={content.blogImageUrl}
                            blogWrittenDate={content.blogWrittenDate}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

BlogsTopicContainer.propTypes = {
    topicName: PropTypes.string.isRequired,
    topicIndex: PropTypes.number.isRequired,
    activeMenuCard: PropTypes.number.isRequired,
    toggleDetail: PropTypes.func.isRequired,
}

function HomePage() {
    const [activeMenuCard, setActiveMenuCard] = useState(null)

    const toggleDetail = (id) => {
        setActiveMenuCard(id)
    }

    return (
        <div className="p-4 md:p-20 pb-4">
            <Navbar />
            <div className="md:flex md:justify-between md:align-middle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-11 md:size-20 h-40 md:h-80 w-40 md:w-80 md:mr-32 order-1 md:order-2 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
                <div className="flex flex-col justify-center mx-auto p-8 md:ml-16 order-2 md:order-1">
                    <h1 className="font-bold text-3xl md:text-7xl">NGEBLOG.</h1>
                    <p>Mari saling berbagi ide, membantu satu sama lain, dan berikan pengalamanmu semuanya di sini!</p>
                </div>
            </div>

            <BlogsTopicContainer
                topicName="Teknologi"
                topicIndex={0}
                activeMenuCard={activeMenuCard}
                toggleDetail={toggleDetail}
            />

            <BlogsTopicContainer
                topicName="Hobi dan Minat"
                topicIndex={1}
                activeMenuCard={activeMenuCard}
                toggleDetail={toggleDetail}
            />

            <BlogsTopicContainer
                topicName="Pengembangan Diri"
                topicIndex={2}
                activeMenuCard={activeMenuCard}
                toggleDetail={toggleDetail}
            />

            <BlogsTopicContainer
                topicName="Karir"
                topicIndex={3}
                activeMenuCard={activeMenuCard}
                toggleDetail={toggleDetail}
            />

            <Footer />
        </div>
    )
}

export default HomePage