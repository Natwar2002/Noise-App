import Sidebar from "../../component/Sidebar/Sidebar";
import ChatScreen from "../../component/Chat/ChatScreen";

export default function ChatLayout() {
    return (
        <div className="flex h-[calc(100vh-64px)] w-full">
            <Sidebar />
            <ChatScreen />
        </div>
    );
}
