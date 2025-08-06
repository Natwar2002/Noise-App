import { create } from 'zustand';
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_BACKEND_SOCKET_URL);

const useChatStore = create((set) => ({
    selectedChat: null,
    selectedChatType: null, // 'dm' or 'group'
    activeTab: 'dms', // 'dms' or 'groups'
    socket,
    
    setSelectedChat: (chat, chatType) => {
        set({ selectedChat: chat, selectedChatType: chatType });
    },
    
    setActiveTab: (tab) => {
        set({ activeTab: tab });
    },
    
    clearSelectedChat: () => {
        set({ selectedChat: null, selectedChatType: null });
    },

    joinRoom: () => {

    }

}));

export default useChatStore;
