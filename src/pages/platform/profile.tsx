import PlatformLayout from "@/components/layouts/PlatformLayout";
import { type ReactElement } from "react";
import { type NextPageWithLayout } from "../_app";
import { Button } from "@/components/ui/button";
import ProfileForm from "@/components/forms/ProfileForm";

const Profile: NextPageWithLayout = () => {
  return (
    <div className="flex w-full flex-1 gap-6 p-6">
      <div className="w-full">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full flex-col gap-6">
            <div className="">
              <h4 className="text-text-primary text-lg font-medium">Display</h4>
              <p className="text-sm text-muted-foreground">
                This is how your profile will appear to others.
              </p>
            </div>
            <div className="h-full space-y-6 rounded-lg bg-card p-6 shadow shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)]">
              <div className="flex items-center">
                <div className="h-24 w-24 rounded-full bg-blue-900"></div>
                <div className="space-y-2 pl-4">
                  <Button
                    type="button"
                    size="sm"
                    variant="secondary"
                    onClick={() => console.log("upload image")}
                  >
                    Upload new avatar
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    At least 250x250 recommended.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="text-text-primary text-lg font-medium">
                Personal Details
              </h4>
              <p className="text-sm text-muted-foreground">
                Information about you.
              </p>
            </div>
            <div className="h-full space-y-6 rounded-lg bg-card p-6 shadow shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.085)]">
              <div className="">
                <ProfileForm />

                <div className="flex justify-end pt-6">
                  <Button type="button" size="sm" className="">
                    Save changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.getLayout = (page: ReactElement) => {
  return <PlatformLayout>{page}</PlatformLayout>;
};

export default Profile;
