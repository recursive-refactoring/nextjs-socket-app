import { HeadingText } from "@/components/text/heading-text";
import { convertCurrentCaseToTitleCase } from "@/utils/string-transformation";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const PageHeader = () => {
  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    const splitPathname = pathname?.split("/")?.pop() as string;
    if (!splitPathname) return "Dashboard";
    return convertCurrentCaseToTitleCase(splitPathname);
  }, [pathname]);

  return (
    <HeadingText variant="h6" color="primary.main">
      {pageTitle}
    </HeadingText>
  );
};
