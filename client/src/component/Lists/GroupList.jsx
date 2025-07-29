import { Hash, LucideLoaderCircle, Search, TriangleAlert, Users } from "lucide-react";
import { useGetGroups } from "../../hooks/apis/useGetGroups";
import useChatStore from "../../store/chatStore";
import { Avatar, Card, CardBody,  } from '@heroui/react';

export default function RenderGroupsList() {

    const { groups, isFetching: groupsLoading, error: groupsError } = useGetGroups();
    const { selectedChat, setSelectedChat } = useChatStore();

    const handleChatSelect = (chat, type) => {
        setSelectedChat(chat, type);
    };

    if (groupsLoading) {
        return (
            <div className="w-full p-4 text-center text-gray-500 flex justify-center">
                <LucideLoaderCircle className='animate-spin' />
            </div>
        );
    }

    if (groupsError) {
        return (
            <div className="p-4 text-center text-red-500 flex justify-center gap-2">
                <TriangleAlert />
                <span>Error loading Groups</span>
            </div>
        );
    }

    if (!groups || groups.length === 0) {
        return (
            <div className="p-4 text-center text-gray-500">
                <Users className="mx-auto mb-2 opacity-50" size={32} />
                <p>No Groups yet</p>
                <p className="text-sm">Create or join a group!</p>
            </div>
        );
    }

    if (groups.length === 0) {
        return (
            <div className="p-4 text-center text-gray-500">
                <Search className="mx-auto mb-2 opacity-50" size={32} />
                <p>No Groups found</p>
                <p className="text-sm">Try a different search term</p>
            </div>
        );
    }

    return (
        <div className="space-y-2 p-2">
            {groups.map((group) => (
                <Card
                    key={group._id}
                    isPressable
                    className={`cursor-pointer w-full transition-all duration-200 hover:shadow-sm ${
                        selectedChat?._id === group._id && useChatStore.getState().selectedChatType === 'group'
                            ? 'bg-primary-50 border-primary-200 dark:bg-primary-900/20 shadow-sm'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800 border-transparent'
                    }`}
                    onPress={() => handleChatSelect(group, 'group')}
                >
                    <CardBody className="py-3 px-3">
                        <div className="flex items-center gap-3">
                            <Avatar 
                                src={group.avatar} 
                                name={group.name} 
                                size="sm"
                                icon={<Hash />}
                            />
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm truncate">
                                    {group.name}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    {group.members?.length || 0} members
                                </p>
                            </div>
                            {group.unreadCount > 0 && (
                                <div className="bg-primary-500 text-white text-xs rounded-full px-2 py-1 min-w-5 text-center">
                                    {group.unreadCount}
                                </div>
                            )}
                        </div>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};