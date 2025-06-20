'use server';
export const getProjectsSummary= async () => {
    console.log(process.env.NEXT_PUBLIC_SB_BACK_OFFICE_BASE_URL)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SB_BACK_OFFICE_BASE_URL}/projects/summaries`, {
    cache: "no-store", // disables Next.js ISR caching
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
};


// get project by slug
export const getProjectBySlug = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SB_BACK_OFFICE_BASE_URL}/projects/${slug}`, {
    cache: "no-store", // disables Next.js ISR caching
  });

  if (!res.ok) {
    throw new Error("Failed to fetch project");
  }

  return res.json();
}