export default function Sidebar() {
    return (
        <div className="w-[25%] h-full border-r-1 border-slate-600">
            <div className="border-1 border-slate-600 flex justify-around">
                <div>DMs</div>
                <div className="border-l-1 border-slate-600"></div>
                <div>Groups</div>
            </div>
        </div>
    );
}