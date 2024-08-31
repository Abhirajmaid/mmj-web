"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PaginationControls = ({ count }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "12";

  const max_limit = Math.ceil(count / Number(per_page));

  const handleAppendQueryParamPrev = () => {
    params.delete("page");
    params.delete("per_page");
    params.append("page", Number(page) - 1); // Append the new parameter
    params.append("per_page", per_page); // Append the new parameter
    router.push(`?${params.toString()}`); // Update the URL
  };
  const handleAppendQueryParamNext = () => {
    params.delete("page");
    params.delete("per_page");
    params.append("page", Number(page) + 1); // Append the new parameter
    params.append("per_page", per_page); // Append the new parameter
    router.push(`?${params.toString()}`); // Update the URL
  };

  return (
    <div className="md:mt-[80px] mt-[50px] md:mb-[60px] mb-[140px] flex gap-4 items-center justify-center">
      {page > 1 ? (
        <button
          className="btn bg-sec text-white"
          onClick={handleAppendQueryParamPrev}
        >
          prev page
        </button>
      ) : (
        <button className="btn bg-sec text-white opacity-50">prev page</button>
      )}

      <div>
        {page} / {Math.ceil(count / Number(per_page))}
      </div>

      {page < max_limit ? (
        <button
          className="btn bg-sec text-white "
          onClick={handleAppendQueryParamNext}
        >
          next page
        </button>
      ) : (
        <button className="btn bg-sec text-white opacity-50">next page</button>
      )}
    </div>
  );
};

export default PaginationControls;
