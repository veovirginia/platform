import PlatformLayout from "@/components/layouts/PlatformLayout";
import { useRouter } from "next/router";
import { type ReactElement } from "react";
import { type NextPageWithLayout } from "../_app";

const Platform: NextPageWithLayout = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="flex w-full flex-1 gap-6">
      <div className="">{pathname}</div>
    </div>
  );
};

Platform.getLayout = (page: ReactElement) => {
  return <PlatformLayout>{page}</PlatformLayout>;
};

export default Platform;
