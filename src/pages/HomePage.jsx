import { useState } from "react"
import PropTypes from 'prop-types'

import Card from "../components/Card"
import Footer from "../components/Footer"

import { blogContents } from "../seed/data"

function BlogsTopicContainer({topicName, topicIndex, activeMenuCard, toggleDetail}) {
    return(
        <>
            <section className="my-4">
                <h1 className="- font-bold text-3xl">{topicName}</h1>
                <div id="card-container" className="grid grid-cols-[repeat(auto-fill,_22rem)] gap-1 auto-rows-[24rem] mt-4">
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
        <div className="p-20 pb-4">
            <div className="flex justify-between align-middle">
                <div className="flex flex-col justify-center ml-16">
                    <h1 className="font-bold text-7xl">NGEBLOG.</h1>
                    <p>Mari saling berbagi ide, membantu satu sama lain, dan berikan pengalamanmu semuanya di sini!</p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 h-80 w-80 mr-32">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
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