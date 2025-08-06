import { create } from "zustand";

const useMessageStore = create((set) => ({
    messages: null,

    setMessages: (messages) => {
        set({messages: messages});
    }
}));

export default useMessageStore;