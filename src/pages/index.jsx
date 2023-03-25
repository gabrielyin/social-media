import Card from "@/components/Card";

export default function Home() {
  return (
    <div className='flex mt-4 max-w-4xl mx-auto gap-6'>
      <div className="w-1/3">
        <Card>
          <h2>Navigation</h2>
          <a href="">Home</a>
          <a href="">Friends</a>
          <a href="">Saved Posts</a>
          <a href="">Logout</a>
        </Card>
      </div>
      <div className="grow">
        <Card>form here</Card>
        <Card>first post test</Card>
      </div>
    </div>
  )
}