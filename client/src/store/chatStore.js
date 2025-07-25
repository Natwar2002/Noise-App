import { create } from 'zustand';

const useChatStore = create((set) => ({
    selectedChat: null,
    selectedChatType: null, // 'dm' or 'group'
    activeTab: 'dms', // 'dms' or 'groups'
    
    setSelectedChat: (chat, chatType) => {
        set({ selectedChat: chat, selectedChatType: chatType });
    },
    
    setActiveTab: (tab) => {
        set({ activeTab: tab });
    },
    
    clearSelectedChat: () => {
        set({ selectedChat: null, selectedChatType: null });
    }
}));

export default useChatStore;
