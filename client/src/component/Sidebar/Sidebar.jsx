import { Button } from '@heroui/button';
import { Card, CardBody } from '@heroui/card';
import { Avatar } from '@heroui/avatar';
import { Input } from '@heroui/input';
import { MessageCircle, Users, Hash, User, Search, LucideLoaderCircle, TriangleAlert } from 'lucide-react';
import { useState } from 'react';
import useChatStore from '../../store/chatStore';
import { useGetGroups } from '../../hooks/apis/useGetGroups';
import { useGetDms } from '../../hooks/apis/useGetDms';

export default function Sidebar() {
    const { activeTab, setActiveTab, selectedChat, setSelectedChat } = useChatStore();
    const { dms, isFetching: dmsLoading, error: dmsError } = useGetDms();
    const { groups, isFetching: groupsLoading, error: groupsError } = useGetGroups();
    const [searchQuery, setSearchQuery] = useState('');
    console.log(dms);
    

    const handleChatSelect = (chat, type) => {
        setSelectedChat(chat, type);
    };

    const filterDms = (dms) => {
        if (!searchQuery.trim()) return dms;
        return dms.filter(dm =>
            dm.otherUser?.username?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const filterGroups = (groups) => {
        if (!searchQuery.trim()) return groups;
        return groups.filter(group =>
            group.name?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const renderDmsList = () => {
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

        const filteredDms = dms ? filterDms(dms) : [];

        if (!dms?.data || dms.data.length === 0) {
            return (
                <div className="p-4 text-center text-gray-500">
                    <MessageCircle className="mx-auto mb-2 opacity-50" size={32} />
                    <p>No DMs yet</p>
                    <p className="text-sm">Start a conversation!</p>
                </div>
            );
        }

        if (filteredDms.length === 0 && searchQuery.trim()) {
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
                {filteredDms.map((dm) => (
                    <Card
                        key={dm._id}
                        isPressable
                        className={`cursor-pointer transition-all duration-200 hover:shadow-sm ${
                            selectedChat?._id === dm._id && useChatStore.getState().selectedChatType === 'dm'
                                ? 'bg-primary-50 border-primary-200 dark:bg-primary-900/20 shadow-sm'
                                : 'hover:bg-gray-50 dark:hover:bg-gray-800 border-transparent'
                        }`}
                        onPress={() => handleChatSelect(dm, 'dm')}
                    >
                        <CardBody className="py-3 px-3">
                            <div className="flex items-center gap-3">
                                <Avatar 
                                    src={dm.otherUser?.avatar} 
                                    name={dm.otherUser?.username} 
                                    size="sm"
                                    icon={<User />}
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-sm truncate">
                                        {dm.otherUser?.username || 'Unknown User'}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">
                                        {dm.lastMessage?.content || 'No messages yet'}
                                    </p>
                                </div>
                                {dm.unreadCount > 0 && (
                                    <div className="bg-primary-500 text-white text-xs rounded-full px-2 py-1 min-w-5 text-center">
                                        {dm.unreadCount}
                                    </div>
                                )}
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        );
    };

    const renderGroupsList = () => {
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

        const filteredGroups = groups ? filterGroups(groups) : [];

        if (!groups || groups.length === 0) {
            return (
                <div className="p-4 text-center text-gray-500">
                    <Users className="mx-auto mb-2 opacity-50" size={32} />
                    <p>No Groups yet</p>
                    <p className="text-sm">Create or join a group!</p>
                </div>
            );
        }

        if (filteredGroups.length === 0 && searchQuery.trim()) {
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
                {filteredGroups.map((group) => (
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

    return (
        <div className="w-80 h-full border-r-1 border-gray-200 dark:border-gray-700 flex flex-col">
            {/* Header with Search */}
            <div className="border-b-1 border-gray-200 dark:border-gray-700 p-3 space-y-3">
                <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    startContent={<Search size={18} className="text-gray-400" />}
                    variant="bordered"
                    size="sm"
                    classNames={{
                        inputWrapper: "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700",
                        input: "text-sm placeholder:text-gray-400"
                    }}
                />

                {/* Tab Headers */}
                <div className="flex gap-1">
                    <Button
                        variant={activeTab === 'dms' ? 'solid' : 'light'}
                        color={activeTab === 'dms' ? 'secondary' : 'default'}
                        className="flex-1 font-medium"
                        startContent={<MessageCircle size={16} />}
                        onPress={() => setActiveTab('dms')}
                        size="sm"
                    >
                        DMs
                    </Button>
                    <Button
                        variant={activeTab === 'groups' ? 'solid' : 'light'}
                        color={activeTab === 'groups' ? 'secondary' : 'default'}
                        className="flex-1 font-medium"
                        startContent={<Users size={16} />}
                        onPress={() => setActiveTab('groups')}
                        size="sm"
                    >
                        Groups
                    </Button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto">

                {activeTab === 'dms' ? renderDmsList() : renderGroupsList()}
            </div>
        </div>
    );
}