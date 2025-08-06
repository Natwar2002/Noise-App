import { useState } from "react";
import { useGetDms } from "../../hooks/apis/useGetDms";
import useChatStore from "../../store/chatStore";
import { Avatar, Card, CardBody,  } from '@heroui/react';
import { LucideLoaderCircle, Search, TriangleAlert, User } from "lucide-react";
import { useGetDMsMessages } from "../../hooks/apis/useGetDMsMessages";

export default function RenderDmsList() {

    const { dms, isFetching: dmsLoading, error: dmsError } = useGetDms();
    const { selectedChat, setSelectedChat } = useChatStore();
    const [chatId, setChatId] = useState('');

    const { messages } = useGetDMsMessages(chatId, { enabled: !!chatId });
    console.log("messages", messages);

    const handleChatSelect = (chat, type) => {
        setSelectedChat(chat, type);
        setChatId(chat._id);
    };

    if (dmsLoading) {
        return (
            <div className="p-4 text-gray-500 flex justify-center">
                <LucideLoaderCircle className='animate-spin' />
            </div>
        );
    }

    if (dmsError) {
        return (
            <div className="p-4 text-red-500 flex justify-center gap-2">
                <TriangleAlert />
                <span>Error loading DMs</span>
            </div>
        );
    }

    if (!dms || dms.length === 0) {
        return (
            <div className="p-4 text-center text-gray-500">
                <MessageCircle className="mx-auto mb-2 opacity-50" size={32} />
                <p>No DMs yet</p>
                <p className="text-sm">Start a conversation!</p>
            </div>
        );
    }

    if (dms.length === 0) {
        return (
            <div className="p-4 text-center text-gray-500">
                <Search className="mx-auto mb-2 opacity-50" size={32} />
                <p>No DMs found</p>
                <p className="text-sm">Try a different search term</p>
            </div>
        );
    }

    return (
        <div className="space-y-2 p-2">
            {dms.map((dm) => {
                const otherUser = dm.participants?.find(
                    (user) => user._id !== useChatStore.getState().currentUserId
                );
                return (
                    <Card
                        key={dm._id}
                        isPressable
                        className={`cursor-pointer transition-all w-full duration-200 hover:shadow-sm ${
                            selectedChat?._id === dm._id && useChatStore.getState().selectedChatType === 'dm'
                                ? 'bg-primary-50 border-primary-200 dark:bg-primary-900/20 shadow-sm'
                                : 'hover:bg-gray-50 dark:hover:bg-gray-800 border-transparent'
                        }`}
                        onPress={() => handleChatSelect(dm, 'dm')}
                    >
                        <CardBody className="py-3 px-3">
                            <div className="flex items-center gap-3">
                                <Avatar 
                                    src={otherUser?.avatar} 
                                    name={`${otherUser?.firstName} ${otherUser?.lastName}`} 
                                    size="sm"
                                    icon={<User />}
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-sm truncate">
                                        {`${otherUser?.firstName} ${otherUser?.lastName}`}
                                    </p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    );
};