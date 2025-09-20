import Card from "@/components/Card";
import Button from "@/components/Button"; 
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button 
        title="Click Me" 
        styles="bg-blue-500 text-white mt-4 rounded-sm"
        onClick={() => console.log('Button clicked!')}
      />
      <Button 
        title="Subscribe" 
        styles="bg-green-500 text-white mt-4 rounded-full" 
        onClick={() => console.log('Subscribe clicked!')}
      />
    </div>
  );
};

export default Landing;