import Hero from '@/components/Hero'
import MainLottie from "@/components/MainLottie";
import animationMain from '@/public/animationMain.json'

export default function Home() {
  return (<Hero imgSection={<MainLottie animationData={animationMain} />} />)
}