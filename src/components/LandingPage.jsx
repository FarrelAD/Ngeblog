import { useState } from "react"

import Card from "./Card"
import Footer from "./Footer"

function LandingPage() {
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

            <div id="card-container" className="flex mt-20">
                <Card
                    key={1}
                    id={1}
                    isMenuActive={activeMenuCard === 1}
                    toggleDetail={toggleDetail}
                    blogTitle="Cara menjadi programmer handal yang berguna memajukan UMKM masyarakat Indonesia"
                    blogWriter="Tejo Sudirman"
                    writerPhotoProfile="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R154552900&ga=GA1.1.1463073662.1725160777&semt=ais_hybrid"
                    blogImageUrl="https://blog.titipbeliin.com/wp-content/uploads/2022/01/Bidang-Kerajinan-Tangan-dan-Kesenian.jpg"
                    blogWrittenDate="02 Feb 2024"
                />
                <Card
                    key={2}
                    id={2}
                    isMenuActive={activeMenuCard === 2}
                    toggleDetail={toggleDetail}
                    blogTitle="Cara menghubungkan MySQL ke Java. Tips dan trik serta masalah yang sering dialami"
                    blogWriter="Pelita Bintang"
                    writerPhotoProfile="https://img.freepik.com/free-photo/positive-caucasian-man-with-trendy-hairdo-dark-bristle-glad-notice-something-points-with-index-finger_273609-23536.jpg?t=st=1725161237~exp=1725164837~hmac=c6dc74d21c972a0181d2979f57d0195e194b8b81734bd9611eacfd9ba009b7eb&w=1060"
                    blogImageUrl="https://cc-mnnit.github.io/2021-22-Classes/Java/JavaMySQLNotes/assets/Java-Mysql.jpg"
                    blogWrittenDate="19 Mar 2024"
                />
                <Card
                    key={3}
                    id={3}
                    isMenuActive={activeMenuCard === 3}
                    toggleDetail={toggleDetail}
                    blogTitle="Tips membersihkan laptop agar bisa awet bertahun-tahun meski dihajar seharian non-stop"
                    blogWriter="Bejo Aji"
                    writerPhotoProfile="https://img.freepik.com/free-photo/front-view-man-looking-up-with-copy-space_23-2148946263.jpg?t=st=1725161263~exp=1725164863~hmac=73d0f40c0ce9144b9dae670de191c9291ed3ae40630067eeaf81cadc30e8796a&w=1060"
                    blogImageUrl="https://i.pcmag.com/imagery/articles/05uthAxgkcAOKdZzRzXfMvf-7..v1617373249.jpg"
                    blogWrittenDate="12 Mar 2024"
                />
            </div>

            <Footer />
        </div>
    )
}

export default LandingPage