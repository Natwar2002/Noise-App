import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Zap, Users, Volume2, VolumeX } from "lucide-react";
import useAuth from "../store/authStore";

export default function Home() {
    const navigate = useNavigate();
    const { user, token } = useAuth();
    const isAuthenticated = user && token;

    const handleStartChatting = () => {
        if (isAuthenticated) {
            navigate('/chats');
        } else {
            navigate('/signin');
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                        NOISE
                    </h1>
                    <p className="text-xl md:text-2xl dark:text-purple-600 mb-8 max-w-3xl mx-auto">
                        Because silence is overrated and your thoughts deserve an audience... 
                        whether they want it or not. 🎭
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            color="secondary"
                            variant="shadow"
                            onPress={handleStartChatting}
                            className="text-lg px-8 py-6"
                        >
                            {isAuthenticated ? 'Start Making Noise 🔊' : 'Sign In to Start 🔊'}
                        </Button>
                        <Button
                            size="lg"
                            variant="bordered"
                            className="border text-lg px-8 py-6"
                            onPress={() => navigate('/signin')}
                        >
                            Stay Silent (Boring) 😴
                        </Button>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Card className="backdrop-blur-lg border-purple-500/20">
                        <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                                <MessageCircle className="text-purple-400" size={32} />
                                <h3 className="text-xl font-bold">Endless Chatter</h3>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p className="">
                                Chat until your fingers hurt and your brain runs out of opinions. 
                                We promise to store every brilliant (and not-so-brilliant) thought.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="backdrop-blur-lg border-blue-500/20">
                        <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                                <Zap className="text-blue-400" size={32} />
                                <h3 className="text-xl font-bold">Lightning Fast</h3>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p className="">
                                Messages travel faster than your regret for sending them. 
                                Perfect for those "send now, think later" moments.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="backdrop-blur-lg border-indigo-500/20">
                        <CardHeader className="pb-2">
                            <div className="flex items-center gap-3">
                                <Users className="text-indigo-400" size={32} />
                                <h3 className="text-xl font-bold">Group Chaos</h3>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <p className="">
                                Create groups where everyone talks at once and nobody listens. 
                                It's like a family dinner, but digital!
                            </p>
                        </CardBody>
                    </Card>
                </div>

                {/* Sarcastic Stats */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-8">
                        Impressive* Statistics
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-black text-purple-400">∞</div>
                            <div className="text-purple-400">Messages sent into the void</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-blue-400">42</div>
                            <div className="text-blue-400">Meaning of life discovered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-indigo-400">0</div>
                            <div className="text-indigo-400">Productive conversations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-pink-400">100%</div>
                            <div className="text-pink-400">Chance of addiction</div>
                        </div>
                    </div>
                    <p className="text-sm text-slate-800 dark:text-gray-300 mt-4">*Statistics may be slightly exaggerated</p>
                </div>

                {/* Volume Control Metaphor */}
                <div className="max-w-4xl mx-auto text-center">
                    <Card className="backdrop-blur-lg border-white/10">
                        <CardBody className="p-8">
                            <div className="flex items-center justify-center gap-8 mb-6">
                                <VolumeX className="text-gray-500" size={48} />
                                <div className="flex-1 h-2 bg-gradient-to-r from-gray-500 via-yellow-400 to-red-500 rounded-full relative">
                                    <div className="absolute right-0 w-4 h-4 bg-red-500 rounded-full -top-1 shadow-lg"></div>
                                </div>
                                <Volume2 className="text-red-500" size={48} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Your Volume is Currently: MAXIMUM CHAOS
                            </h3>
                            <p className="text-lg">
                                Join NOISE and turn your social life up to 11. 
                                Side effects may include: uncontrollable urge to share memes, 
                                decreased productivity, and an inexplicable need to argue about pineapple on pizza.
                            </p>
                        </CardBody>
                    </Card>
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-16">
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Still reading? You're definitely our target audience.
                    </p>
                    <Button
                        size="lg"
                        color="warning"
                        variant="shadow"
                        onPress={handleStartChatting}
                        className="text-lg px-12 py-6 animate-pulse"
                    >
                        {isAuthenticated ? 'Embrace the NOISE 🎪' : 'Sign In First 🎪'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
