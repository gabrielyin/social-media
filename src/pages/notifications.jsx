import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";

export default function NotificationsPage() {
    return (
        <Layout>
            <h1 className="text-6xl mb-4 text-gray-300">Notifications</h1>
            <Card>
                <div>
                    <Avatar />
                    <div>
                        John Doe liked your photo
                    </div>
                </div>
            </Card>
        </Layout>
    )
}