import React from "react";

type Props = {
    embededLink: string;
};

const ShowMeeting = (props: Props) => {
    return (
        <div className="container">
            <div
                className="mt-4 mx-auto book-video-iframe "
                dangerouslySetInnerHTML={{ __html: props.embededLink }}
            />
        </div>
    );
};

export default ShowMeeting;
