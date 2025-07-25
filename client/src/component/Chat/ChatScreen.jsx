import { useState } from 'react';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { IoSend } from "react-icons/io5";
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Avatar } from '@heroui/avatar';
import { Hash, User, MessageCircle } from 'lucide-react';
// import { useGetMessages } from '../../hooks/apis/useGetMessages';
import useChatStore from '../../store/chatStore';
// import useAuth from '../../store/authStore';

export default function ChatScreen() {
    const { selectedChat, selectedChatType } = useChatStore();
    // const { user } = useAuth();
    const [message, setMessage] = useState('');
    // const messagesEndRef = useRef(null);
    
    // const { data: messages, isLoading, error } = useGetMessages(
    //     selectedChat?._id, 
    //     selectedChatType
    // );

    // const scrollToBottom = () => {
    //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    // };

    // useEffect(() => {
    //     scrollToBottom();
    // }, [messages]);

    const handleSendMessage = () => {
        if (message.trim()) {
            // TODO: Implement send message functionality
            console.log('Sending message:', message);
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    if (!selectedChat) {
        return (
            <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center text-gray-500">
                    <MessageCircle size={64} className="mx-auto mb-4 opacity-30" />
                    <h3 className="text-xl font-semibold mb-2">Select a conversation</h3>
                    <p>Choose a DM or group from the sidebar to start chatting</p>
                </div>
            </div>
        );
    }

    const chatTitle = selectedChatType === 'dm' 
        ? selectedChat.otherUser?.username || 'Unknown User'
        : selectedChat.name;

    const chatIcon = selectedChatType === 'dm' ? <User size={20} /> : <Hash size={20} />;

    return (
        <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="border-b-1 border-gray-200 dark:border-gray-700 p-4 dark:bg-slate-950">
                <div className="flex items-center gap-3">
                    <Avatar 
                        src={selectedChatType === 'dm' ? selectedChat.otherUser?.avatar : selectedChat.avatar}
                        name={chatTitle}
                        size="sm"
                        icon={chatIcon}
                    />
                    <div>
                        <h2 className="font-semibold text-lg">{chatTitle}</h2>
                        {selectedChatType === 'group' && (
                            <p className="text-sm text-gray-500">
                                {selectedChat.members?.length || 0} members
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            {/* <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {isLoading && (
                    <div className="text-center text-gray-500 py-8">
                        Loading messages...
                    </div>
                )}

                {error && (
                    <div className="text-center text-red-500 py-8">
                        Error loading messages
                    </div>
                )}

                {messages?.data && messages.data.length === 0 && (
                    <div className="text-center text-gray-500 py-8">
                        <MessageCircle size={48} className="mx-auto mb-4 opacity-30" />
                        <p>No messages yet. Start the conversation!</p>
                    </div>
                )}

                {messages?.data?.map((msg, index) => {
                    const isOwnMessage = msg.senderId === user?._id;
                    const showAvatar = !isOwnMessage && (
                        index === 0 || 
                        messages.data[index - 1]?.senderId !== msg.senderId
                    );

                    return (
                        <div 
                            key={msg._id || index}
                            className={`flex gap-3 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
                        >
                            {!isOwnMessage && (
                                <Avatar 
                                    src={msg.sender?.avatar}
                                    name={msg.sender?.username}
                                    size="sm"
                                    className={showAvatar ? 'opacity-100' : 'opacity-0'}
                                />
                            )}
                            
                            <Card 
                                className={`max-w-xs md:max-w-md ${
                                    isOwnMessage 
                                        ? 'bg-primary-500 text-white' 
                                        : 'bg-gray-100 dark:bg-gray-800'
                                }`}
                            >
                                <CardBody className="py-2 px-3">
                                    {!isOwnMessage && showAvatar && selectedChatType === 'group' && (
                                        <p className="text-xs font-semibold mb-1 text-primary-600 dark:text-primary-400">
                                            {msg.sender?.username}
                                        </p>
                                    )}
                                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                    <p className={`text-xs mt-1 ${
                                        isOwnMessage ? 'text-primary-100' : 'text-gray-500'
                                    }`}>
                                        {new Date(msg.createdAt).toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div> */}
            <div className='flex-1 space-y-4' />

            {/* Message Input */}
            <div className="border-t-1 border-gray-200 dark:border-gray-700 p-4">
                <div className="flex gap-2">
                    <Input
                        radius='full'
                        placeholder={`Message ${chatTitle}...`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1"
                        size="lg"
                    />
                    <Button
                        color="secondary"
                        variant='transparent'
                        isIconOnly
                        size="lg"
                        onPress={handleSendMessage}
                        isDisabled={!message.trim()}
                    >
                        <IoSend size={30} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
