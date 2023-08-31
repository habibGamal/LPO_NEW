import React from "react";
import { Meeting as MeetingModel, MeetingDB } from "../../Models/Meeting";
import Meeting from "../../Components/Meeting";
import { Collapse } from "antd";
const { Panel } = Collapse;
export default function Editor({ meetingsDB }: { meetingsDB: MeetingDB[] }) {
    const meetings = meetingsDB.map((meeting) => new MeetingModel(meeting));

    return (
        <div className="container my-16 flex flex-col gap-4">
            <Collapse defaultActiveKey={["-1"]} onChange={() => {}}>
                <Panel header="Make New Meeting" key="-1">
                    <Meeting />
                </Panel>
                {meetings.map((meeting) => (
                    <Panel header={meeting.name} key={meeting.id}>
                        <Meeting key={meeting.id} meeting={meeting} />
                    </Panel>
                ))}
            </Collapse>
            {}
        </div>
    );
}
