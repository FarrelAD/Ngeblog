import { useState } from "react"

import Card from "./Card"
import Footer from "./Footer"

function LandingPage() {
    const [activeMenuCard, setActiveMenuCard] = useState(null)

    const toggleDetail = (id) => {
        setActiveMenuCard(id)
    }

    const blogContents = [
        {
            blogTitle: 'Cara menjadi programmer handal yang berguna memajukan UMKM masyarakat Indonesia',
            blogWriter: 'Tejo Sudirman',
            writerPhotoProfile: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R154552900&ga=GA1.1.1463073662.1725160777&semt=ais_hybrid',
            blogImageUrl: 'https://blog.titipbeliin.com/wp-content/uploads/2022/01/Bidang-Kerajinan-Tangan-dan-Kesenian.jpg',
            blogWrittenDate: '02 Feb 2024'
        },
        {
            blogTitle: 'Cara menghubungkan MySQL ke Java. Tips dan trik serta masalah yang sering dialami',
            blogWriter: 'Pelita Bintang',
            writerPhotoProfile: 'https://img.freepik.com/free-photo/positive-caucasian-man-with-trendy-hairdo-dark-bristle-glad-notice-something-points-with-index-finger_273609-23536.jpg?t=st=1725161237~exp=1725164837~hmac=c6dc74d21c972a0181d2979f57d0195e194b8b81734bd9611eacfd9ba009b7eb&w=1060',
            blogImageUrl: 'https://cc-mnnit.github.io/2021-22-Classes/Java/JavaMySQLNotes/assets/Java-Mysql.jpg',
            blogWrittenDate: '19 Mar 2024'
        },
        {
            blogTitle: 'Tips membersihkan laptop agar bisa awet bertahun-tahun meski dihajar seharian non-stop',
            blogWriter: 'Bejo Aji',
            writerPhotoProfile: 'https://img.freepik.com/free-photo/front-view-man-looking-up-with-copy-space_23-2148946263.jpg?t=st=1725161263~exp=1725164863~hmac=73d0f40c0ce9144b9dae670de191c9291ed3ae40630067eeaf81cadc30e8796a&w=1060',
            blogImageUrl: 'https://i.pcmag.com/imagery/articles/05uthAxgkcAOKdZzRzXfMvf-7..v1617373249.jpg',
            blogWrittenDate: '12 Mar 2024'
        },
        {
            blogTitle: 'Hal yang Harus Diperhatikan Saat Install Ulang Windows. Pastikan Semuanya Sesuai Biar Data Gak Ilang!',
            blogWriter: 'Siti Zulaikah',
            writerPhotoProfile: 'https://img.freepik.com/free-photo/smiley-female-standing-with-arms-crossed_23-2148418540.jpg?t=st=1725684202~exp=1725687802~hmac=192429e652a28c63b8b6f750725021c95b2aeb573d5a035e8efdfa8f0ee3ddcc&w=1060',
            blogImageUrl: 'https://7datarecovery.com/blog/wp-content/uploads/2023/03/reinstall-windows-without-losing-data.jpg',
            blogWrittenDate: '02 Feb 2024'
        },
        {
            blogTitle: 'Tips Membeli Mouse Bagi Pekerja Kantoran',
            blogWriter: 'Mawar Melati',
            writerPhotoProfile: 'https://img.freepik.com/free-photo/girl_23-2148168311.jpg?t=st=1725684473~exp=1725688073~hmac=964c6e2181cb091e17d53f3378dd15ad34917109ab01125644f21a642aa27e4d&w=1060',
            blogImageUrl: 'https://s.yimg.com/ny/api/res/1.2/qJSHc5ov0qtBxhEUapsCvA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-10/6c0a0da0-269a-11ec-be46-7eeed37a001b',
            blogWrittenDate: '29 Des 2023'
        },
        {
            blogTitle: 'Membuat Smart IoT untuk Alat Monitoring Tanaman',
            blogWriter: 'Bejo Aji',
            writerPhotoProfile: 'https://img.freepik.com/free-photo/front-view-man-looking-up-with-copy-space_23-2148946263.jpg?t=st=1725161263~exp=1725164863~hmac=73d0f40c0ce9144b9dae670de191c9291ed3ae40630067eeaf81cadc30e8796a&w=1060',
            blogImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FW_yu-b_ahRRx6zWNt9weK3tlypMIoGMim5kZQfdJFtsh7A_4YBn7v6U5nhjOveiSbw&usqp=CAU',
            blogWrittenDate: '05 Agt 2024'
        },
    ]

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

            <section>
                <h1 className="- font-bold text-3xl">Teknologi</h1>
                <div id="card-container" className="grid grid-cols-[repeat(auto-fill,_22rem)] gap-1 auto-rows-[24rem] mt-4">
                    {blogContents.map((content, index) => (
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

            <Footer />
        </div>
    )
}

export default LandingPage