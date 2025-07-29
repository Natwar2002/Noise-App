import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { MessageCircle, Users, Search } from 'lucide-react';
import RenderDmsList from '../Lists/DmsList';
import useChatStore from '../../store/chatStore';
import RenderGroupsList from '../Lists/GroupList';

export default function Sidebar() {

    const { activeTab, setActiveTab } = useChatStore();

    return (
        <div className="w-80 h-full border-r-1 border-gray-200 dark:border-gray-700 flex flex-col">
            {/* Header with Search */}
            <div className="border-b-1 border-gray-200 dark:border-gray-700 p-3 space-y-3">
                <Input
                    placeholder="Search conversations..."
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

            <div className="flex-1 overflow-y-auto">
                {activeTab === 'dms' ? <RenderDmsList /> : <RenderGroupsList />}
            </div>
        </div>
    );
}