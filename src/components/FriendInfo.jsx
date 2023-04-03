import Avatar from "./Avatar";

export default function FriendInfo() {
    return (
        <div className="flex gap-2">
            <Avatar />
            <div>
                <h3 className="font-bold text-xl">Jane Doe</h3>
                <h5 className="text-sm leading-4">5 mutual friends</h5>
            </div>
        </div>
    )
}