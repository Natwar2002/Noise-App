import ChannelHeader from "../../component/Channel/ChannelHeader";
import Sidebar from "../../component/Sidebar/Sidebar";

export default function ChatLayout() {
    return (
        <div className="flex gap-2">
            <Sidebar />
            <ChannelHeader />
        </div>
    );
}