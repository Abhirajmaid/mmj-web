import {
  CategorySec,
  Divider,
  FeaturedSec,
  Hero,
  PromisesSec,
} from "@/src/components";

export default function Home() {
  return (
    <page>
      <div>
        <Hero />
        <CategorySec />
        <Divider />
        <PromisesSec />
        <FeaturedSec />
        <Divider />
      </div>
    </page>
  );
}
