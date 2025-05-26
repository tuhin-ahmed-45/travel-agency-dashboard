import { Header } from "components"

const Dashboard = () => {
    const user = { name: "John Doe" }

    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome, ${user.name} 👋🏼`}
                description={'Track activities, trends and popular destinations in real time'}
            />
            Dashboard Page Content
        </main>
    )
}

export default Dashboard