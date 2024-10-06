import Portfolio from "@/components/portfolio";
import content from '@/data/content.json'

export default function Home() {
  return (
    <Portfolio data={content}/>
  );
}
