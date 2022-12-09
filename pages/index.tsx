import { useCallback, useEffect, useState } from "react";

import Button from "@/components/Button";
import type { FC } from "react";
import FooterLayout from "@/layouts/FooterLayout";
import FullHeightLayout from "@/layouts/FullHeightLayout";
import { NextSeo as Head } from "next-seo";
import Link from "next/link";
import RecipeSlider from "@/components/RecipeSlider";
import { useLocalstorageState } from "rooks";
import { allRecipes } from "contentlayer/generated";
import type { Recipe } from "contentlayer/generated";

export default function IndexPage() {
  const [latest] = useLocalstorageState("latest", null);
  const [recipies, setRecipies] = useState(allRecipes);
  const [selected, setSelected] = useState(recipies[0]);

  const onChange = useCallback(
    (index: number) => setSelected(recipies[index]),
    [setSelected]
  );

  // Sort lastly used recipe first upon first render,
  // preventing a client-server mismatch upon hydration:
  useEffect(() => {
    setRecipies(recipies.sort(byLatestFirst(latest)));
    setSelected(recipies[0]);
  }, []);

  return (
    <>
      <Head />
      <FullHeightLayout className="pt-6">
        <RecipeSlider onChange={onChange} recipies={recipies} />
      </FullHeightLayout>
      <FooterLayout>
        <Link href={`/${selected.slug}`}>
          <Button>Brew {selected.name}</Button>
        </Link>
      </FooterLayout>
    </>
  );
}

const byLatestFirst = (latest: string) => (a: Recipe, b: Recipe) => {
  if (!!latest) {
    if (a.slug === latest) return -1;
    if (b.slug === latest) return 1;
  }
  return a.name.localeCompare(b.name);
};
