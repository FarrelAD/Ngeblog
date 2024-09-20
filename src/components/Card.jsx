import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function CardMenuList({shape, title}) {
    return (
        <div className="flex my-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-2">
                <path strokeLinecap="round" strokeLinejoin="round" d={shape} />
            </svg>
            <p className="m-0">{title}</p>
        </div>
    )
}

CardMenuList.propTypes = {
    shape: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

function CardMenuBox() {
    return (
        <div className="absolute right-0 top-12 bg-slate-950 rounded-lg shadow-lg shadow-gray-700 p-4 cursor-default z-10">
            <CardMenuList title="Simpan" shape="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"/>
            <CardMenuList title="Tidak tertarik" shape="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
            <CardMenuList title="Laporkan" shape="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"/>
        </div>
    )
}

function Card({id, isMenuActive, toggleDetail, blogTitle, blogWriter, writerPhotoProfile, blogImageUrl , blogWrittenDate}) {
    const navigate = useNavigate()
    
    const navigateDetail = () => {
        navigate(`/blog/${blogTitle}`)
    }

    return (
        <div className="mx-auto blog-card bg-slate-950 rounded-lg w-80 m-4 shadow-lg shadow-slate-600 hover:cursor-pointer hover:shadow-slate-400 transition-shadow" onClick={navigateDetail}>
            <img src={blogImageUrl} alt="Card image" className="min-w-full h-48 rounded-t-lg object-cover" />
            <div className="p-4">
                <h1 className="blog-title font-bold">{blogTitle}</h1>
                <div className="relative bottom-0 flex items-center justify-between mt-4">
                    <div className="flex items-center hover:underline">
                        <img src={writerPhotoProfile} alt="User photo profile" className="writer-photo-profile w-10 h-10 rounded-full mx-3" />
                        <p className='blog-writer'>{blogWriter}</p>
                    </div>
                    <div className="flex items-center">
                        <p className='blog-written-date text-sm'>{blogWrittenDate}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-2 hover:cursor-pointer" onClick={() => toggleDetail(id)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </div>
                    {isMenuActive && (<CardMenuBox />)}
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    isMenuActive: PropTypes.bool,
    toggleDetail: PropTypes.func.isRequired,
    blogTitle: PropTypes.string.isRequired,
    blogWriter: PropTypes.string.isRequired,
    writerPhotoProfile: PropTypes.string.isRequired,
    blogImageUrl: PropTypes.string.isRequired,
    blogWrittenDate: PropTypes.string.isRequired
}

export default Card