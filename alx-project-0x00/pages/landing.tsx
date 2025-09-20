import Card from "@/components/Card"
const Landing: React.FC =  () => {
  return (
    <div>
      {/* Added rounded-lg to the heading */}
      <h1 className="text-xl font-extralight rounded-lg">Landing Page</h1>
      <Card />
    </div>
  )
}
  
export default Landing