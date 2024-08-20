import {
  CategorySec,
  DiamondSec,
  Divider,
  FeaturedSec,
  Footer,
  GallerySec,
  Hero,
  MensSec,
  PromisesSec,
  StoreLocationSec,
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
        <DiamondSec />
        <Divider />
        <MensSec />
        <Divider />
        <StoreLocationSec />
        <Divider />
        <GallerySec />
      </div>
    </page>
  );
}
