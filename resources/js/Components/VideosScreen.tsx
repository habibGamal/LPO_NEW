import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function ({ videos }: { videos: { link: string, name: string }[] }) {
    const [currentVideo, setCurrentVideo] = useState(videos[0].link);
    return (
        <>
            <div className="grid lg:grid-cols-4 gap-4">
                <div className="book-video-iframe lg:col-span-3" dangerouslySetInnerHTML={{ __html: currentVideo }} />
                <div className="rounded overflow-hidden shadow-dark-50 lg:col-span-1">
                    <h4 className="p-6 text-2x font-normal bg-gray-200">List of Videos</h4>
                    <ul className="bg-gray-50 max-h-[500px] overflow-y-auto">
                        {
                            videos.map((video, i) => <Video key={i} name={video.name} onClick={() => setCurrentVideo(video.link)} active={currentVideo === video.link} />)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
const Video = ({ name, active, onClick }: { name: string, active: boolean, onClick: React.MouseEventHandler<HTMLLIElement> }) => {
    return (
        <li onClick={onClick} className={`${active ? 'bg-gray-100' : ''} py-4 px-4 cursor-pointer hover:bg-gray-100`}><FontAwesomeIcon icon={faCirclePlay} className={`${active ? 'text-main' : 'text-second'} mx-4`} /> {name}</li>
    )
}

