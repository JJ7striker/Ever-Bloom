import Image from "next/image";
import Logo from "@/public/flower-logo.png"
import ImageSlider from "@/components/ImageSlider";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="w-full min-h-full">
      <ImageSlider />
      <ProductList />
    </div>
  );
}
